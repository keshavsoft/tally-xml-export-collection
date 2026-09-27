import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { executeXml } from "./execute/index.js";
import { buildXml } from "./buildXml.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const bodyXml = fs.readFileSync(path.join(__dirname, "../body.xml"), "utf8");

const createMasterApi = ({ inType, inFetch = "*", inCollectionName, inFilter }) => {
    const localType = inType;
    const localDefaultFetch = inFetch;
    const localColName = inCollectionName || `Keshav${localType}Collection`;
    const localDefaultFilter = inFilter;

    const all = async (inArg) => {
        let localCompany = "";
        let localCustomFetch = localDefaultFetch;
        let localCustomFilter = localDefaultFilter;

        if (typeof inArg === "string") {
            localCompany = inArg;
        } else if (typeof inArg === "object" && inArg !== null) {
            localCompany = inArg.inCompany || inArg.company || "";
            if (inArg.inFetch || inArg.fetch) localCustomFetch = inArg.inFetch || inArg.fetch;
            if (inArg.inFilter || inArg.filter) localCustomFilter = inArg.inFilter || inArg.filter;
        }

        const staticVariables = localType === "Company" ? "" : `<SVCURRENTCOMPANY>${localCompany}</SVCURRENTCOMPANY>`;

        let fetchTag = "";
        if (localCustomFetch) {
            fetchTag = `<FETCH>${localCustomFetch}</FETCH>`;
        }

        let filterTag = "";
        if (localCustomFilter) {
            filterTag = `<FILTER>${localCustomFilter}</FILTER>`;
        }

        const tdlMessage = `
            <COLLECTION NAME="${localColName}">
                <TYPE>${localType}</TYPE>
                ${fetchTag}
                ${filterTag}
            </COLLECTION>
        `;

        const xml = buildXml({
            inTemplate: bodyXml,
            inId: localColName,
            inStaticVariables: staticVariables,
            inTdlMessage: tdlMessage
        });

        return await executeXml({ inXml: xml });
    };

    const raw = async (inArg) => {
        let localCompany = "";
        if (typeof inArg === "string") {
            localCompany = inArg;
        } else if (typeof inArg === "object" && inArg !== null) {
            localCompany = inArg.inCompany || inArg.company || "";
        }
        return await all({ inCompany: localCompany, inFetch: "*, *.*" });
    };

    const mainFn = (inArg) => all(inArg);
    mainFn.all = all;
    mainFn.raw = raw;
    return mainFn;
};

export { createMasterApi };
export default { createMasterApi };
