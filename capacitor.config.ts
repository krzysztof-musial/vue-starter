import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.krzysztofmusial.vuestarter",
  appName: "vue-starter",
  webDir: "dist/www",
  bundledWebRuntime: false,
  android: {
    path: "dist/android",
  },
  ios: {
    path: "dist/ios",
  },
};

export default config;
