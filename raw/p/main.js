var $ = function (selector) {
    //return document.getElementById(selector);
    return document.querySelector(selector);
}

var $$ = function (selector) {
    return document.querySelectorAll(selector);
}
//window.onload = function () {
//    alert($$('.btn').length);
//}

var play = function (ele) {
    console.log(ele);
    var mp3 = $("#mp3");

    var raws = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
    var list = $$(".btn-group-h a");

    var src1 = "raw/";
    var ind = list.indexOf(ele);
 
    var src2 = raws[ind] + "4";

    var src3 = ".ogg";
    var src = src1 + src2 + src3;
    var dj = document.createElement('div');
    dj.setAttribute('class','dj');
    ele.appendChild(dj);
  
    setTimeout(function () {
        dj.style.top =100 + "px";
    }, 100)
    setTimeout(function () {
        dj.style.top = 352 + 'px';
    }, 1000);//延迟处理
  
    mp3.src = src;
    mp3.play();
}

NodeList.prototype.indexOf = function (e) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === e) {
            return i;
        }
    }
}

