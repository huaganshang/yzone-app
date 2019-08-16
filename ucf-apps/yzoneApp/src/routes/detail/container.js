/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 15:29:33
 * @LastEditTime: 2019-08-15 17:30:53
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import mirror, {connect} from 'mirrorx';
import IndexView from './components/IndexView';

//数据和组件UI关联、绑定
export default connect(state => state.query,null)(IndexView);
