/**
 * Created by MengL on 16/4/14.
 */
function simpleTrim(s){
    var len = s.length;
    for(var i = 0;i<len;i++){
        if(s[i]===' '||s[i]==='\t'){
            //什么操作也不做,就是要找到第一个s[i]不是空格的i
        }else {
            break;//找到了,退出循环
        }
    }
    if(i===len){
        return'';//说明字符串是一系列空格或者tab
    }
    for(var j = len;j > 0;j--)//从右开始找不为空格的下标
    {
        if(s[j-1]===' '||s[j-1]==='\t'){

        }
        else {
            break;
        }
    }
    return s.substring(i,j);
}
var s=new String('   abcdef   ');
alert(simpleTrim(s));

function trim(s){
    return s.replace(/^\s+|\s+$/g, '');//正则表达式的威力
}