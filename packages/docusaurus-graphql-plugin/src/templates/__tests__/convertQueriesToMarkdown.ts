import { buildSchema } from "graphql";
import { groupSortedTypes } from "../../groupSortedTypes";
import { convertQueriesToMarkdown } from "../convertQueriesToMarkdown";

describe("convertQueriesToMarkdown", () => {
  function getTypePath() {
    return "#";
  }

  it("should render queries", () => {
    const schema = buildSchema(`
      type Query {
        """
        Query to get a user.
        """
        user(
          "The user's id."
          id: ID!
        ): User!
      }
      type User {
        name: String!
      }
    `);
    const { queries } = groupSortedTypes(Object.values(schema.getTypeMap()));

    expect(
      convertQueriesToMarkdown(queries, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });
});
