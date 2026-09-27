import { createMasterApi } from "../core/index.js";

const TariffClassification = createMasterApi({
    inType: "TariffClassification",
    inFetch: "*"
});

export { TariffClassification };
export default TariffClassification;
