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
    
    public partial class T_DIM_SENSOR_PRODUCT
    {
        public T_DIM_SENSOR_PRODUCT()
        {
            this.T_DIM_SENSOR = new HashSet<T_DIM_SENSOR>();
        }
    
        public int PRODUCT_ID { get; set; }
        public string PRODUCT_TYPE_ID { get; set; }
        public string PRODUCT_NAME { get; set; }
        public string PRODUCT_CODE { get; set; }
        public Nullable<decimal> PRODUCT_UPPER_LIMIT1 { get; set; }
        public Nullable<decimal> PRODUCT_LOWER_LIMIT1 { get; set; }
        public Nullable<decimal> PRODUCT_UPPER_LIMIT2 { get; set; }
        public Nullable<decimal> PRODUCT_LOWER_LIMIT2 { get; set; }
        public string DESCRIPTION { get; set; }
        public Nullable<int> PRODUCT_TYPE_KEY { get; set; }
        public Nullable<short> PROTOCOL_ID { get; set; }
        public Nullable<int> FORMAULAID { get; set; }
        public Nullable<decimal> PRODUCT_UPPER_LIMIT3 { get; set; }
        public Nullable<decimal> PRODUCT_LOWER_LIMIT3 { get; set; }
        public Nullable<decimal> PRODUCT_UPPER_LIMIT4 { get; set; }
        public Nullable<decimal> PRODUCT_LOWER_LIMIT4 { get; set; }
        public string LIMIT_MAP { get; set; }
    
        public virtual T_DIM_PRODUCT_CATEGORY T_DIM_PRODUCT_CATEGORY { get; set; }
        public virtual T_DIM_PRODUCT_TYPE T_DIM_PRODUCT_TYPE { get; set; }
        public virtual T_DIM_PROTOCOL_TYPE T_DIM_PROTOCOL_TYPE { get; set; }
        public virtual ICollection<T_DIM_SENSOR> T_DIM_SENSOR { get; set; }
    }
}
