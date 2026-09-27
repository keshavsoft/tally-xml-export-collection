import { createMasterApi } from "../core/index.js";

const Group = createMasterApi({
    inType: "Group",
    inFetch: "Name, Parent, *"
});

export { Group };
export default Group;
