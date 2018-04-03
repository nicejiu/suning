//banner效果
{
    let banner = document.querySelectorAll(".banner_bannerbox1 li");
    let dian = document.querySelectorAll(".banner_dian div");
    let box = document.querySelector(".banner_bannerbox");
    let zuo = document.querySelector(".banner_btn");
    let you = document.querySelector(".banner_btn2");
    dian.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            for (let i = 0; i < dian.length; i++) {
                dian[i].classList.remove("banner_dian1");
                banner[i].classList.remove("banner_index");
            }
            this.classList.add("banner_dian1");
            banner[index].classList.add("banner_index");
            n = index;
        }
    });
    let n = 0;
    function move() {
        n++;
        if (n === dian.length) {
            n = 0;
        }
        if (n < 0) {
            n = dian.length - 1;
        }
        for (let i = 0; i < dian.length; i++) {
            dian[i].classList.remove("banner_dian1");
            banner[i].classList.remove("banner_index");
        }
        dian[n].classList.add("banner_dian1");
        banner[n].classList.add("banner_index");
    }

    let t = setInterval(move, 3000);
    box.onmouseenter = function () {
        clearInterval(t);
    };
    box.onmouseleave = function () {
        t = setInterval(move, 3000);
    };
    zuo.onclick = function () {
        n -= 2;
        move();
    };
    you.onclick = function () {
        move();
    }
}
//banner 导航效果
{
    function fe(c) {
        let box=c.querySelectorAll(".banner_leftbox1_box");
        let nav=c.querySelectorAll(".banner_leftbox1");
        //console.log(box,nav);
        nav.forEach(function (ele,index) {
            ele.onmouseenter=function () {
                box[index].style.display="block";
                 box[index].style.width="1000px"
            };
            ele.onmouseleave=function () {
                box[index].style.display="none";
                 box[index].style.width="0"
            }
        });
        document.onwheel=function () {
            if(nav.clientY<0){
                box.style.top="client"
            }

        }
    }
    let list=document.querySelectorAll(".banner_leftbox19");
    list.forEach(function (ele) {
        fe(ele)
    })

}
//侧导航效果
{
    let text1 = document.querySelectorAll(".cenav_act1");
    let text2 = document.querySelectorAll(".cenav_act2");
    let text3 = document.querySelector(".cenav_act3");
    let btn1 = document.querySelectorAll(".cenav_active1");
    let btn2 = document.querySelectorAll(".cenav_active2");
    let btn3 = document.querySelector(".cenav_active3");
    let fr=document.querySelector(".cenav_tankuang");
    let totop = document.querySelector(".cenav_box11");
    text1.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            btn1[index].style.right = " 0";
        };
        ele.onmouseleave = function () {
            //  btn1[index].style.cssText = "background-color: #000;color: #EF9A05";
            // btn1.addEventListener("transitionend",function () {
            //      btn1[index].style.right = "-46px";
            //  });
            btn1[index].style.right = "-46px";
        }
    });
    text2.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            btn2[index].style.right = "0";
        };
        ele.onmouseleave = function () {
            btn2[index].style.right = "-60px";
        }
    });
    // ;background-color: #000;color: #EF9A05;
    text3.onmouseenter = function () {
        btn3.style.right = "0";
    };
    text3.onmouseleave = function () {
        btn3.style.right = "-160px"
    };

    totop.onclick = function () {
        document.documentElement.scrollTop = 0;

    }

}
//搜索框效果
{
    function al(ele) {
        let search=ele.querySelector(".serch_serchkuang");
        let show=ele.querySelector(".serch_click_box");
        let del=ele.querySelector(".serch_click_del");
        search.onclick=function () {
            search.placeholder="";
            show.style.display="block"
        };
        search.onblur=function(){
            search.placeholder="新春送好礼 一站购齐拜年礼";
            show.style.display="none"
        };
        del.onclick=function () {
            search.placeholder="新春送好礼 一站购齐拜年礼";
            show.style.display="none"
        }
    }
    let list=document.querySelectorAll(".my_search");
    list.forEach(function (ele) {
        al(ele);
    })
}
//topBar效果
{
    let topBar = document.querySelector(".topBar");
    let navtext = document.querySelector(".topbar_nav1");
    let navbox = document.querySelector(".topBar_leftbox");
    let navbig = document.querySelector(".topBar_center_left");
    let leftBar = document.querySelector(".leftBar");
    let toTop = document.querySelector(".leftBar_totop");
    window.onscroll = function () {
        let oo = document.documentElement.scrollTop;
        if (oo > 980) {
            topBar.style.display = "block";
            navtext.onmouseenter = function () {
                navbox.style.display = "block";
                navbig.onwheel=function () {
                    navbox.style.display = "none";
                }
            };
            navbig.onmouseleave = function () {
                navbox.style.display = "none";
            }
        } else {
            topBar.style.display = "none";
        }
        if (oo > 2490 && oo < 14700) {
            leftBar.style.display = "block";
        } else {
            leftBar.style.display = "none";
        }
    };
    toTop.onclick = function () {
        document.documentElement.scrollTop = 0;
    };
    let car=document.querySelector(".topBar_textcar");
    let carbox=document.querySelector(".topBar_text_car");
    car.onmouseenter=function () {
        carbox.style.display="block"
    };
    car.onmouseleave=function () {
        carbox.style.display="none"
    }
}
//leftBar效果
{
    let list = document.querySelectorAll(".leftBar_list_li");
    let con = document.querySelectorAll(".same");
    list.forEach(function (ele, index) {
        ele.onclick = function () {
            let ot = con[index].offsetTop -50;
            con[index].offsetTop = ot;
            let now = document.documentElement.scrollTop;
            let spead = (ot - now) / 8;
            let time = 0;
            let t = setInterval(function () {
                time += 25;
                now += spead;
                if (time === 200) {
                    clearInterval(t);
                }
                document.documentElement.scrollTop = now;
            }, 25)
        }
    });
    window.addEventListener("scroll", function () {
        let st = document.documentElement.scrollTop;
        for (let i = 0; i < con.length; i++) {
            if (st > con[i].offsetTop - 150) {
                for (let i = 0; i < list.length; i++) {
                    list[i].classList.remove("leftBar_list_active");
                }
                list[i].classList.add("leftBar_list_active");
            }
        }
    })

}
//头部效果
{
    let textBox = document.querySelectorAll(".head_left_wenzibox");
    let listDiv = document.querySelectorAll(".webnav_list");
    let obj = listDiv[0];
    textBox.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            obj.style.display = "none";
            listDiv[index].style.display = "block";
            obj = listDiv[index];
        };
        ele.onmouseleave = function () {
            listDiv[index].style.display = "none";
        }
    });
}
//大聚惠效果
{
    let prev = document.querySelector(".dajuhui_twoleft_jiantou1");
    let next = document.querySelector(".dajuhui_twoleft_jiantou2");
    let con = document.querySelector(".dajuhui_twoleft_big");
    let n = 1;
    let flag = true;
    next.onclick = function () {
        if (flag) {
            n++;
            con.style.transition = "all 1s";
            con.style.marginLeft = -1000 * n + "px";
            flag = false;
        }
    };
    prev.onclick = function () {
        if (flag) {
            n--;
            con.style.transition = "all 1s";
            con.style.marginLeft = -1000 * n + "px";
            flag = false;
        }
    };
    con.addEventListener("transitionend", function () {
        flag = true;
        if (n === 4) {
            con.style.transition = "none";
            con.style.marginLeft = "-1000px";
            n = 1;
        }
        if (n === 0) {
            con.style.transition = "none";
            con.style.marginLeft = "-3000px";
            n = 3;
        }
    });
}
//排行榜效果
{
    let box = document.querySelector(".paihang_bottom_longbox");
    let next = document.querySelector(".paihang_bottom .banner_btn2");
    let prev = document.querySelector(".paihang_bottom .banner_btn");
    let dian=document.querySelectorAll(".paihang_dian1");
    let obj=dian[0];
    let n = 1;
    dian.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            obj.classList.remove("paihang_dian3");
            this.classList.add("paihang_dian3");
            box.style.transition = "all 1s";
            box.style.marginLeft=-390*(index+1)+"px";
            obj=dian[index];
            n=index;
        }
    });
    let flag = true;
    next.onclick = function () {
        if (flag) {
            flag=false;
            n++;
            box.style.transition = "all 1s";
            box.style.marginLeft = -390 * n + "px";
            obj.classList.remove("paihang_dian3");
            dian[n-1].classList.add("paihang_dian3");
            obj=dian[n-1];
        }
    };
    prev.onclick = function () {
        if (flag) {
            flag=false;
            n--;
            box.style.transition = "all 1s";
            box.style.marginLeft = -390 * n + "px";
            obj.classList.remove("paihang_dian3");
            dian[n-1].classList.add("paihang_dian3");
            obj=dian[n-1];
        }
    };
    box.addEventListener("transitionend",function(){
        flag=true;
        if(n===4){
            box.style.transition="none";
            box.style.marginLeft=-390+"px";
            n=1;
        }
        if(n===0){
            box.style.transition="none";
            box.style.marginLeft=-390*3+"px";
            n=3;
        }
    });

}
//视频 效果
{
    let pages=document.querySelectorAll(".nine_banner2_small1x");
    let box=document.querySelectorAll(".nine_banner2_shipinx");
    let big=document.querySelector(".nine_banner2_small_box");
    let prev=document.querySelector(".nine_prev");
    let next=document.querySelector(".nine_next");
    let n=1;
    flag=true;
    let ww=box[0];
    next.onclick=function () {
        if(flag){
            n++;
            big.style.transition="all 1s";
            big.style.marginLeft=-390*n+"px";
             flag=false;
        }
    };
    prev.onclick=function () {
        if(flag){
            n--;
            big.style.transition="all 1s";
            big.style.marginLeft=-390*n+"px";
             flag=false;
        }

    };
    big.addEventListener("transitionend", function () {
        flag=true;
        if (n === 3) {
            big.style.transition = "none";
            big.style.marginLeft = "-390px";
            n = 1;
        }
        if (n === 0) {
            big.style.transition = "none";
            big.style.marginLeft = "-780px";
            n = 2;
        }
    });
    pages.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            ww.classList.remove("acindex");
            box[index].classList.add("acindex");
            ww=box[index];
        }
    })
}
//乐拼购 效果
{
    let prev=document.querySelector(".list2_second_prev");
    let next=document.querySelector(".list2_second_next");
    let box=document.querySelector(".list2_second_box");
    let n=1;
    let flag=true;
    next.onclick=function () {
        if(flag){
            n++;
            box.style.transition="all 1s";
            box.style.marginLeft=-590*n+"px";
        }
        flag=false;
    };
    prev.onclick=function () {
        if(flag){
            n--;
            box.style.transition="all 1s";
            box.style.marginLeft=-590*n+"px";
        }
        flag=false;
    };
    box.addEventListener("transitionend",function () {
        flag=true;
        if(n===4){
            box.style.transition="none";
            box.style.marginLeft=-590+"px";
            n=1;
        }
        if(n===0){
            box.style.transition="none";
            box.style.marginLeft=-590*3+"px";
            n=3;
        }
    })
}