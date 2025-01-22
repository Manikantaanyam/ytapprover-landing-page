import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "enter email",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "enter password",
        },
      },
      async authorize(credentials: any) {
        return {
          id: "user2",
          email: credentials.email,
          password: credentials.password,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
        },
      },
      async profile(profile) {
        return {
          id: profile.sub, // Use the unique Google user ID
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ user, token }: any) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.password = user.password;
      }
      console.log("token", token);
      return token;
    },

    session: async ({ session, token }: any) => {
      if (session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.password = token.password;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
