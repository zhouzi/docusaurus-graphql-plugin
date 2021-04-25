import { buildSchema } from "graphql";
import { groupSortedTypes } from "../../groupSortedTypes";
import { convertInterfacesToMarkdown } from "../convertInterfacesToMarkdown";

describe("convertInterfacesToMarkdown", () => {
  function getTypePath() {
    return "#";
  }

  it("should render interfaces", () => {
    const schema = buildSchema(`
      """
      Properties that are common to the different kind of users.
      """
      interface User {
        "The user's name."
        name: String!
      }
    `);
    const { interfaces } = groupSortedTypes(Object.values(schema.getTypeMap()));

    expect(
      convertInterfacesToMarkdown(interfaces, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });

  it("should render the interface's interfaces", () => {
    const schema = buildSchema(`
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
    const { interfaces } = groupSortedTypes(Object.values(schema.getTypeMap()));

    expect(
      convertInterfacesToMarkdown(interfaces, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });

  it("should list the interface's implementations", () => {
    const schema = buildSchema(`
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
    const { interfaces } = groupSortedTypes(Object.values(schema.getTypeMap()));

    expect(
      convertInterfacesToMarkdown(interfaces, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });
});
