import { createMasterApi } from "../core/index.js";

const Unit = createMasterApi({
    inType: "Unit",
    inSelectedFetch: "$$Alias:Name, DecimalPlaces, IsSymbol"
});

export { Unit };
export default Unit;
