import { createMasterApi } from "../core/index.js";

const AttendanceType = createMasterApi({
    inType: "AttendanceType",
    inSelectedFetch: "Name, AttendanceProductionType, PeriodType"
});

export { AttendanceType };
export default AttendanceType;
