import { DB } from "https://deno.land/x/sqlite/mod.ts"

const connect = new DB("./src/database/database.sqlite")

export default connect