import { parseCookies } from "nookies";

function getAuthToken({ ctx }: { ctx: any }) {
    const cookies = parseCookies(ctx);
    return cookies._token || null;
}

export { getAuthToken }