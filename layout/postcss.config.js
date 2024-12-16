import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssCustomMedia from 'postcss-custom-media';
import postcssHexrgba from 'postcss-hexrgba';
import postcssPercentage from 'postcss-percentage';
import postcssFunctions from 'postcss-functions';
import postcssMomentumScrolling from 'postcss-momentum-scrolling';
import postcssWillChangeTransition from 'postcss-will-change-transition';
import autoprefixer from 'autoprefixer';
import postcssCachebuster from 'postcss-cachebuster';
import postcssReporter from 'postcss-reporter';
import postcssCsso from 'postcss-csso';
import postcssCachebusterLegacy from 'postcss-cachebuster';

const paths = {
  appDest: 'dist' // Path to the build directory
};

const baseFontSize = 10; // rem calculated in px
const pcDesignWidth = 1400; // PC design width
const pcDesignHeight = 1400; // PC design height
const spDesignWidth = 768; // SP (Smartphone) design width
const spDesignHeight = 736; // SP (Smartphone) design height

const getRoundedVw = (num) => Math.round(num * 10) / 10;

export default {
  map: false,
  plugins: [
    postcssImport(), // Import CSS files
    postcssNested(), // Support nested CSS
    postcssCustomMedia(), // Use custom media queries
    postcssHexrgba(), // Support hex colors with alpha
    postcssPercentage(), // Support conversion to percentage values
    postcssFunctions({
      functions: {
        px(num) {
          return `${((num * pcDesignWidth) / spDesignWidth).toFixed(0)}px`; // Convert px according to the PC ratio
        },
        rem(num) {
          return `${num / baseFontSize}rem`; // Convert to rem
        },
        pw(num) {
          return `${(num / pcDesignWidth) * 100}vw`; // Percentage of PC width
        },
        ph(num) {
          return `${(num / pcDesignHeight) * 100}vh`; // Percentage of PC height
        },
        vw(num) {
          return `${(num / spDesignWidth) * 100}vw`; // Percentage of SP width
        },
        vh(num) {
          return `${(num / spDesignHeight) * 100}vh`; // Percentage of SP height
        },
        lh(fz, psd) {
          return (psd / fz).toFixed(2); // Calculate line-height
        },
        ls(psd) {
          return `${psd / 1000}em`; // Calculate letter-spacing
        },
        hv(num) {
          if (num >= 0) {
            return `min(${num}px, ${getRoundedVw(
              (num / pcDesignWidth) * 100
            )}vw)`; // Hybrids viewport
          } else {
            return `calc(-1 * min(${Math.abs(num)}px, ${getRoundedVw(
              (Math.abs(num) / pcDesignWidth) * 100
            )}vw))`;
          }
        }
      }
    }),
    postcssMomentumScrolling(['auto', 'scroll']), // Support momentum scrolling
    postcssWillChangeTransition(), // Optimize will-change
    autoprefixer(), // Add prefixes for older browsers
    postcssCachebuster({
      type: 'checksum',
      imagesPath: `${paths.appDest}` // Path to images
    }),
    postcssCachebusterLegacy({
      cssPath: './src/assets/css'
    }),
    postcssReporter({
      clearReportedMessages: true // Clear messages after build
    }),
    postcssCsso({
      restructure: false // Preserve CSS structure when minifying
    })
  ]
};
