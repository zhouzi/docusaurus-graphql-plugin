import { buildSchema } from "graphql";
import { getRelativeTypeUrl } from "../getRelativeTypeUrl";
import { convertersMap } from "../converters";

const markdownConverterOptions = {
  getTypePath: getRelativeTypeUrl,
};

describe("converters", () => {
  describe("queries", () => {
    it("should convert queries to markdown", () => {
      const schema = buildSchema(/* GraphQL */ `
        type Query {
          """
          Query to get a user.
          """
          user("The user's id." id: ID!): User!

          """
          Query to get an admin.
          """
          admin("The admin's id." id: ID!): User!
            @deprecated(
              reason: "admin will be removed with the next major release"
            )
        }
        type User {
          name: String!
        }
      `);
      expect(
        convertersMap.queries.convertToMarkdown(
          schema,
          markdownConverterOptions
        )
      ).toMatchSnapshot();
    });
  });

  describe("mutations", () => {
    it("should convert mutations to markdown", () => {
      const schema = buildSchema(/* GraphQL */ `
        type Mutation {
          """
          Mutation to create a new user.
          """
          createUser("The new user's name" name: String!): User!

          """
          Mutation to create a new admin.
          """
          createAdmin("The new admin's name" name: String!): User!
            @deprecated(
              reason: "createAdmin will be removed with the next major release"
            )
        }
        type User {
          name: String!
        }
      `);
      expect(
        convertersMap.mutations.convertToMarkdown(
          schema,
          markdownConverterOptions
        )
      ).toMatchSnapshot();
    });
  });

  describe("objects", () => {
    it("should convert objects to markdown", () => {
      const schema = buildSchema(/* GraphQL */ `
        """
        Input to create a new user.
        """
        input CreateUserInput {
          "The new user's name."
          name: String!
        }
      `);
      expect(
        convertersMap.objects.convertToMarkdown(
          schema,
          markdownConverterOptions
        )
      ).toMatchSnapshot();
    });

    it("should list the objects' interfaces", () => {
      const schema = buildSchema(/* GraphQL */ `
        interface User {
          name: String!
        }

        """
        A user with special rights.
        """
        type Admin implements User {
          "The admin's name."
          name: String!
        }
      `);
      expect(
        convertersMap.objects.convertToMarkdown(
          schema,
          markdownConverterOptions
        )
      ).toMatchSnapshot();
    });
  });

  describe("interfaces", () => {
    it("should convert interfaces to markdown", () => {
      const schema = buildSchema(/* GraphQL */ `
        """
        Properties that are common to the different kind of users.
        """
        interface User {
          "The user's name."
          name: String!
        }
      `);
      expect(
        convertersMap.interfaces.convertToMarkdown(
          schema,
          markdownConverterOptions
        )
      ).toMatchSnapshot();
    });

    it("should list the interface's interfaces", () => {
      const schema = buildSchema(/* GraphQL */ `
        """
        Properties that are common to the different kind of users.
        """
        interface User {
          "The user's name."
          name: String!
        }

        """
        A special kind of user.
        """
        interface Admin implements User {
          "The admin's special power."
          power: String!
        }
      `);
      expect(
        convertersMap.interfaces.convertToMarkdown(
          schema,
          markdownConverterOptions
        )
      ).toMatchSnapshot();
    });

    it("should list the interface's implementations", () => {
      const schema = buildSchema(/* GraphQL */ `
        """
        Properties that are common to the different kind of users.
        """
        interface User {
          "The user's name."
          name: String!
        }

        """
        A special kind of user.
        """
        type Admin implements User {
          "The admin's name."
          name: String!
        }
      `);
      expect(
        convertersMap.interfaces.convertToMarkdown(
          schema,
          markdownConverterOptions
        )
      ).toMatchSnapshot();
    });
  });

  describe("enums", () => {
    it("should convert enums to markdown", () => {
      const schema = buildSchema(/* GraphQL */ `
        """
        Represents a user's role.
        """
        enum UserRole {
          "User has admin rights."
          Admin
          "User has no particular rights."
          User
          "Unknown user"
          Anonymous
            @deprecated(
              reason: "Anonymous will be removed with the next major release"
            )
        }
      `);
      expect(
        convertersMap.enums.convertToMarkdown(schema, markdownConverterOptions)
      ).toMatchSnapshot();
    });
  });

  describe("unions", () => {
    it("should convert unions to markdown", () => {
      const schema = buildSchema(/* GraphQL */ `
        type User {
          name: String!
        }
        type Droid {
          name: String!
        }

        """
        Combination of the possible humanoids.
        """
        union Humanoid = User | Droid
      `);
      expect(
        convertersMap.unions.convertToMarkdown(schema, markdownConverterOptions)
      ).toMatchSnapshot();
    });
  });

  describe("inputObjects", () => {
    it("should convert inputObjects to markdown", () => {
      const schema = buildSchema(/* GraphQL */ `
        """
        Input to create a new user.
        """
        input CreateUserInput {
          "The new user's name."
          name: String!
        }
      `);
      expect(
        convertersMap.inputObjects.convertToMarkdown(
          schema,
          markdownConverterOptions
        )
      ).toMatchSnapshot();
    });
  });

  describe("scalars", () => {
    it("should convert scalars to markdown", () => {
      const schema = buildSchema(/* GraphQL */ `
        """
        A ISO date time.
        """
        scalar DateTime
      `);
      expect(
        convertersMap.scalars.convertToMarkdown(
          schema,
          markdownConverterOptions
        )
      ).toMatchSnapshot();
    });
  });
});
