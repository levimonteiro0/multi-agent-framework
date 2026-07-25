/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

// Só executa se estiver rodando dentro do Vercel
if (!process.env.VERCEL) {
  console.log('Ambiente local detectado. Ignorando switch de banco para PostgreSQL.');
  process.exit(0);
}

const schemaPath = path.join(__dirname, '../prisma/schema.prisma');

try {
  let schemaContent = fs.readFileSync(schemaPath, 'utf8');

  // Troca de sqlite para postgresql
  schemaContent = schemaContent.replace(/provider\s*=\s*"sqlite"/g, 'provider = "postgresql"');
  
  fs.writeFileSync(schemaPath, schemaContent);
  console.log('✅ schema.prisma atualizado com sucesso para PostgreSQL.');
} catch (error) {
  console.error('❌ Erro ao atualizar schema.prisma:', error);
  process.exit(1);
}
