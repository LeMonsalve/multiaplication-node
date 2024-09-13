import { yarg } from "./configuration/plugins/args.plugin"
import { ServerApp } from "./presentation/server-app"

(async () => await main())()

async function main() {
  const { b: base, l: limit, s: show, n: fileName, d: fileDestination } = yarg

  const file = {
    name: fileName,
    destination: fileDestination
  }

  const app = new ServerApp({ base, limit, show, file })
  app.run()
}