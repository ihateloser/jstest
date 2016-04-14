/**
 * Created by MengL on 16/4/14.
 */


function hasclass(element, className) {
    classNamesList = element.className.split(" ");
    if (classNamesList.indexOf(className) === -1) {
        return false;
    } else {
        return true;
    }
}


function addClass(element, newClassName) {
    if(!hasclass(element,newClassName)){
        element.className+=' '+newClassName;//在类名列表上加上新的类名,那就有啦!
    }
}

function removeClass(element.oldClassName){
    if(hasclass(element,oldClassName)){
        element.className=element.className.replace(oldClassName,'');//把要删去的类名用空白来代替,就相当于没啦
    }
}

function isSiblingNode(element, siblingNode) {
    return element.parentNode===siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    var left = element.offsetLeft;
    var top = element.offsetTop;
    var parent = element.offsetParent;

    while (parent !== null) {
        left += parent.offsetLeft;
        top += parent.offsetTop;
        parent = parent.offsetParent;
    }

    var scrollLeft = document.body.scrollLeft + document.documentElement.scrollLeft;
    var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;

    left -= scrollLeft;
    top -= scrollTop;

    return {
        x: left,
        y: top
    }
}



