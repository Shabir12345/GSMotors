const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const photos = await prisma.vehiclePhoto.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: { id: true, url: true }
    });
    console.log(JSON.stringify(photos, null, 2));
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
