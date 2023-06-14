import { BASE_URL } from '../consts.js';

const registerUser = async ({
    username,
    password,
}) => {
    try {
        const response = await fetch(
            `${BASE_URL}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username,
                        password,
                    }
                })
            });
        const result = await response.json();

        return result;
    } catch (err) {
        console.error(err);
    }
}

export default registerUser;
