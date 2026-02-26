type RandomUserResponse = {
     results: Array<{
          gender: string;
          email: string;
          phone: string;
          login: { uuid: string; username: string; password: string };
          name: { title: string; first: string; last: string };
          picture: { large: string };
          location: {
               street: { number: number; name: string };
               city: string;
               state: string;
               country: string;
          };
     }>;
};

const usersResponse: RandomUserResponse = {
     results: [
          {
               gender: 'male',
               email: 'joao@gmail.com',
               phone: '21999999999',
               login: { uuid: 'user-1', username: 'joao', password: '123456' },
               name: { title: 'Mr', first: 'Joao', last: 'Silva' },
               picture: { large: 'https://example.com/joao.jpg' },
               location: {
                    street: { number: 100, name: 'Rua A' },
                    city: 'Rio de Janeiro',
                    state: 'RJ',
                    country: 'Brasil',
               },
          },
          {
               gender: 'female',
               email: 'maria@gmail.com',
               phone: '11999999999',
               login: { uuid: 'user-2', username: 'maria', password: 'abcdef' },
               name: { title: 'Ms', first: 'Maria', last: 'Souza' },
               picture: { large: 'https://example.com/maria.jpg' },
               location: {
                    street: { number: 200, name: 'Rua B' },
                    city: 'Sao Paulo',
                    state: 'SP',
                    country: 'Brasil',
               },
          },
     ],
};

function visitUsersPage(delay = 0) {
     cy.intercept('GET', 'https://randomuser.me/api/*', {
          statusCode: 200,
          delay,
          body: usersResponse,
     }).as('getUsers');

     cy.visit('/');
}

describe('Users E2E', () => {
     it('deve renderizar busca e lista inicial', () => {
          visitUsersPage();
          cy.wait('@getUsers');

          cy.contains('List of Users').should('be.visible');
          cy.get('input.inputSearchUser').should('be.visible');
          cy.get('select').should('be.visible');
          cy.get('.Users').should('have.length', 2);
          cy.contains('Joao Silva').should('be.visible');
          cy.contains('Maria Souza').should('be.visible');
     });

     it('deve exibir loading enquanto carrega usuarios', () => {
          visitUsersPage(600);

          cy.get('.spinner').should('be.visible');
          cy.wait('@getUsers');
          cy.get('.spinner').should('not.exist');
          cy.get('.Users').should('have.length', 2);
     });

     it('deve filtrar usuarios por texto', () => {
          visitUsersPage();
          cy.wait('@getUsers');

          cy.get('input.inputSearchUser').type('maria');
          cy.get('.Users').should('have.length', 1);
          cy.contains('Maria Souza').should('be.visible');
          cy.contains('Joao Silva').should('not.exist');
     });

     it('deve filtrar usuarios por genero', () => {
          visitUsersPage();
          cy.wait('@getUsers');

          cy.get('select').select('female');
          cy.get('.Users').should('have.length', 1);
          cy.contains('Maria Souza').should('be.visible');
          cy.contains('Joao Silva').should('not.exist');
     });

     it('deve navegar para detalhes e voltar para lista', () => {
          visitUsersPage();
          cy.wait('@getUsers');

          cy.contains('Joao Silva')
               .closest('li.Users')
               .find('button')
               .contains('View Details')
               .click();

          cy.url().should('include', '/users/user-1');
          cy.contains('User Details').should('be.visible');
          cy.contains('Joao Silva').should('be.visible');
          cy.contains('joao@gmail.com').should('be.visible');
          cy.contains('Street:').should('be.visible');

          cy.contains('button', 'Back').click();
          cy.url().should('match', /\/$/);
          cy.contains('List of Users').should('be.visible');
     });
});
