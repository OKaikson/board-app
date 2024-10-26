import type { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";

const sClientId = process.env.GITHUB_ID;
const sClientSecret = process.env.GITHUB_SECRET;

if (!sClientId || !sClientSecret){
    throw Error("Missing clientId or clientSecret")
}

export const authOptions : NextAuthOptions = {
    providers: [
        Github({
            clientId: sClientId,
            clientSecret: sClientSecret
        })
    ]
}