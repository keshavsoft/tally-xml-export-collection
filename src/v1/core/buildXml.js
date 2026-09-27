const buildXml = ({ inTemplate, inId, inStaticVariables, inTdlMessage }) => {
    const localTemplate = inTemplate;
    const localId = inId;
    const localStatic = inStaticVariables || "";
    const localTdlMessage = inTdlMessage || "";

    return localTemplate
        .replace("{{ID}}", localId)
        .replace("{{STATICVARIABLES}}", localStatic)
        .replace("{{TDLMESSAGE}}", localTdlMessage);
};

export { buildXml };
export default { buildXml };
