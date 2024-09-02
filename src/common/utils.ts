function cleanGPTJson(json: string): string {
  if (!json || json.length === 0) {
    return "";
  }

  return json.replace(/^```json\n|\n```$/g, "").replace(/\r?\n|\r/g, "");
}

function parseJSON(json: string): any {
  try {
    return JSON.parse(json);
  } catch (error) {
    return null;
  }
}

export { cleanGPTJson, parseJSON };
