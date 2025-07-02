const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function crearAdmin() {
  const hashed = await bcrypt.hash('admin1234', 10);
  const admin = await prisma.usuario.create({
    data: {
      nombre: 'Administrador',
      email: 'admin@milozzfit.com',
      password: hashed,
      rol: 'ADMIN',
      fechaInicio: new Date(),
    },
  });
  console.log('Admin creado:', admin);
}

crearAdmin()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
