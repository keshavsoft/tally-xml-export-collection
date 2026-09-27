import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_"
});

const xmlToJson = ({ inXml }) => {
    const localXml = inXml;
    return parser.parse(localXml);
};

export { xmlToJson };
export default { xmlToJson };
