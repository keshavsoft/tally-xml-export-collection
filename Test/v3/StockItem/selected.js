import { masters } from "../../../src/v3/index.js";
import { saveOutput } from "../common/index.js";

const companyName = "mani9";

console.log("=================================================");
console.log(`Testing v3 Masters (.selected Layer) on: "${companyName}"`);
console.log("=================================================\n");

const masterList = [
    "StockItem"
];

const results = [];

for (const name of masterList) {
    try {
        const fn = masters[name];
        if (!fn) {
            console.log(`[!] ${name}: Not found in masters export`);
            continue;
        }

        const res = await fn.selected(companyName);
        const collection = res?.ENVELOPE?.BODY?.DATA?.COLLECTION;
        
        let count = 0;
        let objectKey = name.toUpperCase();
        if (collection) {
            const foundKey = Object.keys(collection).find(k => k.toUpperCase() === objectKey);
            const val = foundKey ? collection[foundKey] : collection[Object.keys(collection)[0]];
            count = Array.isArray(val) ? val.length : (val ? 1 : 0);
            if (foundKey) objectKey = foundKey;
        }

        saveOutput({
            inCallerFile: import.meta.url,
            inData: res,
            inFileName: `${name}.json`
        });

        console.log(`[OK] ${name.padEnd(22)}: ${count} record(s) fetched (selected)`);
        results.push({ name, status: "OK", count });
    } catch (err) {
        console.error(`[ERROR] ${name.padEnd(19)}: ${err.message}`);
        results.push({ name, status: "ERROR", error: err.message });
    }
}

console.log("\n=================================================");
console.log("Summary of v3 Masters (.selected Layer):");
console.log("=================================================");
console.table(results);
