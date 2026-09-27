import { createMasterApi } from "../core/index.js";

const CostCentre = createMasterApi({
    inType: "CostCentre",
    inFetch: "*"
});

export { CostCentre };
export default CostCentre;
