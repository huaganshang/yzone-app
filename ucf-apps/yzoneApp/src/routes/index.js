/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 15:29:33
 * @LastEditTime: 2019-08-15 16:53:10
 * @LastEditors: Please set LastEditors
 */
/**
 * 前端路由说明：
 * 1、基于浏览器 History 的前端 Hash 路由
 * 2、按业务模块和具体页面功能划分了一级路由和二级路由
 */
import React from "react";
import {Route} from "mirrorx";

import Home from './home/container'
import Detail from './detail/container'

export default () => (
    <div className="route-content">
        <Route exact path="/" component={Home}/>
        <Route exact path="/detail" component={Detail}/>
    </div>

)

