//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace ReportGeneratorService.DataModule
{
    using System;
    using System.Collections.Generic;
    
    public partial class T_DIM_FORMULAID
    {
        public T_DIM_FORMULAID()
        {
            this.T_DIM_DAI_PRODUCT = new HashSet<T_DIM_DAI_PRODUCT>();
            this.T_DIM_FORMULA_PARA = new HashSet<T_DIM_FORMULA_PARA>();
        }
    
        public int FormulaID { get; set; }
        public string FormulaName { get; set; }
        public string FormulaExpression { get; set; }
        public string Description { get; set; }
    
        public virtual ICollection<T_DIM_DAI_PRODUCT> T_DIM_DAI_PRODUCT { get; set; }
        public virtual ICollection<T_DIM_FORMULA_PARA> T_DIM_FORMULA_PARA { get; set; }
    }
}
