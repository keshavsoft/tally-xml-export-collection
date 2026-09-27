import { createMasterApi } from "../core/index.js";

const CostCategory = createMasterApi({
    inType: "CostCategory",
    inFetch: "*"
});

export { CostCategory };
export default CostCategory;
