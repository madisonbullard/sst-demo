/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-demo-test",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      profile:
        input.stage === "production" ? "sst-demo-production" : "sst-demo-dev",
    };
  },
  async run() {},
});
