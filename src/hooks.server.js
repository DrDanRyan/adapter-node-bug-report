import { env } from "$env/dynamic/private";

export async function handle({ event, resolve }) {
    if (env.HOST === "localhost") {
        console.log("Hello localhost!");
    }
    return resolve(event);
}