export const delay = async (time = 1000) => {
  return new Promise((res) => setTimeout(res, time));
};
