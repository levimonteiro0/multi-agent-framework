const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.updateMany({
    where: { email: 'admin@umbu.com.br' },
    data: { role: 'SUPERADMIN' }
  });
  console.log('Admin updated');
}

main().catch(console.error).finally(() => prisma.$disconnect());
