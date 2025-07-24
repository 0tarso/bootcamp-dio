import prompt from "prompt"
import { PromptSchemaMain } from "../../prompts-schema/schema-main.js"
import { handler } from "./handle.js"

export async function createMain() {
  prompt.get(PromptSchemaMain, handler)

  prompt.start()
}