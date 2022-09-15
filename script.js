/*问答 */
var ul = document.getElementById("QA-ul");
var ulChildren = ul.children;
for (var i = 0; i < ulChildren.length; i++) {
    ulChildren[i].onclick = function (event) {
        event = event || window.event;
        if (event.target.className == "QA-a") {
            if (this.children[1].style.display == "none") {
                this.children[1].style.display = "block";
            } else {
                this.children[1].style.display = "none";
            }
        };
    };
}

/***********/
if (screen.width > 1000) {
    var json = [{ //  0
        width: 380,
        top: 50,
        left: 60,
        opacity: 0.2,
        zIndex: 2
    }, { // 1
        width: 380,
        top: 60,
        left: 200,
        opacity: 0.8,
        zIndex: 3
    }, { // 2
        width: 380,
        top: 80,
        left: 420,
        opacity: 1,
        zIndex: 4
    }, { // 3
        width: 380,
        top: 60,
        left: 720,
        opacity: 0.8,
        zIndex: 3
    }, { //4
        width: 380,
        top: 50,
        left: 800,
        opacity: 0.2,
        zIndex: 2
    }];
    //根据json的内容把图片缓动到相应位置，同时缓动
    var liArr = document.getElementsByClassName('aboutslide');
    var next = document.getElementById('next');
    var prev = document.getElementById('prev');

    function move() {
        for (var i = 0; i < liArr.length; i++) {
            animation(liArr[i], json[i]);
        }
    };
    move();
    next.onclick = function () {
        var last = json.pop();
        json.unshift(last);
        move();
    };
    prev.onclick = function () {
        var first = json.shift();
        json.push(first);
        move();
    };

    function animation(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            //json里面有几个属性就要执行几次
            var target = 0; //记录目标位置
            var leader = 0; //记录当前位置
            var speed = 0; //记录速度
            for (var key in json) {
                if (key == 'opacity') {
                    target = Math.round(json['opacity'] * 100) //0-100
                    leader = getStyle(obj, 'opacity') * 100 //0-100
                } else {
                    target = parseInt(json[key]);
                    leader = parseInt(getStyle(obj, key));
                };
                speed = (target - leader) / 10;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                leader = leader + speed; //0-100
                if (key == 'opacity') {
                    obj.style.opacity = leader / 100;
                    obj.style.filter = "alpha(opacity=" + leader + ")";
                } else if (key == "zIndex") {
                    obj.style.zIndex = json['zIndex'];
                } else {
                    obj.style[key] = leader + "px";
                };

                if (leader != target) {
                    flag = false
                };
            };
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                };
            };

        }, 20)
    }

    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr]
        } else {
            return obj.currentStyle[attr];
        };
    };
    const showModal1 = document.getElementById("card1");
    const showModal2 = document.getElementById("card2");
    const showModal3 = document.getElementById("card3");
    const showModal4 = document.getElementById("card4");
    const close1 = document.getElementById("close1");
    const close2 = document.getElementById("close2");
    const close3 = document.getElementById("close3");
    const close4 = document.getElementById("close4");
    const modal1 = document.getElementById("modal1");
    const modal2 = document.getElementById("modal2");
    const modal3 = document.getElementById("modal3");
    const modal4 = document.getElementById("modal4");
    showModal1.addEventListener("click", () => {
        modal1.classList.toggle("show");
    });
    close1.addEventListener('click', () => {
        modal1.classList.toggle("show");
    });

    showModal2.addEventListener("click", () => {
        modal2.classList.toggle("show");
    });
    close2.addEventListener('click', () => {
        modal2.classList.toggle("show");
    });

    showModal3.addEventListener("click", () => {
        modal3.classList.toggle("show");
    });
    close3.addEventListener('click', () => {
        modal3.classList.toggle("show");
    });

    showModal4.addEventListener("click", () => {
        modal4.classList.toggle("show");
    });
    close4.addEventListener('click', () => {
        modal4.classList.toggle("show");
    });

};


/*问答 */
var ul = document.getElementById("QA-ul");
var ulChildren = ul.children;
for (var i = 0; i < ulChildren.length; i++) {
    ulChildren[i].onclick = function (event) {
        event = event || window.event;
        if (event.target.className == "QA-a") {
            if (this.children[1].style.display == "none") {
                this.children[1].style.display = "block";
            } else {
                this.children[1].style.display = "none";
            }
        };
    };
};
/*复制邮箱链接 */
var btn = document.getElementById("email");
var content = "newthread_geek@outlook.com";
btn.onclick = function copyToClip() {
    var aux = document.createElement("input");
    aux.setAttribute("value", content);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("Geek的邮箱已经复制到剪贴板了！♡(*´∀｀*)人(*´∀｀*)♡");
};

const pointer2 = document.getElementById("pointer2");
const homepage = document.getElementById("homepage");
pointer2.onclick = function () {
    homepage.scrollIntoView({ behavior: "smooth" });
};


const intro = document.getElementById("introplace");
const aintro = document.getElementById("introduction");
aintro.onclick = function(){
    intro.scrollIntoView({behavior: "smooth"});
};

const about = document.getElementById("aboutplace");
const aabout = document.getElementById("about");
aabout.onclick = function(){
    about.scrollIntoView({behavior: "smooth"});
};

const contact = document.getElementById("contactplace");
const acontact = document.getElementById("contact");
acontact.onclick = function(){
    contact.scrollIntoView({behavior: "smooth"});
};

const qa = document.getElementById("qaplace");
const aqa = document.getElementById("qa");
aqa.onclick = function(){
    qa.scrollIntoView({behavior: "smooth"});
};



