import { configDotenv } from "dotenv";

configDotenv({path: "./.env.local"});

export const    env = {
                    appId: process.env.APP_ID,
                    auth: {
                        classic: process.env.CLASSIC_AUTH,
                        personal: process.env.PERSONAL_AUTH,
                    },
                    privateKey: process.env.PEM,
                    repo: process.env.REPOSITORY,
                    username: process.env.USERNAME,
                };
export const    env_authClassic = env.auth.classic,
                env_authPersonal = env.auth.personal,
                env_username = env.username,
                env_privateKey = env.privateKey,
                env_appId = env.appId,
                env_repo = env.repo;