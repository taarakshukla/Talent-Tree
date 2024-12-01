'use server'
import NextAuth from 'next-auth';
import AppleProvider from 'next-auth/providers/apple';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import TwitterProvider from 'next-auth/providers/twitter';
import LinkedInProvider from 'next-auth/providers/linkedin';
import User from '@/models/User';
import connectDB from '@/db/connectDB';

export const authoptions = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            scope: 'read:user user:email'
        }),
        AppleProvider({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET
        }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET
        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider === "github") {
                await connectDB();

                try {

                    const currentUser = await User.findOne({ email: user.email });

                    if (currentUser) {
                        return true;
                    }

                    if (!currentUser) {
                        const newUser = await User.create({
                            providerId: user.id,
                            email: user.email,
                            name: user.name,
                            username: profile.login,
                            profilePic: user.image,
                            provider: account.provider
                        });
                    }
                    return true;
                } catch (error) {
                    console.error("Error in Github signIn callback:", error);
                    return false;
                }
            }

            if (account.provider === "google") {
                await connectDB()
                try {
                    let userEmail = user.email
                    const currentUser = await User.findOne({ email: userEmail })

                    if (currentUser) {
                        return true
                    }

                    if (!currentUser) {
                        const newUser = await User.create({
                            providerId: user.id,
                            email: user.email,
                            name: user.name,
                            username: userEmail.split('@')[0],
                            profilePic: user.image,
                            provider: account.provider
                        })
                    }

                } catch (error) {
                    console.error("Error in Google signIn callback:", error);
                    return false;
                }
            }
            return true;
        },
        async session({ session, user, token }) {
            await connectDB();

            try {
                const dbUser = await User.findOne({ email: session.user.email });

                if (!dbUser) {
                    console.error("User not found in session callback");
                    return session;
                }

                session.user.username = dbUser.username

                return session;
            } catch (error) {
                console.error("Error in session callback:", error);
                return session; // Return the session even if there's an error
            }
        }
    }
});

export { authoptions as GET, authoptions as POST };
