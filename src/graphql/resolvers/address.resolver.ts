import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Address } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Resolver()
export class AddressResolver {
  constructor(private prisma: PrismaService) {}

  @Query()
  async address(@Args('id') id: string): Promise<Address> {
    return this.prisma.address.findUnique({ where: { id } });
  }

  @Mutation()
  async createAddress(
    @Args('data')
    data: {
      address1: string;
      address2?: string;
      state: string;
      zipcode: string;
    },
  ) {
    return this.prisma.address.create({ data });
  }

  @Mutation()
  async deleteAddress(@Args('id') id: string) {
    return this.prisma.address.delete({ where: { id } });
  }
}
