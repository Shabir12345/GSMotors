const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const photo = await prisma.vehiclePhoto.findFirst({
        where: { url: { contains: 'r2.cloudflarestorage.com' } }
    });
    if (photo) {
        const url = new URL(photo.url);
        console.log('Full URL:', photo.url);
        console.log('Pathname:', url.pathname);
    } else {
        console.log('No R2 URLs found.');
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
