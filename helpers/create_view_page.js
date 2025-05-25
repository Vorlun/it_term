import { resolve } from "node:path";

const createViewPage = (page) => {
  return resolve(__dirname, "../views", `${page}.hbs`);
};

export default {
  createViewPage,
};
