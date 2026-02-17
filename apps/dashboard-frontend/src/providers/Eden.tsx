import { treaty } from '@elysiajs/eden'
import type { App } from 'app'
import { createContext, useContext } from 'react';

const API_URL = process.env.VITE_API_URL || 'localhost:3000';

const client = treaty<App>(API_URL, {
    fetch: {
        credentials: 'include'
    }
}) ;

const ElysiaClientContext = createContext(client);

export const ElysiaClientContextProvider = ElysiaClientContext.Provider;
export const useElysiaClient = () => {
    const client = useContext(ElysiaClientContext);
    return client;
}