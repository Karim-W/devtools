import * as crypto from "crypto";
export const hasher = (str: string): string => {
  return crypto.randomUUID();
};

export const MD5Gen = (str: string): string => {
  return str === "" ? "" : crypto.createHash("md5").update(str).digest("hex");
};

export const SHA1Gen = (str: string): string => {
  return str === "" ? "" : crypto.createHash("sha1").update(str).digest("hex");
};

export const SHA256Gen = (str: string): string => {
  return str === ""
    ? ""
    : crypto.createHash("sha256").update(str).digest("hex");
};

export const SHA512Gen = (str: string): string => {
  return str === ""
    ? ""
    : crypto.createHash("sha512").update(str).digest("hex");
};
