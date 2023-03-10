import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Listing, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Resolver()
export class ListingResolver {
  constructor(private prisma: PrismaService) {}

  @Query()
  async listings(): Promise<Listing[]> {
    return this.prisma.listing.findMany();
  }

  @Query()
  async listing(@Args('id') id: string): Promise<Listing> {
    return this.prisma.listing.findUnique({ where: { id } });
  }

  @Mutation()
  async createListing(
    @Args('data')
    data: {
      title: string;
      description?: string;
      price: number;
      addressId: string;
    },
  ) {
    return this.prisma.listing.create({ data });
  }

  @Mutation()
  async updateListing(
    @Args('id') id: string,
    @Args('data') data: Prisma.TransactionUpdateInput,
  ): Promise<Listing> {
    return this.prisma.listing.update({
      where: { id },
      data,
    });
  }

  @Mutation()
  async deleteListing(@Args('id') id: string) {
    return this.prisma.listing.delete({ where: { id } });
  }
}
