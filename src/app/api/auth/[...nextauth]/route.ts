import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Hardcoded users for demo
const users = [
  {
    id: "1",
    email: "admin@angelwings.com",
    password: "admin123",
    name: "Admin User",
    role: "ADMIN"
  },
  {
    id: "2",
    email: "user@angelwings.com",
    password: "user123",
    name: "Test User",
    role: "USER"
  }
]

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Find user
        const user = users.find(u => u.email === credentials.email)
        
        // Check password (plain text for demo)
        if (user && user.password === credentials.password) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
          }
        }
        
        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string
        session.user.id = token.id as string
      }
      return session
    }
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt"
  },
  secret: "test-secret-key-123456"
})

export { handler as GET, handler as POST }
