import { octokit } from "../auth/personal-token.mjs";

export async function loginTest() {
    const {
        data: { login },
    } = await octokit.rest.users.getAuthenticated();
    return `Hello, ${login}`;
}