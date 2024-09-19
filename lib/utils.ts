export const parseJSON = (json: unknown) => {
  return JSON.parse(JSON.stringify(json));
};
