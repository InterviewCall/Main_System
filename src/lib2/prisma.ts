// import { PrismaClient } from '@prisma/client';

// const globalForPrisma = global as unknown as { prisma: PrismaClient };

// const prismaClientSingleton = () => {
//     return new PrismaClient();
// };

// declare const globalThis: {
//     prismaGlobal: ReturnType<typeof prismaClientSingleton>
// } & typeof global;

// const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// export default prisma;

// export const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     datasources: {
//         db: {
//             url: process.env.DATABASE_URL
//         }
//     },
//     log: ['query', 'error', 'warn'],
//   });

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
