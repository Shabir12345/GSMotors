const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const photo = await prisma.vehiclePhoto.findFirst({
        where: { url: { contains: 'pub-73196647f1974c3b8fd963df9d5798ae' } }
    });
    console.log('Fixed URL sample:', photo?.url);
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
