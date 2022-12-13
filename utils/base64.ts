export const convertBase64ToString = (base64: string) => {
  const buff = Buffer.from(base64, "base64");
  return buff.toString("ascii");
};

export const convertStringToBase64 = (str: string) => {
  const buff = Buffer.from(str, "ascii");
  return buff.toString("base64");
};
