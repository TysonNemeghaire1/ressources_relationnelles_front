/**
 * Effectue une requête d'authentification au backend.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{token: string}>}
 */
export async function getToken(email:string, password:string): Promise<{ token: string; }> {
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
            return { token: data.token };
        } else {
            throw new Error(data.message || "Erreur d'authentification");
        }
    } catch (error) {
        throw error;
    }
}

/**
 * Envoie une requête d'inscription au backend.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{user: object}>}
 */
export async function signup(email: string, password: string): Promise<{ user: object; }> {
    try {
        const body = JSON.stringify({ email, password });

        const response = await fetch('http://localhost/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body,
        });

        const data = await response.json();

        if (response.ok) {
            return { user: data.user };
        } else {
            throw new Error(data.message || "Erreur lors de l'inscription");
        }
    } catch (error) {
        console.error("Erreur lors de l'inscription:", error);
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