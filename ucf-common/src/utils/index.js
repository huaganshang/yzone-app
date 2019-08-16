/**
 * 公共函数类
 */


/**
 * @description 深度克隆，只针对对象单级别不包含函数体
 * @param {JSON} 要克隆的对象
 * @returns {JSON} 拷贝后的对象
 */
export function deepClone(data) {
    return JSON.parse(JSON.stringify(data));
}
/**
 * @description 根据页面视口区域高度计算表格高度，以确定什么时候出滚动条
 * @returns {Number} height表格内容区高度
 */
export function getHeight() {
    let clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight),
        scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    let showHeight = (clientHeight < scrollHeight) && clientHeight || scrollHeight;
    return showHeight;
}

/**
 * @description 获得Cookie
 * @param {string} 要获得的字段
 * @returns {string} 对应字段的值
 */
export const getCookie = (name) => {

    let cookieValue = null;
    if (document.cookie && document.cookie != '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    // 按照总设部规范，调整为下划线
    if (typeof cookieValue != 'undefined' && cookieValue != null) {
        cookieValue = cookieValue.replace(/-/, "_");
    }
    return cookieValue;
}