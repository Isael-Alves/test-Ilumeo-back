import { prisma } from "../src/config/database";

export async function cleanDb() {
  await prisma.historic.deleteMany({});
  await prisma.user.deleteMany({});
}
