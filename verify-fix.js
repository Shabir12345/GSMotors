const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const photos = await prisma.vehiclePhoto.findMany({
        where: {
            url: {
                contains: '73196647f1974c3b8fd963df9d5798ae'
            }
        },
        take: 5,
        select: { id: true, url: true }
    });
    console.log('Fixed R2 Photos:');
    console.log(JSON.stringify(photos, null, 2));
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
