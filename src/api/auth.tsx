/**
 * Effectue une requête d'authentification au backend.
 * @param {string} email L'email de l'utilisateur.
 * @param {string} password Le mot de passe de l'utilisateur.
 * @returns {Promise<{token: string, user: object}>} Un objet contenant le token et les détails de l'utilisateur.
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
            const user = {
                id : '02321421', 
                name: 'Patricio', 
                email: 'dadzad.zeze@dzdz.com'
            };
        
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