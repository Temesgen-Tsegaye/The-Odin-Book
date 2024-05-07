import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import passage from "next-auth/providers/passage"
// Your own logic for dealing with plaintext password strings; be careful!
// import { saltAndHashPassword } from "@/utils/password"
 import { PrismaAdapter } from "@auth/prisma-adapter"
 import { PrismaClient } from "@prisma/client"

 const prisma = new PrismaClient()
export const { handlers, signIn, signOut, auth } = NextAuth({
    pages:{
       
      signIn:"/login"
    },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
     
      authorize: async (credentials) => {
        let user = null
 console.log(credentials,'cre')
        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password)
     
        // logic to verify if user exists
      //   user = await prisma.user.findUnique({
      //       where:{
      //           email:credentials.email
      //       }
      // })
 
        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.")
        }
 
        // return user object with the their profile data
        console.log(user)
        return user
      },
      
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = user
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id
      return session
    },
  },
})



async function getUserFromDb(params:string,params2:string) {
    
    return  {
        name:"Hey",
        password:"ldfkusdru"
    }
}