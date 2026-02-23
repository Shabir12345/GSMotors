const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const photo = await prisma.vehiclePhoto.findFirst({
        where: {
            altText: {
                contains: '2018_Honda_CR-V'
            }
        }
    });

    if (photo) {
        console.log('Found photo:');
        console.log('ID:', photo.id);
        console.log('URL:', photo.url);
    } else {
        console.log('Photo not found with that alt text.');
        // List all
        const all = await prisma.vehiclePhoto.findMany({ take: 5 });
        console.log('Latest 5 photos:', JSON.stringify(all.map(p => ({ id: p.id, url: p.url })), null, 2));
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
