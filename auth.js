import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./app/lib/utils";
import { Users } from "./app/lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    await connectToDB(); // Ensure to await DB connection
    const user = await Users.findOne({ username: credentials.username });

    if (!user || !user.isAdmin) throw new Error("Wrong Credentials");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong Credentials");

    return user;
  } catch (err) {
    console.error(err); // Use console.error for error logging
    throw new Error("Failed to login!");
  }
}

export const authOptions = {
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user || null; // Return null if user is not found
        } catch (err) {
          return null; // Return null on error
        }
      }
    })
  ]
};

export default NextAuth(authOptions);
