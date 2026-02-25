import type { User } from '../types/user.ts';

export async function fetchUsers(): Promise<User[]> {
     const response = await fetch('https://randomuser.me/api/?results=20');

     if (!response.ok) {
          throw new Error('Erro ao buscar usuários');
     }

     const data = await response.json();
     console.log(data.results);
     return data.results;
}
