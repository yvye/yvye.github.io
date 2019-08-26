let p=document.getElementById("p");
let p2=document.getElementById("p2");
p.innerText=navigator.userAgent;
console.log(navigator);
console.log(navigator.userAgent);

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
if(IsPC()){
    p2.innerText="这里是电脑啊!"
}else{
    p2.innerText="这里是手机啊!"
}