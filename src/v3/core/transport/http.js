const sendXml = async ({ inXml, inUrl = "http://localhost:9000" }) => {
    const localXml = inXml;
    const localUrl = inUrl;

    const response = await fetch(localUrl, {
        method: "POST",
        headers: {
            "Content-Type": "text/xml;charset=utf-8"
        },
        body: localXml
    });

    return await response.text();
};

export { sendXml };
export default { sendXml };
