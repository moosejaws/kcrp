/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
    'display': ['Lexend'],
    'body': ['"Open Sans"'],
    },
    extend: {
      animation: {
        none: 'none',
        spin: 'spin 6s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
    }
    },
  },
  plugins: [
  ],

}

