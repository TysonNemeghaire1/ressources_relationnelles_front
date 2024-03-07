import { jwtDecode } from "jwt-decode";

interface DecodedToken {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

/**
 * Effectue une requête d'authentification au backend.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{token: string, user: object}>}
 */
export async function login(email:string, password:string) {
    try {
        const response = await fetch('http://localhost/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            const decodedToken:DecodedToken = jwtDecode(data.token)
            const user = {
                id: decodedToken?.id,
                name: `${decodedToken?.firstName} ${decodedToken?.lastName}`,
                email: decodedToken?.email,
            } 
            console.log(user)
            return { token: data.token, user };
        } else {
            throw new Error(data.message || "Erreur d'authentification");
        }
    } catch (error) {
        throw error;
    }
}

export async function getMyUser(){
    try {
        const response = await fetch('http://localhost/api/user/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ }),
        });

        const data = await response.json();

        if (response.ok) {
            return { data };
        } else {
            throw new Error(data.message || "Erreur d'authentification");
        }
    } catch (error) {
        throw error;
    }
}