import { buildSchema } from "graphql";
import { groupSortedTypes } from "../../groupSortedTypes";
import { convertUnionsToMarkdown } from "../convertUnionsToMarkdown";

describe("convertUnionsToMarkdown", () => {
  function getTypePath() {
    return "#";
  }

  it("should render unions", () => {
    const schema = buildSchema(`
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
    const { unions } = groupSortedTypes(Object.values(schema.getTypeMap()));

    expect(
      convertUnionsToMarkdown(unions, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });
});
