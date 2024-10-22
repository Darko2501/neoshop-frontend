export async function loginUser(credentials) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/token/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });
    if (!response.ok) throw new Error("Failed to login user");
    return await response.json();
}

export async function logoutUser(token) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/token/logout/`, {
        method: 'POST',
        headers: { 'Authorization': `Token ${token}` },
    });
    if (!response.ok) throw new Error("Failed to logout user");
    return await response.json();
}

export async function registerUser(userData) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/users/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error("Failed to register user");
    return await response.json();
}
