import { CustomerRole } from "../enums/enums";
import { ZellerCustomer } from "../models/response-model";
import { toTitleCase, css, copyArray } from "./utils";

describe("toTitleCase", () => {
  test("capitalizes the first letter of a string", () => {
    const result = toTitleCase("hello");
    expect(result).toEqual("Hello");
  });

  test("does not change the case of other letters", () => {
    const result = toTitleCase("helLo");
    expect(result).toEqual("Hello");
  });

  test("returns an empty string when given an empty string", () => {
    const result = toTitleCase("");
    expect(result).toEqual("");
  });
});

describe("css", () => {
  test("joins multiple strings with a space", () => {
    const result = css("foo", "bar", "baz");
    expect(result).toEqual("foo bar baz");
  });

  test("returns a single string unmodified", () => {
    const result = css("foo");
    expect(result).toEqual("foo");
  });

  test("returns an empty string when called with no arguments", () => {
    const result = css();
    expect(result).toEqual("");
  });
});

describe("copyArray", () => {
  const customers: ZellerCustomer[] = [
    {
      id: "1",
      name: "Alice",
      email: "alice@example.com",
      role: CustomerRole.ADMIN,
      __typename: "",
    },
    {
      id: "2",
      name: "Bob",
      email: "bob@example.com",
      role: CustomerRole.MANAGER,
      __typename: "",
    },
  ];

  test("creates multiple copies of an array", () => {
    const result = copyArray(customers, 3);
    expect(result).toHaveLength(6);
  });

  test("returns an empty array when given an empty array", () => {
    const result = copyArray([], 2);
    expect(result).toEqual([]);
  });

  test("returns an array with one copy when numCopies is 1", () => {
    const result = copyArray(customers, 1);
    expect(result).toHaveLength(2);
    expect(result).toEqual(customers);
  });
});

export {};
