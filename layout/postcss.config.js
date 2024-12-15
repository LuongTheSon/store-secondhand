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

const paths = {
  appDest: 'dist' // Đường dẫn tới thư mục build
};

const baseFontSize = 10; // rem tính theo px
const pcDesignWidth = 1400; // Chiều rộng thiết kế PC
const pcDesignHeight = 1400; // Chiều cao thiết kế PC
const spDesignWidth = 768; // Chiều rộng thiết kế SP
const spDesignHeight = 736; // Chiều cao thiết kế SP

const getRoundedVw = (num) => Math.round(num * 10) / 10;

export default {
  map: false,
  plugins: [
    postcssImport(), // Import các file CSS
    postcssNested(), // Hỗ trợ nested CSS
    postcssCustomMedia(), // Sử dụng custom media queries
    postcssHexrgba(), // Hỗ trợ màu sắc dạng hex với alpha
    postcssPercentage(), // Hỗ trợ chuyển đổi sang giá trị phần trăm
    postcssFunctions({
      functions: {
        px(num) {
          return `${((num * pcDesignWidth) / spDesignWidth).toFixed(0)}px`; // Chuyển đổi px theo tỷ lệ PC
        },
        rem(num) {
          return `${num / baseFontSize}rem`; // Chuyển đổi rem
        },
        pw(num) {
          return `${(num / pcDesignWidth) * 100}vw`; // Phần trăm chiều rộng PC
        },
        ph(num) {
          return `${(num / pcDesignHeight) * 100}vh`; // Phần trăm chiều cao PC
        },
        vw(num) {
          return `${(num / spDesignWidth) * 100}vw`; // Phần trăm chiều rộng SP
        },
        vh(num) {
          return `${(num / spDesignHeight) * 100}vh`; // Phần trăm chiều cao SP
        },
        lh(fz, psd) {
          return (psd / fz).toFixed(2); // Tính toán line-height
        },
        ls(psd) {
          return `${psd / 1000}em`; // Tính toán letter-spacing
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
    postcssMomentumScrolling(['auto', 'scroll']), // Hỗ trợ động lượng cuộn
    postcssWillChangeTransition(), // Tối ưu hóa will-change
    autoprefixer(), // Thêm prefix cho trình duyệt cũ
    postcssCachebuster({
      type: 'checksum',
      imagesPath: `${paths.appDest}` // Đường dẫn hình ảnh
    }),
    postcssReporter({
      clearReportedMessages: true // Dọn dẹp thông báo sau khi build
    }),
    postcssCsso({
      restructure: false // Giữ nguyên cấu trúc CSS khi nén
    })
  ]
};
