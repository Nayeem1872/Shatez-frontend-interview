import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import NextAuth, { AuthOptions } from "next-auth"
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import Google from "next-auth/providers/google"



export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        console.log("Google profile data:", profile);
        return { role: profile.email==="work25355@gmail.com"  ? "admin":"user",
        id:profile.sub,
        email:profile.email,
        image:profile.picture,
        name:profile.name
      }
      }
    })
  ],
  callbacks: {
    
    session({ session, user }) {
      session.user.role = user.role

      console.log(session)
      return session
      // console.log(user)
    }

  },
  // callbacks: {
  //   async jwt(token, user) {
  //     if (user) {
  //       token.role = user.role;
  //       // Add other properties if necessary
  //     }
  //     return token;
  //   },
  //   async session(session, token) {
  //     session.user.role = token.role;
  //     // Add other properties if necessary
  //     return session;
  //   },
  // },
  


  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
    }),
  }) as Adapter
}
export default NextAuth(authOptions)