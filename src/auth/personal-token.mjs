import { Octokit } from "octokit";
import { env_authPersonal } from "../env.mjs";

export const octokit = new Octokit({
    auth: env_authPersonal
});