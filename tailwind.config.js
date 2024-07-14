/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#878787",
          "200": "#7a7a7a",
          "300": "#0e1d30",
          "400": "#091d28",
          "500": "#061b26",
          "600": "#06131a",
          "700": "rgba(0, 0, 0, 0.25)",
        },
        skyblue: "#04d9ff",
        white: "#fff",
        darkgray: "#b4b4b4",
        gainsboro: "#d9d9d9",
        deepskyblue: "#0fcdff",
        darkslategray: "#2f2f2f",
      },
      spacing: {},
      fontFamily: {
        "pp-supply-sans": "'PP Supply Sans'",
        "formula-condensed": "'Formula Condensed'",
        'kode-mono': ['"Kode Mono"', 'monospace'],
      },
      borderRadius: {
        "13xl": "32px",
        "31xl": "50px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      "13xl": "32px",
      base: "16px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
