import marked from "@anoblet/rollup-plugin-marked";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import minifyHTML from "rollup-plugin-minify-html-literals";
import { terser } from "rollup-plugin-terser";

module.exports = {
    input: ".tsc/index.js",
    output: {
        dir: "./public/js",
        format: "esm",
        sourcemap: true,
    },
    plugins: [
        commonjs(),
        marked(),
        minifyHTML(),
        replace({
            "process.env.NODE_ENV": JSON.stringify("production"),
        }),
        resolve({ dedupe: ["lit-element", "lit-html"] }),
        terser({
            output: {
                comments: false,
            },
        }),
    ],
};
