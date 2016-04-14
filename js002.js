/**
 * Created by MengL on 16/4/14.
 */
//js对数组去重-那就新生成一个呗!
function uniqArray(arr) {
    var newArray = [];
    for (var i in arr) {
        if (arr[i] !== '' && newArray.indexOf(arr[i]) < 0 ) {//如果数组中没有这个元素,那么它在数组中的下标就是-1,所以小于0,那么就肯定不存在了!
            newArray.push(arr[i]);
        }
    }
    // console.log(newArray);
    return newArray;
}

var arr = ["red","red","green","1","1","11"];
alert(uniqArray(arr));