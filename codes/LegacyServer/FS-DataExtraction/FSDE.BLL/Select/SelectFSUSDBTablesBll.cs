﻿#region FileHeader
//  --------------------------------------------------------------------------------------------
//  <copyright file="SelectFSUSDBTablesBll.cs" company="江苏飞尚安全监测咨询有限公司">
//  Copyright (C) 2014 飞尚科技
//  版权所有。 
//  </copyright>
//  <summary>
//  文件功能描述：
// 
//  创建标识：Created in 20140604 by WIN .
// 
//  修改标识：
//  修改描述：
// 
//  修改标识：
//  修改描述：
//  </summary>
//  ---------------------------------------------------------------------------------------------
#endregion
namespace FSDE.BLL.Select
{
    using System.Data;

    using FSDE.DALFactory;
    using FSDE.IDAL;
    using FSDE.Model.Config;

    public class SelectFSUSDBTablesBll
    {
        private static readonly ISelectTablesDal Dal = DataAccess.CreateSelectFSUSDBTablesDal();

        public DataSet Select(DataBaseName database)
        {
            return Dal.Select(database);
        }

    }
}