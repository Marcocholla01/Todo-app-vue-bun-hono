/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ff00f3",

          "primary-content": "#160014",

          "secondary": "#00fdea",

          "secondary-content": "#001613",

          "accent": "#0000ff",

          "accent-content": "#c6dbff",

          "neutral": "#241d1d",

          "neutral-content": "#cecccc",

          "base-100": "#19302d",

          "base-200": "#142826",

          "base-300": "#0f211f",

          "base-content": "#ccd1d1",

          "info": "#00faff",

          "info-content": "#001516",

          "success": "#00d5a8",

          "success-content": "#00100a",

          "warning": "#fb4a00",

          "warning-content": "#150200",

          "error": "#f8535d",

          "error-content": "#150203",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}