import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import url from "@rollup/plugin-url";
import alias from '@rollup/plugin-alias';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  // JS build
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.es.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      url({
        include: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.gif"],
        limit: 8192,
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        modules: {
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
        extract: false,
        inject: true,
        minimize: true,
        sourceMap: true,
      }),
      alias({
        entries: [
          { find: '@', replacement: path.resolve(__dirname, 'src') },
        ],
      }),
    ],
    external: ["react", "react-dom"],
  },

  // Type declarations
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: [/\.scss$/, /\.css$/], // ✅ THIS FIX
    onwarn(warning, warn) {
      if (warning.code === 'UNRESOLVED_IMPORT' && /\.scss$/.test(warning.source)) return;
      warn(warning);
    },
  },
];