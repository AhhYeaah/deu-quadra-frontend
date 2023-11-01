import axios from 'axios';
import { useAuth } from '../hooks/Auth';

export interface AuthResult {
  login: Function;
  getCourts: Function;
}

export function useApi(): AuthResult {
  const { tokens } = useAuth();

  const client = axios.create({
    headers: { Authorization: `Bearer ${tokens?.authToken.token}` },
    baseURL: import.meta.env.VITE_API_URL,
  });

  async function login(email: string, password: string) {
    return client.post('/users/login', {
      email,
      password,
    });
  }

  async function getCourts() {
    return {
      data: [
        {
          id: 1,
          address: 'Rua Salgueiro, 39 - Jardim Belval, Barueri - SP',
          name: 'Tennis Court A',
          company: {
            name: 'Ace Sports Club',
            id: '001',
          },
          price: 25.0,
        },
        {
          id: 1,
          address: 'Avenida dos Esportes, 123 - Centro, São Paulo - SP',
          name: 'Basketball Court 1',
          company: {
            name: 'Jump Shot Arena',
            id: '002',
          },
          price: 15.0,
        },
        {
          id: 1,
          address: 'Rua do Futebol, 456 - Vila Esportiva, Campinas - SP',
          name: 'Soccer Field B',
          company: {
            name: 'Goal Kick Stadium',
            id: '003',
          },
          price: 1000.0,
        },
        {
          id: 1,
          address: 'Rua do Futebol, 456 - Vila Esportiva, Campinas - SP',
          name: 'Soccer Field B',
          company: {
            name: 'Goal Kick Stadium',
            id: '003',
          },
          price: 150.0,
        },
        {
          id: 1,
          address: 'Rua do Futebol, 456 - Vila Esportiva, Campinas - SP',
          name: 'Soccer Field B',
          company: {
            name: 'Goal Kick Stadium',
            id: '003',
          },
          price: 40.0,
        },
        {
          id: 1,
          address: 'Rua do Futebol, 456 - Vila Esportiva, Campinas - SP',
          name: 'Soccer Field B',
          company: {
            name: 'Goal Kick Stadium',
            id: '003',
          },
          price: 40.0,
        },
        {
          id: 1,
          address: 'Rua do Futebol, 456 - Vila Esportiva, Campinas - SP',
          name: 'Soccer Field B',
          company: {
            name: 'Goal Kick Stadium',
            id: '003',
          },
          price: 40.0,
        },
        {
          id: 1,
          address: 'Rua do Futebol, 456 - Vila Esportiva, Campinas - SP',
          name: 'Soccer Field B',
          company: {
            name: 'Goal Kick Stadium',
            id: '003',
          },
          price: 40.0,
        },
      ],
    };
  }
  return { login, getCourts };
}
