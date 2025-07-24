import prompt from "prompt";

import { PromptSchemaQRcode } from "../../prompts-schema/schema-qrCode.js";
import { handler } from "./handle.js";


export async function createQrCode() {
  prompt.get(PromptSchemaQRcode, handler)

  prompt.start()
}