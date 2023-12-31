import NextAuth, { DefaultSession } from "next-auth"
 
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: DefaultUser & { id: string; role: string };
}
interface User extends DefaultUser {
    role: string;
}
}