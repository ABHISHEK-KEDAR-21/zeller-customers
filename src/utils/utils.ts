import { ZellerCustomer } from "../models/response-model";

export const toTitleCase = (val: string) => {
  if (val === "") return "";
  return val[0].toUpperCase() + val.slice(1).toLowerCase();
};

export const css = (...args: any) => {
  return args.join(" ");
};

export const copyArray = (
  array: ZellerCustomer[],
  numCopies: number
): ZellerCustomer[] => {
  const result = [];
  for (let i = 0; i < numCopies; i++) {
    result.push(...array);
  }
  return result.map((item, _idx) => ({
    ...item,
    name: item.name,
  }));
};
