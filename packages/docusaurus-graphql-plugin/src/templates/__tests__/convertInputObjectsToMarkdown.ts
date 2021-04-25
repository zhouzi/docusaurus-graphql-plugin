import { buildSchema } from "graphql";
import { groupSortedTypes } from "../../groupSortedTypes";
import { convertInputObjectsToMarkdown } from "../convertInputObjectsToMarkdown";

describe("convertInputObjectsToMarkdown", () => {
  function getTypePath() {
    return "#";
  }

  it("should render input objects", () => {
    const schema = buildSchema(`
      """
      Input to create a new user.
      """
      input CreateUserInput {
        "The new user's name."
        name: String!
      }
    `);
    const { inputObjects } = groupSortedTypes(
      Object.values(schema.getTypeMap())
    );

    expect(
      convertInputObjectsToMarkdown(inputObjects, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });
});
