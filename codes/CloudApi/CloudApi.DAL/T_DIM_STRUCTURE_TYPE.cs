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
    
    public partial class T_DIM_STRUCTURE_TYPE
    {
        public T_DIM_STRUCTURE_TYPE()
        {
            this.T_DIM_STRUCTURE = new HashSet<T_DIM_STRUCTURE>();
        }
    
        public string ID { get; set; }
        public string NAME_STRUCTURE_TYPE_CN { get; set; }
        public string NAME_STRUCTURE_TYPE_EN { get; set; }
        public string PARENT_STRUCTURE_TYPE_ID { get; set; }
        public Nullable<int> ORDERBY_COLUMN { get; set; }
        public Nullable<int> STRUCTURE_TYPE_KEY { get; set; }
        public string DESCRIPTION { get; set; }
    
        public virtual ICollection<T_DIM_STRUCTURE> T_DIM_STRUCTURE { get; set; }
    }
}
