import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { executeXml } from "./execute/index.js";
import { buildXml } from "./buildXml.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const bodyXml = fs.readFileSync(path.join(__dirname, "../body.xml"), "utf8");

const createMasterApi = ({ inType, inSelectedFetch = "*", inCollectionName, inFilter }) => {
    const localType = inType;
    const localSelectedFetch = inSelectedFetch;
    const localColName = inCollectionName || `Keshav${localType}Collection`;
    const localDefaultFilter = inFilter;

    const executeQuery = async ({ inCompany, inFetch, inFilter: customFilter }) => {
        const localCompany = inCompany || "";
        const localFetch = inFetch || "*";
        const localFilter = customFilter || localDefaultFilter;

        const staticVariables = localType === "Company" ? "" : `<SVCURRENTCOMPANY>${localCompany}</SVCURRENTCOMPANY>`;

        let fetchTag = "";
        if (localFetch) {
            fetchTag = `<FETCH>${localFetch}</FETCH>`;
        }

        let filterTag = "";
        if (localFilter) {
            filterTag = `<FILTER>${localFilter}</FILTER>`;
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

    const asIs = async (inArg) => {
        let localCompany = "";
        if (typeof inArg === "string") {
            localCompany = inArg;
        } else if (typeof inArg === "object" && inArg !== null) {
            localCompany = inArg.inCompany || inArg.company || "";
        }
        return await executeQuery({ inCompany: localCompany, inFetch: "*, *.*" });
    };

    const selected = async (inArg) => {
        let localCompany = "";
        let localCustomFetch = localSelectedFetch;
        let localCustomFilter = localDefaultFilter;

        if (typeof inArg === "string") {
            localCompany = inArg;
        } else if (typeof inArg === "object" && inArg !== null) {
            localCompany = inArg.inCompany || inArg.company || "";
            if (inArg.inFetch || inArg.fetch) localCustomFetch = inArg.inFetch || inArg.fetch;
            if (inArg.inFilter || inArg.filter) localCustomFilter = inArg.inFilter || inArg.filter;
        }

        return await executeQuery({
            inCompany: localCompany,
            inFetch: localCustomFetch,
            inFilter: localCustomFilter
        });
    };

    const mainFn = (inArg) => asIs(inArg);
    mainFn.asIs = asIs;
    mainFn.selected = selected;
    mainFn.all = asIs;
    return mainFn;
};

export { createMasterApi };
export default { createMasterApi };
