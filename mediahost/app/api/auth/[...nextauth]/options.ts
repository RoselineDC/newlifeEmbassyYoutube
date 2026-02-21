import { connectToMongoDB } from "@/lib/db";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcryptjs";


export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text"},
        username: { label: "Username", type: "text" },
        password: {
          label: "Password",
          type: "password",
         
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password)        {
         throw new Error("Email and password are required");
        }
        try{
            // connect to db
            await connectToMongoDB();
            const user = await User.findOne({email: credentials.email});
            if (!user) {
                throw new Error("User not found");
            }

            // check password
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
            if (!isPasswordCorrect) {
                throw new Error("Invalid credentials");
            }

            return user;


        } 
        catch (error) {
            throw error;
        };
        },
    }),
  ],
  // navigate to home page after login
  pages: {
    signIn: "/login",
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};
