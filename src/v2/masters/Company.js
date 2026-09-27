import { createMasterApi } from "../core/index.js";

const Company = createMasterApi({
    inType: "Company",
    inFetch: "*"
});

export { Company };
export default Company;
