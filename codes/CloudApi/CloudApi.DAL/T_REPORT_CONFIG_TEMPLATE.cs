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
    
    public partial class T_REPORT_CONFIG_TEMPLATE
    {
        public int Id { get; set; }
        public int ReportConfigId { get; set; }
        public int ReportTemplateId { get; set; }
        public string Para1 { get; set; }
        public string Para2 { get; set; }
        public string Para3 { get; set; }
        public string Para4 { get; set; }
    
        public virtual T_REPORT_CONFIG T_REPORT_CONFIG { get; set; }
        public virtual T_REPORT_TEMPLATE T_REPORT_TEMPLATE { get; set; }
    }
}
