import { createMasterApi } from "../core/index.js";

const TariffClassification = createMasterApi({
    inType: "TariffClassification",
    inSelectedFetch: "*"
});

export { TariffClassification };
export default TariffClassification;
