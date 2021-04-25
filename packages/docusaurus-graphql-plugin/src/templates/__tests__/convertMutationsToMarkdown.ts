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
