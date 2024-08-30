// tailwind config is required for editor support
import sharedConfig from "@zendenta/tailwind-config/tailwind.config.js";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
  presets: [sharedConfig],
};

export default config;
