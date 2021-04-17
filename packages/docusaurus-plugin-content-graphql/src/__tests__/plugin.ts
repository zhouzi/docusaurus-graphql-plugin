import { buildSchema } from "graphql";
import {
  groupTypes,
  sortGroupedTypes,
  convertQueriesToMarkdown,
  convertMutationsToMarkdown,
  convertObjectsToMarkdown,
  convertInterfacesToMarkdown,
  convertEnumsToMarkdown,
  convertUnionsToMarkdown,
  convertInputObjectsToMarkdown,
  convertScalarsToMarkdown,
} from "../";

export const schema = buildSchema(`
type Query {
  """
  Returns the current user if they're logged in.
  """
  currentUser: User

  """
  Returns the list of users.
  """
  users(
    """
    Number of users to return.
    """
    take: Int!
  ): [User!]!

  """
  Search among humanoids and returns a mix of:

  * Droid
  * Human
  """
  searchHumanoids(
    """
    The search query.
    """
    query: String!

    """
    Search humanoids by their name.
    """
    name: String @deprecated(reason: "Use query instead")
  ): [SearchResult!]!
}

type Mutation {
  """
  Create a new user.
  """
  createUser(
    """
    Payload to create the new user.
    """
    input: UserInput!
  ): User!

  """
  Update an existing user.
  """
  updateUser(
    """
    ID of the user to update.
    """
    id: ID!

    """
    Payload to update the existing user.
    """
    input: UserInput!
  ): User!
}

"""
Represents a user.
"""
type User implements Humanoid {
  """
  Name of the user.
  """
  name: String!

  """
  Returns the user's list of friends.
  """
  friends(
    """
    Number of friends to return.
    """
    take: Int!
  ): [User!]!

  """
  Role of the user.
  """
  role: UserRole!

  createdAt: DateTime @deprecated(reason: "This property will be removed in the future")
}

"""
Represents a droid.
"""
type Droid implements Humanoid {
  """
  Name of the droid.
  """
  name: String!
}

"""
Shared traits of humanoids.
"""
interface Humanoid {
  """
  Name of the humanoid.
  """
  name: String!
}

"""
Payload used to create/update a user.
"""
input UserInput {
  """
  Name of the user.
  """
  name: String!
}

"""
Enum listing the different role a user can have.
"""
enum UserRole {
  """
  Admin rights.
  """
  Admin

  """
  Regular user rights.
  """
  User
}

"""
Date string following the ISO format.
"""
scalar DateTime

"""
Represents the mix of search results.
"""
union SearchResult = User | Droid
`);
const {
  queries,
  mutations,
  objects,
  interfaces,
  enums,
  unions,
  inputObjects,
  scalars,
} = sortGroupedTypes(groupTypes(Object.values(schema.getTypeMap())));
const getTypePath = () => "#";

describe("convertQueriesToMarkdown", () => {
  it("should convert queries to markdown", () => {
    expect(
      convertQueriesToMarkdown(queries, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });
});

describe("convertMutationsToMarkdown", () => {
  it("should convert mutations to markdown", () => {
    expect(
      convertMutationsToMarkdown(mutations, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });
});

describe("convertObjectsToMarkdown", () => {
  it("should convert objects to markdown", () => {
    expect(
      convertObjectsToMarkdown(objects, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });
});

describe("convertInterfacesToMarkdown", () => {
  it("should convert interfaces to markdown", () => {
    expect(
      convertInterfacesToMarkdown(interfaces, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });
});

describe("convertEnumsToMarkdown", () => {
  it("should convert enums to markdown", () => {
    expect(
      convertEnumsToMarkdown(enums, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });
});

describe("convertUnionsToMarkdown", () => {
  it("should convert unions to markdown", () => {
    expect(
      convertUnionsToMarkdown(unions, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });
});

describe("convertInputObjectsToMarkdown", () => {
  it("should convert inputObjects to markdown", () => {
    expect(
      convertInputObjectsToMarkdown(inputObjects, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });
});

describe("convertScalarsToMarkdown", () => {
  it("should convert scalars to markdown", () => {
    expect(
      convertScalarsToMarkdown(scalars, {
        getTypePath,
      })
    ).toMatchSnapshot();
  });
});
