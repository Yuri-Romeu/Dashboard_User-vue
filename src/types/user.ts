export type User = {
     gender: string;
     login: {
          uuid: string;
     };
     name: {
          title: string;
          first: string;
          last: string;
     };
     picture: {
          large: string;
     };
     location: {
          street: {
               number: number;
               name: string;
          };
          city: string;
          state: string;
          country: string;
     };
     email: string;
};
