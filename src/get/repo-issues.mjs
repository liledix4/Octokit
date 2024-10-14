import { octokit } from "../auth/personal-token.mjs";
import { env_repo, env_username } from "../env.mjs";

export async function getIssues(username = env_username, repo = env_repo) {
    return await octokit.request('GET /repos/{username}/{repo}/issues', {
        username: username,
        repo: repo,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
}