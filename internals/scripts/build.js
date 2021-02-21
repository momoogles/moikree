const { build } = require("esbuild")
const path = require("path")
const argv = require("argv")

const args = argv
  .option([
    {
      name: "environment",
      short: "env",
      type: "string",
      description: "開発ビルドか製品ビルドかを選択します",
      example:
        "'script --environment=production|development' or 'script -env production|development'",
    },
    {
      name: "watch",
      short: "w",
      type: "boolean",
      description: "watchビルドモードにするかどうかを選択します",
      example: "'script --watch or script -w'",
    },
  ])
  .run().options

const options = {
  bundle: true,
  target: "es2016",
  platform: "browser",
  entryPoints: [path.resolve(process.cwd(), "src/index.ts")],
  outdir: path.resolve(process.cwd(), "docs/dist"),
  tsconfig: path.resolve(process.cwd(), "tsconfig.json"),
  watch: args.watch
    ? {
        onRebuild(e) {
          if (e) {
            console.error("watch build failed:", e)
          } else {
            console.log("watch build succeeded!")
          }
        },
      }
    : undefined,
}

const env_options =
  // NOTE: defaultをproductionの設定にしておく
  args.environment === "development"
    ? {
        sourcemap: true,
      }
    : {
        minify: true,
      }

build({ ...options, ...env_options }).catch((e) => {
  console.error(e)
  process.exit(1)
})
