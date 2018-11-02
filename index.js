window.onload = function(){
    var choujiang = new ChouJiang();
    choujiang.start(3,320,20);
};

function ChouJiang(){
    // 初始化转盘状态为未转动
    this.eachDeg = 51.4;
    this.ifRotating = false;
}
ChouJiang.prototype = {
    start:function(seconds,angleBig,angleSmall){
        //这里是转换需要转动的时间
        var seconds = seconds * 1000;

        // 获取中奖指针与转动板
        var button = document.getElementsByClassName("img_top")[0];
        var rotatePlace = document.getElementsByClassName("img_middle")[0];

        // 绑定中奖指针的点击事件
        // 在此处，箭头函数与非箭头函数的this指向将起到至关重要的作用
        // 在箭头函数中，this由外围最近的一层非箭头函数决定
        button.addEventListener('click',() => {
            // 这里是获取需要转动的角度
            var angle = Math.floor(Math.abs(angleBig-angleSmall) * Math.random())+Math.min(angleBig,angleSmall);
            var goodAngle = angle % 360;
            // 判断状态，若未非转动状态，执行下面代码
            if(!this.ifRotating)
            {
                button.classList.add("img_topDisable");
                // 设置转动动画为多少秒
                rotatePlace.style.transition = seconds/1000 + "s ease";
                // 设置转动角度为多少度
                rotatePlace.style.transform = "rotate("+ angle +"deg)";
                // 当前状态：正在转动
                this.ifRotating = !this.ifRotating;
                setTimeout(() => {
                    // 重置转动状态为未转动
                    this.ifRotating = !this.ifRotating;
                    button.classList.remove("img_topDisable");
                    rotatePlace.style = "";
                    if(goodAngle - this.eachDeg*1<this.eachDeg&&goodAngle - this.eachDeg*1<0)
                    {
                        alert("免单4999");
                        return;
                    }
                    if(goodAngle - this.eachDeg*2<this.eachDeg&&goodAngle - this.eachDeg*2<0)
                    {
                        alert("免单50");
                        return;
                    }
                    if(goodAngle - this.eachDeg*3<this.eachDeg&&goodAngle - this.eachDeg*3<0)
                    {
                        alert("免单10");
                        return;
                    }
                    if(goodAngle - this.eachDeg*4<this.eachDeg&&goodAngle - this.eachDeg*4<0)
                    {
                        alert("免单5");
                        return;
                    }
                    if(goodAngle - this.eachDeg*5<this.eachDeg&&goodAngle - this.eachDeg*5<0)
                    {
                        alert("免分期服务费");
                        return;
                    }
                    if(goodAngle - this.eachDeg*6<this.eachDeg&&goodAngle - this.eachDeg*6<0)
                    {
                        alert("提高白条额度");
                        return;
                    }
                    if(goodAngle - this.eachDeg*7<this.eachDeg&&goodAngle - this.eachDeg*7<0)
                    {
                        alert("未中奖");
                        return;
                    }
                    // 对应上面的转动时间
                },seconds);
            }
        });
    },
};