import { Company } from "./Company.js";
import { Ledger } from "./Ledger.js";
import { Group } from "./Group.js";
import { StockItem } from "./StockItem.js";
import { StockGroup } from "./StockGroup.js";
import { StockCategory } from "./StockCategory.js";
import { Unit } from "./Unit.js";
import { Godown } from "./Godown.js";
import { CostCategory } from "./CostCategory.js";
import { CostCentre } from "./CostCentre.js";
import { Currency } from "./Currency.js";
import { VoucherType } from "./VoucherType.js";
import { Employee } from "./Employee.js";
import { AttendanceType } from "./AttendanceType.js";
import { TaxUnit } from "./TaxUnit.js";
import { TariffClassification } from "./TariffClassification.js";

const masters = {
    Company,
    Ledger,
    Group,
    StockItem,
    StockGroup,
    StockCategory,
    Unit,
    Godown,
    CostCategory,
    CostCentre,
    Currency,
    VoucherType,
    Employee,
    AttendanceType,
    TaxUnit,
    TariffClassification
};

export {
    Company,
    Ledger,
    Group,
    StockItem,
    StockGroup,
    StockCategory,
    Unit,
    Godown,
    CostCategory,
    CostCentre,
    Currency,
    VoucherType,
    Employee,
    AttendanceType,
    TaxUnit,
    TariffClassification,
    masters
};

export default masters;
