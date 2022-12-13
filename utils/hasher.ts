export const hasher = (str: string): string => {
  return crypto.randomUUID();
};
