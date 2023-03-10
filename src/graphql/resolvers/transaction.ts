import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Transaction, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Resolver()
export class TransactionResolver {
  constructor(private prisma: PrismaService) {}

  @Query()
  async transactions(): Promise<Transaction[]> {
    return this.prisma.transaction.findMany();
  }

  @Query()
  async transaction(@Args('id') id: string): Promise<Transaction> {
    return this.prisma.transaction.findUnique({
      where: { id },
    });
  }

  @Mutation()
  async createTransaction(
    @Args('data') data: Prisma.TransactionCreateInput,
  ): Promise<Transaction> {
    return this.prisma.transaction.create({
      data,
    });
  }

  @Mutation()
  async updateTransaction(
    @Args('id') id: string,
    @Args('data') data: Prisma.TransactionUpdateInput,
  ): Promise<Transaction> {
    return this.prisma.transaction.update({
      where: { id },
      data,
    });
  }

  @Mutation()
  async deleteTransaction(@Args('id') id: string) {
    return this.prisma.transaction.delete({
      where: { id },
    });
  }
}
