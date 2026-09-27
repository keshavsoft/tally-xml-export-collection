import { sendXml } from "../transport/http.js";
import { xmlToJson } from "../response/xmlToJson.js";

const executeXml = async ({ inXml, inUrl }) => {
    const localXml = inXml;
    const localUrl = inUrl;

    const responseText = await sendXml({ inXml: localXml, inUrl: localUrl });
    return xmlToJson({ inXml: responseText });
};

export { executeXml };
export default { executeXml };
