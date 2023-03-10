import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersResolver } from './graphql/resolvers/users.resolver';
import { TransactionResolver } from './graphql/resolvers/transaction';
import { ListingResolver } from './graphql/resolvers/listing.resolver';
import { AddressResolver } from './graphql/resolvers/address.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    UsersResolver,
    ListingResolver,
    TransactionResolver,
    AddressResolver,
  ],
})
export class AppModule {}
