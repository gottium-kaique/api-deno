import { opine, json } from "https://deno.land/x/opine@0.21.2/mod.ts"
import routes from "./routes.ts"

const app = opine()
const port = 3000

app.use(json())
app.use(routes)

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}/`)
})