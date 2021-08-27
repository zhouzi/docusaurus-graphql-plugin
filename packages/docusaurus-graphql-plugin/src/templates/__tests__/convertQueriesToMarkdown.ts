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

        """
        Query to get an admin.
        """
        admin(
          "The admin's id."
          id: ID!
        ): User!
          @deprecated(
            reason: "admin will be removed with the next major release"
          )
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
