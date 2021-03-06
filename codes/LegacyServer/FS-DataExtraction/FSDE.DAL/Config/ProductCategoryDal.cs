﻿// // --------------------------------------------------------------------------------------------
// // <copyright file="ProductCategoryDal.cs" company="江苏飞尚安全监测咨询有限公司">
// // Copyright (C) 2014 飞尚科技
// // 版权所有。 
// // </copyright>
// // <summary>
// // 文件功能描述：
// //
// // 创建标识：20140604
// //
// // 修改标识：
// // 修改描述：
// //
// // 修改标识：
// // 修改描述：
// // </summary>
// // ---------------------------------------------------------------------------------------------

using System.Collections.Generic;
using System.Linq;
using FSDE.IDAL;
using FSDE.Model.Config;
using SqliteORM;

namespace FSDE.DAL.Config
{
    public class ProductCategoryDal:IProductCategory
    {
        public IList<ProductCategory> SelectList()
        {
            using (DbConnection conn = new DbConnection())
            {
                using (TableAdapter<ProductCategory> adapter = TableAdapter<ProductCategory>.Open())
                {
                    return adapter.Select().ToList();
                }
            }
        }
    }
}