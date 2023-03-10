import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Resolver('User')
export class UsersResolver {
  constructor(private prisma: PrismaService) {}

  @Query()
  async users(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  @Query()
  async user(@Args('id') id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  @Mutation()
  async createUser(@Args('data') data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  @Mutation()
  async updateUser(
    @Args('id') id: string,
    @Args('data') data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  @Mutation()
  async deleteUser(@Args('id') id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
