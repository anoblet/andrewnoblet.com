import marked from "@anoblet/rollup-plugin-marked";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";
import minifyHTML from "rollup-plugin-minify-html-literals";

module.exports = {
    input: ".tsc/index.js",
    output: {
        dir: "./public/js",
        format: "esm",
    },
    perf: true,
    plugins: [
        commonjs(),
        copy({ src: "**/*.md", dest: ".tsc" }),
        marked(),
        minifyHTML(),
        resolve({ dedupe: ["lit-element", "lit-html"] }),
    ],
};
