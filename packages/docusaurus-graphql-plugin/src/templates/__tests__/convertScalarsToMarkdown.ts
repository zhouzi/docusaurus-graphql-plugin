import { buildSchema } from "graphql";
import { groupSortedTypes } from "../../groupSortedTypes";
import { convertScalarsToMarkdown } from "../convertScalarsToMarkdown";

describe("convertScalarsToMarkdown", () => {
  function getTypePath() {
    return "#";
  }

  it("should render scalars", () => {
    const schema = buildSchema(`
      """
      A ISO date time.
      """
      scalar DateTime
    `);
    const { scalars } = groupSortedTypes(Object.values(schema.getTypeMap()));

    expect(
      convertScalarsToMarkdown(scalars, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });
});
