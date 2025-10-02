import { PrismaClient } from '../../generated/prisma/index.js';


const prisma = new PrismaClient();

async function main() {
    const boss = await prisma.users.upsert(
        {
            where: { name: 'Edelmira' },
            update: {},
            create: {
                name: 'Edelmira',
                password: 'admin',
                role: 'admin'
            }
        }
    )

    const regular = await prisma.users.upsert(
        {
            where: { name: 'Alma' },
            update: {},
            create: {
                name: 'Alma',
                password: 'user',
                role: 'user'
            }
        }
    )
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })