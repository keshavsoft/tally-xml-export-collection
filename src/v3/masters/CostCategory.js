import { createMasterApi } from "../core/index.js";

const CostCategory = createMasterApi({
    inType: "CostCategory",
    inSelectedFetch: "Name, AllocateRevenue, AllocateNonRevenue"
});

export { CostCategory };
export default CostCategory;
