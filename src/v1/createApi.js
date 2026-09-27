import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { executeXml, buildXml } from "./core/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const bodyXml = fs.readFileSync(path.join(__dirname, "body.xml"), "utf8");

const createMasterApi = ({ inType, inFetch = "*", inCollectionName, inFilter }) => {
    const localType = inType;
    const localFetch = inFetch;
    const localColName = inCollectionName || `Keshav${localType}Collection`;
    const localFilter = inFilter;

    const all = async (inArg) => {
        let localCompany = "";
        let customFetch = localFetch;
        let customFilter = localFilter;

        if (typeof inArg === "string") {
            localCompany = inArg;
        } else if (typeof inArg === "object" && inArg !== null) {
            localCompany = inArg.inCompany || inArg.company || "";
            if (inArg.inFetch || inArg.fetch) customFetch = inArg.inFetch || inArg.fetch;
            if (inArg.inFilter || inArg.filter) customFilter = inArg.inFilter || inArg.filter;
        }

        const staticVariables = localType === "Company" ? "" : `<SVCURRENTCOMPANY>${localCompany}</SVCURRENTCOMPANY>`;

        let fetchTag = "";
        if (customFetch) {
            fetchTag = `<FETCH>${customFetch}</FETCH>`;
        }

        let filterTag = "";
        if (customFilter) {
            filterTag = `<FILTER>${customFilter}</FILTER>`;
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

    const mainFn = (inArg) => all(inArg);
    mainFn.all = all;
    return mainFn;
};

export { createMasterApi };
export default { createMasterApi };
