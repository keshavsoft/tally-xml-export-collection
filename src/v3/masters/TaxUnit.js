import { createMasterApi } from "../core/index.js";

const TaxUnit = createMasterApi({
    inType: "TaxUnit",
    inSelectedFetch: "*"
});

export { TaxUnit };
export default TaxUnit;
