const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const photos = await prisma.vehiclePhoto.findMany({
        where: {
            url: {
                contains: 'r2'
            }
        },
        take: 5,
        select: { id: true, url: true }
    });
    console.log('Photos with R2 in URL:');
    console.log(JSON.stringify(photos, null, 2));

    const allCount = await prisma.vehiclePhoto.count();
    console.log('Total photos in DB:', allCount);
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
