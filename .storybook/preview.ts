import type { Preview } from "@storybook/react";

import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "soft", value: "#f4f4f5" },
        { name: "dark", value: "#09090b" },
      ],
    },
    layout: "centered",
  },
};

export default preview;
