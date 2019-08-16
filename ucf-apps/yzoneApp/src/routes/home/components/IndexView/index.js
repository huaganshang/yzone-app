/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 15:29:33
 * @LastEditTime: 2019-08-15 17:48:14
 * @LastEditors: Please set LastEditors
 */
import React, {Component} from 'react'
import {actions} from 'mirrorx';
import queryString from "query-string";
import { Link } from "react-router-dom";
import { List } from 'antd-mobile';
import './index.less';

const Item = List.Item;

export default class IndexView extends Component {
    render(){
        return (
            <div id="page-index">
                <div>
                    <List renderHeader={() => '姓名'} className="my-list">
                        <Item extra={'...'}>React</Item>
                    </List>
                    <List renderHeader={() => '版本'} className="my-list">
                        <Item extra={'...'}>16.9.0</Item>
                    </List>
                    <List renderHeader={() => '描述信息'} className="my-list">
                        <Item extra={'...'}>React是一个用于构建用户界面的javascript库</Item>
                    </List>
                </div>
                <div className="goToDetail">
                    <Link to="/detail">查看详情</Link>
                </div>
            </div>
        )
    }
}
