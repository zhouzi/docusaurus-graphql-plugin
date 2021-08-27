import { buildSchema } from "graphql";
import { groupSortedTypes } from "../../groupSortedTypes";
import { convertMutationsToMarkdown } from "../convertMutationsToMarkdown";

describe("convertMutationsToMarkdown", () => {
  function getTypePath() {
    return "#";
  }

  it("should render mutations", () => {
    const schema = buildSchema(`
      type Mutation {
        """
        Mutation to create a new user.
        """
        createUser(
          "The new user's name"
          name: String!
        ): User!

        """
        Mutation to create a new admin.
        """
        createAdmin(
          "The new admin's name"
          name: String!
        ): User!
          @deprecated(
            reason: "createAdmin will be removed with the next major release"
          )
      }
      type User {
        name: String!
      }
    `);
    const { mutations } = groupSortedTypes(Object.values(schema.getTypeMap()));

    expect(
      convertMutationsToMarkdown(mutations, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });
});
