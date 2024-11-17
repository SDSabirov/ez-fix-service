module.exports = {
    apps: [
      {
        name: "EZFix",
        port: "3077",
        exec_mode: "cluster",
        instances: "max",
        script: "./.output/server/index.mjs",
      },
    ],
  };