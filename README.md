# NestJS Challenge

## Introduction

This challenge is for a candidate who is passionate about backend development in Node and has strong competency with
NestJS, data modeling, and TypeScript.

We are not aiming to take too much of your personal time for this challenge,  and it is intended to be completed in 3
hours. We expect to see how you approach the problem and how you can solve it, and not the most perfect written code
nor a too complicated database structure.

We are looking to have a GraphQL Schema that will be used to query and update data. This data needs to be populated
somehow, so please use any `faker` library of your preference, and make sure to have a `seed` command in your project.
Instructions below:

#### DB and ORM

Though we encourage you to use Prisma, please use any ORM you prefer, and make sure to use PostgreSQL as your database.

#### Entities

The entities that we need for this challenge are `Users`, `Listings`, and `Transactions`. Depending on your approach,
please create any other entities you need.

For the `Users` entity, we would have **at least** the following properties:

```typescript
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
```

For the `Listings` entity, we would have **at least** the following properties:

```typescript
export interface Listing {
  id: string;
  title: string;
  description?: string | null;
  price: number;
  address: {
    address1: string;
    address2?: string | null;
    state: string;
    zipcode: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
```

For the `Transactions` entity, we would have **at least** the following properties:

```typescript
export interface Transaction {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
```

> :warning: Please use [nano ID](https://www.npmjs.com/package/nanoid) for the Primary Column.

#### Operations

- Queries
    - Get all the users
    - Get all the listings
    - Get all the transactions
- Mutations
    - A user can purchase a listing by sending their `id` and the `id` of the listing they are purchasing. This
      transaction is stored in the `Transactions` table. Do not forget to  create and update the necessary properties in the
      `Users`, `Listings`, and `Transactions` entities.

#### Environment Variables

The following environment variables are required:

```dotenv
DB_USER=
DB_PASSWORD=
DB_NAME=
```

Feel free to add any other variable you need.

## Bonus Points

- Optional mutations
    - A user can be created by sending their `name` and `email`
    - A listing can be created by sending the `title`, `price`, and `address`
- Validation errors
- Listings pagination
- Tests
- Deployment in any cloud of your preference

## How to Submit your Challenge

Please create a PR with an overview of what you have accomplished, including the steps to create the database, the user,
and how to grant permissions to that user. You may also want to include the necessary steps run the `seeder` as well as
how to run the project in both dev and build mode. A playground would be located in `http://localhost:<port>/graphql`

Finally, please specify how much of your time you spent on this challenge. This won't necessarily affect your score, and
will be used internally to adjust this and any other test.
