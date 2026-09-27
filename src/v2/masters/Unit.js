import { createMasterApi } from "../core/index.js";

const Unit = createMasterApi({
    inType: "Unit",
    inFetch: "*"
});

export { Unit };
export default Unit;
