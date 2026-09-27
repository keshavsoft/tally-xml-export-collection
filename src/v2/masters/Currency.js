import { createMasterApi } from "../core/index.js";

const Currency = createMasterApi({
    inType: "Currency",
    inFetch: "*"
});

export { Currency };
export default Currency;
