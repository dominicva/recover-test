import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import type { NextAuthOptions } from 'next-auth';

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const authResponse = await fetch('/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();

        return user;
      },
    }),
  ],
});

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       async authorize(credentials) {
//         const authResponse = await fetch('/users/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(credentials),
//         });

//         if (!authResponse.ok) {
//           return null;
//         }

//         const user = await authResponse.json();

//         return user;
//       },
//     }),
//     Google({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
// };
