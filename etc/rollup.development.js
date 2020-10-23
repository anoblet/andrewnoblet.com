import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import marked from "@anoblet/rollup-plugin-marked";
import copy from "rollup-plugin-copy";

module.exports = {
    input: ".tsc/index.js",
    output: {
        dir: "./public/js",
        format: "esm",
    },
    plugins: [
        commonjs(),
        copy({ src: "**/*.md", dest: ".tsc" }),
        marked(),
        resolve({ dedupe: ["lit-element", "lit-html"] }),
    ],
};
