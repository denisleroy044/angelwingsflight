import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')
  
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
      console.log('✅ Admin user created')
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
      console.log('✅ Test user created')
    }

    // Add sample flights
    const flightCount = await prisma.flight.count()
    if (flightCount === 0) {
      await prisma.flight.createMany({
        data: [
          {
            airline: 'Emirates',
            flightNumber: 'EK202',
            origin: 'DXB',
            destination: 'JFK',
            departureTime: new Date(),
            arrivalTime: new Date(Date.now() + 14 * 60 * 60 * 1000),
            duration: 840,
            stops: 0,
            priceEconomy: 850,
            priceBusiness: 2500,
            priceFirst: 5000,
            availableSeats: 150,
          },
          {
            airline: 'Qatar Airways',
            flightNumber: 'QR123',
            origin: 'DOH',
            destination: 'LHR',
            departureTime: new Date(),
            arrivalTime: new Date(Date.now() + 7 * 60 * 60 * 1000),
            duration: 420,
            stops: 0,
            priceEconomy: 750,
            priceBusiness: 2200,
            priceFirst: 4500,
            availableSeats: 120,
          }
        ],
      })
      console.log('✅ Sample flights created')
    }

  } catch (error) {
    console.error('❌ Error seeding database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
