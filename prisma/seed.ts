import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Create 10 addresses
  const addresses = await Promise.all(
    Array(10)
      .fill(null)
      .map(() =>
        prisma.address.create({
          data: {
            address1: faker.address.streetAddress(),
            address2: faker.address.secondaryAddress(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
          },
        }),
      ),
  );

  // Create 10 listings
  const listings = await Promise.all(
    Array(10)
      .fill(null)
      .map((_, index) =>
        prisma.listing.create({
          data: {
            title: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: parseInt(faker.commerce.price(100)),
            addressId: addresses[index].id,
          },
        }),
      ),
  );

  // Create 10 users
  const users = await Promise.all(
    Array(10)
      .fill(null)
      .map(() =>
        prisma.user.create({
          data: {
            name: faker.name.firstName(),
            email: faker.internet.email(),
          },
        }),
      ),
  );

  // Create 7 transactions, with random listings and users
  const transactions = await Promise.all(
    Array(7)
      .fill(null)
      .map(() =>
        prisma.transaction.create({
          data: {},
        }),
      ),
  );

  console.log('Seeding finished.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
