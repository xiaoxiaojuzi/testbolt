import type { AuthConfig } from '@auth/core';
import type { User } from './types';

export const authConfig: AuthConfig = {
  providers: [],
  pages: {
    signIn: '/signin',
    signUp: '/signup',
    error: '/auth/error',
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        (session.user as User).id = user.id;
      }
      return session;
    },
  },
};