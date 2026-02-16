import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')
  
  try {
    // Check if admin exists
    const adminExists = await prisma.user.findUnique({
      where: { email: 'admin@angelwings.com' }
    })

    if (!adminExists) {
      const adminPassword = await bcrypt.hash('admin123', 12)
      await prisma.user.create({
        data: {
          email: 'admin@angelwings.com',
          name: 'Admin User',
          password: adminPassword,
          role: 'ADMIN',
        },
      })
      console.log('Admin user created')
    }

    // Check if test user exists
    const userExists = await prisma.user.findUnique({
      where: { email: 'user@angelwings.com' }
    })

    if (!userExists) {
      const userPassword = await bcrypt.hash('user123', 12)
      await prisma.user.create({
        data: {
          email: 'user@angelwings.com',
          name: 'Test User',
          password: userPassword,
          role: 'USER',
        },
      })
      console.log('Test user created')
    }
  } catch (error) {
    console.error('Error seeding database:', error)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
