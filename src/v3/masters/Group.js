import { createMasterApi } from "../core/index.js";

const Group = createMasterApi({
    inType: "Group",
    inSelectedFetch: "Name, Parent"
});

export { Group };
export default Group;
