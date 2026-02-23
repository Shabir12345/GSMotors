const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const newBaseUrl = process.argv[2];

if (!newBaseUrl || !newBaseUrl.startsWith('http')) {
    console.error('Usage: node fix-database-urls.js <YOUR_PUBLIC_R2_URL>');
    process.exit(1);
}

const cleanBaseUrl = newBaseUrl.replace(/\/$/, '');

async function main() {
    console.log(`🚀 Starting database URL repair...`);
    const photos = await prisma.vehiclePhoto.findMany();
    console.log(`Checking ${photos.length} photos...`);

    let fixedCount = 0;

    for (const photo of photos) {
        if (photo.url.includes('r2.cloudflarestorage.com')) {
            // Find the position of the first single slash after http:// or https://
            const protocolEnd = photo.url.indexOf('//') + 2;
            const pathStart = photo.url.indexOf('/', protocolEnd);

            if (pathStart !== -1) {
                const path = photo.url.substring(pathStart); // includes the leading slash
                const newUrl = `${cleanBaseUrl}${path}`;

                await prisma.vehiclePhoto.update({
                    where: { id: photo.id },
                    data: { url: newUrl }
                });

                console.log(`✅ Fixed: ${photo.id} -> ${newUrl}`);
                fixedCount++;
            }
        }
    }

    console.log(`\n🎉 Repair Complete! Fixed ${fixedCount} photo URLs.`);
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
