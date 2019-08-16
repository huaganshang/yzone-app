/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 15:29:33
 * @LastEditTime: 2019-08-15 17:32:03
 * @LastEditors: Please set LastEditors
 */
/**
 * 整个应用的入口，包含路由，数据管理加载
 */

import React from "react";
import mirror, { render,Router } from "mirrorx";

import Routes from './routes'

import "./app.less";

const MiddlewareConfig = [];


mirror.defaults({
    historyMode: "hash",
    middlewares: MiddlewareConfig
});

render(
    <Router>
        <Routes />
    </Router>,
    document.querySelector("#app")
);
