import { format } from "path";

export default {
  input: "dist/data-extraction-plugin.js",
  output: {
    file: "../page/src/plugins/data-extraction-plugin.js",
    format: "esm",
  },
};
