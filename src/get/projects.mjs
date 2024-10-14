import { octokit } from "../auth/installation-id.mjs";
// import { octokit } from "../auth/personal-token.mjs";
import { env_username } from "../env.mjs";

export async function getProject1(projectID) {
    return await octokit.request('GET /projects/{project_id}', {
        project_id: projectID,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
}
export async function getProject2() {
    return await octokit.request('GET /projects', {
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });
}
export async function getProject3() {
    return await octokit.rest.projects.listForUser({
        username: env_username
    });
}