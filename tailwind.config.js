/** @type {import('tailwindcss').Config} */

import { pxBreakpoints } from './src/tailwind/breakpoints';
import colors from './src/tailwind/colors';

module.exports = {
  content: ['./src/components/**/*.{html,js,ts,tsx}'],
  theme: {
    screens: {
      sm: `${pxBreakpoints.sm}px`,
      md: `${pxBreakpoints.md}px`,
      mdr: `${pxBreakpoints.mdr}px`,
      lg: `${pxBreakpoints.lg}px`,
      lgr: `${pxBreakpoints.lgr}px`,
      xl: `${pxBreakpoints.xl}px`
    },
    colors: {
      lightGray: colors.lightGray,
      softGray: colors.softGray,
      brightBlue: colors.brightBlue,
      white: colors.white,
      darkGray: colors.darkGray,
      semiTransparentWhite: colors.semiTransparentWhite
    }
  },
  plugins: []
};
