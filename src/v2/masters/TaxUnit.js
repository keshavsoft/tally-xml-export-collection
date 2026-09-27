import { createMasterApi } from "../core/index.js";

const TaxUnit = createMasterApi({
    inType: "TaxUnit",
    inFetch: "*"
});

export { TaxUnit };
export default TaxUnit;
