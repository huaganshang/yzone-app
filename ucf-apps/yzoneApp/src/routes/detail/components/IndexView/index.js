/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 15:29:33
 * @LastEditTime: 2019-08-16 13:34:49
 * @LastEditors: Please set LastEditors
 */
import React, {Component} from 'react'
import {actions} from 'mirrorx';
import { Link } from "react-router-dom";

import './index.less';

export default class IndexView extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'React',
            age: '16.9.0'
        };
    }
    
    /**
     * @description: 上传照片
     * @param {type} 
     * @return: 
     */
    uploadPhoto(){
        if(window.YYEsnBridge){
            YYEsnBridge.ready(function (){
                YYEsnBridge.do('chooseImages', {
                    sourceType: ['album', 'camera'],
                    returnThumbnail: true,
                    success: function(res){
                        alert('调用成功');
                    },
                    fail: function(err){
                        alert('调用失败');
                    },
                    complete: function(res){
                        alert('调用完成后执行');
                    }
                });
            });
        }
    }

    render(){
        return (
            <div className="box">
                <ul className="subItem">
                    <li>我的名字是：<span className="userInfo">{this.state.name}</span></li>
                    <li>我的版本是：<span className="userInfo">{this.state.age}</span></li>
                    <li>描述信息：<span className="userInfo">React是一个用于构建用户界面的javascript库...</span></li>
                </ul>
                <div className="subItem">
                    <a onClick={this.uploadPhoto} className="upload-photo">上传照片</a>
                    <Link to="/" className="link">返回首页</Link>
                </div>
            </div>
        )
    }
}
