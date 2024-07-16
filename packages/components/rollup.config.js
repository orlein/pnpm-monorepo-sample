import { defineConfig } from "rollup";
import { resolve } from "path";
import { peerDependencies, dependencies } from "./package.json";
import react from "@rollup/plugin-react";
import dts from "vite-plugin-dts";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    dts({
      include: ["src/**/*"],
    }),
    typescript({
      tsconfig: "tsconfig.build.json",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src", "index.tsx"),
      formats: ["es", "cjs"],
      fileName: (ext) => `index.${ext}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
      ],
      output: { preserveModules: true, exports: "named" },
    },

    target: "esnext",
    sourcemap: true,
  },
});
