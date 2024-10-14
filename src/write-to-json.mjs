import { writeFile } from 'node:fs';

export function writeToJSONFile(fileName, rawJSON) {
    const stringJSON = JSON.stringify(rawJSON);
    writeFile(`${fileName}.json`, stringJSON, "utf-8", (err) => {
        if (err) throw err;
        console.log(`✅ JSON file "${fileName}" is saved!`);
    });
}