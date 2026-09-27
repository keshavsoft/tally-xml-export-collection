import { createMasterApi } from "../core/index.js";

const Company = createMasterApi({
    inType: "Company",
    inSelectedFetch: "$$Alias:Name"
});

export { Company };
export default Company;
