import { buildSchema } from "graphql";
import { groupSortedTypes } from "../../groupSortedTypes";
import { convertObjectsToMarkdown } from "../convertObjectsToMarkdown";

describe("convertObjectsToMarkdown", () => {
  function getTypePath() {
    return "#";
  }

  it("should render objects", () => {
    const schema = buildSchema(`
      """
      A regular user.
      """
      type User {
        "The user's name."
        name: String!
      }
    `);
    const { objects } = groupSortedTypes(Object.values(schema.getTypeMap()));

    expect(
      convertObjectsToMarkdown(objects, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });

  it("should list the object's interfaces", () => {
    const schema = buildSchema(`
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
    const { objects } = groupSortedTypes(Object.values(schema.getTypeMap()));

    expect(
      convertObjectsToMarkdown(objects, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });
});
