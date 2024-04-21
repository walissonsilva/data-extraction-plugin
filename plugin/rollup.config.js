import { format } from "path";

export default {
  input: "dist/main.js",
  output: {
    file: "../page/src/plugins/data-extraction-plugin.js",
    format: "esm",
  },
};
