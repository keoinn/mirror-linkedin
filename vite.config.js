import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
//自動引入 - unplugin-auto-import
import AutoImport from "unplugin-auto-import/vite";

//components 組件自動引入 - unplugin-vue-components
import Components from "unplugin-vue-components/vite";

// SVG的處理 - vite-plugin-svg-icons
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

//Router 自動生成 - vite-plugin-pages + vite-plugin-vue-layouts
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";

// https://vitejs.dev/config/
export default defineConfig({
  //新設定根目錄別名
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    vue(),

    //自動引入 - unplugin-auto-import
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n"],
      dts: "src/auto-imports.js",
    }),

    //components 組件自動引入 - unplugin-vue-components
    Components({
      // 從 `./src/components/` 路徑查找
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/auto-components.js",
    }),

    // SVG的處理 - vite-plugin-svg-icons
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      symbolId: "[dir]/[name]",
    }),

    //Router 自動生成 - vite-plugin-pages + vite-plugin-vue-layouts
    Pages(),
    Layouts(),
  ],
});
