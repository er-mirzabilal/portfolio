module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  // theme: {
  //   extend:

  //   {

  //     keyframes: {
  //       loading: {
  //         '0%': { left: '-100%' },
  //         '50%': { left: '100%' },
  //         // '100%': { left: '-100%' },
  //       },
  //     },
  //     animation: {
  //       loading: 'loading 3s linear ',
  //     },
  //   },
  // },

  theme: {
    extend: {
      animation: {
        "type-reverse":
          "type 1.8s ease-out 1.8s infinite alternate-reverse both",
      },
      keyframes: {
        type: {
          "0%": { width: "0ch" },

          "3%, 5%": { width: "1ch" },
          "6%, 9%": { width: "2ch" },
          "10%, 13%": { width: "3ch" },
          "15%, 20%": { width: "4ch" },
          "25%, 30%": { width: "6ch" },
          "35%, 40%": { width: "8ch" },
          "45%, 50%": { width: "10ch" },
          "55%, 60%": { width: "12ch" },
          "65%, 70%": { width: "14ch" },
          "75%, 80%": { width: "16ch" },
          "81%, 83%": { width: "18ch" },
          "85%, 88%": { width: "19ch" },
          "90%, 93%": { width: "20ch" },
          "94%, 96%": { width: "21ch" },
          "97%, 100%": { width: "22ch" },
        },
      },
      safelist: [
        "animate-[fade-in_1s_ease-in-out]",
        "animate-[fade-in-down_1s_ease-in-out]",
      ],
    },
  },

  // plugins: [require("tw-elements/dist/plugin")],
};
