import { createMasterApi } from "../core/index.js";

const CostCentre = createMasterApi({
    inType: "CostCentre",
    inSelectedFetch: "Name, Category, Parent"
});

export { CostCentre };
export default CostCentre;
