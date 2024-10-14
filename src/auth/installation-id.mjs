import { App } from "octokit";
import { env_appId, env_privateKey, env_username } from "../env.mjs";

export async function getOctokit(appId = env_appId, privateKey = env_privateKey) {
    const app = new App({ appId, privateKey });

    // https://docs.github.com/en/rest/apps/apps?#get-a-repository-installation-for-the-authenticated-app
    const {data: installation} = await app.octokit.request(
        `GET /users/{username}/installation`,
        { username: env_username }
    );

    return app.getInstallationOctokit(installation.id);
}
export const octokit = await getOctokit();