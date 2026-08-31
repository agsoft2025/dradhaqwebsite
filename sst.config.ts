// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    const isCI = process.env["CI"] === "true";

    return {
      name: "dradhaqwebsite",
      removal: input?.stage === "prod" ? "retain" : "remove",
      protect: ["prod"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          region: "ap-south-1",
          ...(!isCI && { profile: "dk2" }),
        },
      },
    };
  },
  async run() {
    new sst.aws.Nextjs("Web");
  },
});
