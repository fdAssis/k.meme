import { query } from 'faunadb';
import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import { signIn } from 'next-auth/react';
import { fauna } from '../../../service/fauna';


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      version: "2.0"
    }),

  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { email } = user;
      try
      {
        await fauna.query(
          query.Create(
            query.Collection('users'),
            { data: { email } }
          )
        )
        return true;
      } catch {
        return false;
      }

    }
  }
})