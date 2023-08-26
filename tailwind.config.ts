import path from "node:path";
import { Config } from "tailwindcss";

import { addDynamicIconSelectors } from "tailwindcss-plugin-iconify";
import { getLocalIconSets } from "tailwindcss-plugin-iconify/dist/extensions/local-icon-sets";

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    addDynamicIconSelectors({
      prefix: "i",
      iconSets: getLocalIconSets({
        define: {
          custom: {
            path: path.join(process.cwd(), "./src/assets"),
            options: {
              includeSubDirs: false,
            },
          },
        },
      }),
    }),
  ],
};

export default config;
