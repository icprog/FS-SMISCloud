//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace FreeSun.FS_SMISCloud.Server.CloudApi.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class T_THEMES_ENVI_WIND
    {
        public int ID { get; set; }
        public Nullable<int> SENSOR_ID { get; set; }
        public Nullable<int> SAFETY_FACTOR_TYPE_ID { get; set; }
        public Nullable<decimal> SPEED_PHYSICAL_QUANTITY_VALUE { get; set; }
        public Nullable<decimal> DIRECTION_PHYSICAL_QUANTITY_VALUE { get; set; }
        public Nullable<decimal> ELEVATION_PHYSICAL_QUANTITY_VALUE { get; set; }
        public Nullable<decimal> WIND_SPEED_VALUE { get; set; }
        public Nullable<decimal> WIND_DIRECTION_VALUE { get; set; }
        public Nullable<decimal> WIND_ELEVATION_VALUE { get; set; }
        public Nullable<System.DateTime> ACQUISITION_DATETIME { get; set; }
        public Nullable<int> ORDERBY_COLUMN { get; set; }
        public string DESCRIPTION { get; set; }
        public string RESERVED_FIELD_1 { get; set; }
        public string RESERVED_FIELD_2 { get; set; }
        public string RESERVED_FIELD_3 { get; set; }
        public string RESERVED_FIELD_4 { get; set; }
        public string RESERVED_FIELD_5 { get; set; }
    }
}