/**
 * Created by MengL on 16/4/14.
 */

//复制各个类型,clone


function cloneObject(src) {
    if(src == null || typeof src !='object')
        return src;
    if (src instanceof Date){
        var clone= new Date(src.getDate());
        return clone;
    }
    if (src instanceof Array){
        var clone=[];
        for(i=0;i<src.length;i++){
            clone[i]=src[i];
        }
    }
    if(src instanceof Object){
        var clone={};
        for(var key in src){
            clone[key]=cloneObject(src[key]);
        }
        return clone;
    }
}

// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);
