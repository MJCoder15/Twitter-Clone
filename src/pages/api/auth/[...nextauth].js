import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "../../../../models/User";
import connectDB from "../../../../db/db";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }){
      const sessionUser = await User.findOne({email: session.user.email})

      session.user.id = sessionUser._id;

      return session;
    },
    async signIn({ profile }) {
      console.log(profile);

      try {
        await connectDB();

        const userExists = await User.findOne({ email: profile.email });

        if (!userExists) {
          const user = await User.create({
            name: profile.name,
            email: profile.email,
            image: profile.image,
          });

          user.save();
        }

        return true;

      } catch (error) {
        console.log(error);
        return false;
      }
    },
    async signOut({ redirect, ...args}){
      return redirect('/');
    }
  },
});


