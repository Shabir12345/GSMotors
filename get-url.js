const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const photo = await prisma.vehiclePhoto.findUnique({
        where: { id: 'cmlz8f06c000btp70npgke33y' }
    });
    console.log('Exact broken URL:', photo?.url);
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
