import { createMasterApi } from "../core/index.js";

const StockGroup = createMasterApi({
    inType: "StockGroup",
    inFetch: "Name, Parent, *"
});

export { StockGroup };
export default StockGroup;
