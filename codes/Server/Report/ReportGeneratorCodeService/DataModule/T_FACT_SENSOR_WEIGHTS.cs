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
    
    public partial class T_FACT_SENSOR_WEIGHTS
    {
        public int ID { get; set; }
        public Nullable<int> SENSOR_ID { get; set; }
        public Nullable<byte> SENSOR_WEIGHTS { get; set; }
        public string DESCRIPTION { get; set; }
        public Nullable<int> ORG_STRUC_ID { get; set; }
    
        public virtual T_DIM_ORG_STUCTURE T_DIM_ORG_STUCTURE { get; set; }
        public virtual T_DIM_SENSOR T_DIM_SENSOR { get; set; }
    }
}
