import prompt from "prompt";
import { PromptSchemaPassword } from "../../prompts-schema/schema-password.js";
import { handler } from "./handle.js";

export async function createPassword() {
  prompt.get(PromptSchemaPassword, handler)

  prompt.start()
}