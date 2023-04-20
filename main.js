import * as TWEEN from "/node_modules/@tweenjs/tween.js/dist/tween.esm.js"
class app{
    constructor(){
        this.setupButtonEvent();
        requestAnimationFrame(this.render.bind(this));
    }
    setupButtonEvent(){
        this.profileBtn = document.querySelector("#profile-btn");
        this.interdesignBtn = document.querySelector("#interdesign-btn");
        this.webappBtn = document.querySelector("#webapp-btn");
        this.articleBtn = document.querySelector("#article-btn");

        const showProfile = event=>{
            this.circleAnimation(event.clientX, event.clientY, "profile")
            
        }
        const showInterdesign = event=>{
            this.circleAnimation(event.clientX, event.clientY, "interdesign")
        }

        const showWebapp = event=>{
            this.circleAnimation(event.clientX, event.clientY, "webapp")
        }
        const showArticle = event=>{
            this.circleAnimation(event.clientX, event.clientY, "article")
        }


        document.querySelector(".logo").addEventListener("click", ()=>{location.reload()})
        this.profileBtn.addEventListener("click", showProfile, false);
        this.interdesignBtn.addEventListener("click", showInterdesign, false)
        this.webappBtn.addEventListener("click", showWebapp, false)
        this.articleBtn.addEventListener("click", showArticle, false)
        
    }
    circleAnimation(x,y,btnType){
        console.log(x,y)
        const circle = document.createElement('div');
        
        circle.id = "circle1"
        document.body.appendChild(circle);
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
        console.log(circle.style.left)
        console.log(circle.style.top)
        let themeColor;
        switch(btnType){
            case "profile":
                themeColor = "#738e5c";
                break;
            case "interdesign":
                themeColor = "#e85913";
                break;
            case "webapp":
                themeColor = "#f0c14a";
                break;
            case "article":
                themeColor = "#8e6197";
                break;
        }
        circle.style.backgroundColor = themeColor
        circle.style.transform = 'translate(-50%, -50%)';

        const maxRad = Math.hypot(window.innerWidth, window.innerHeight) * 2


        const content = document.createElement('div');
        content.classList.add("content")

        const showContent = new TWEEN.Tween({opacity:0})
        .to({opacity:1},500)
        .onUpdate(object=>{
            content.style.opacity = object.opacity
        })


        new TWEEN.Tween({width: 0, height: 0})
        .to({width: maxRad, height: maxRad}, 700)
        .onUpdate(function (object) {

            circle.style.width = object.width + "px";
            circle.style.height = object.height + "px";

        })
        .onComplete(()=>{

            circle.remove();
            const newWindow = document.createElement('div');
            newWindow.classList.add("btn-window")
            document.body.appendChild(newWindow);
            newWindow.style.backgroundColor = themeColor
            newWindow.appendChild(content);
            content.innerHTML = this.contentLoad(btnType)
            this.setEvent(btnType)

        })
        .chain(showContent)
        .start();


        
        
    }
    contentLoad(btnType){
        switch(btnType){
            case "profile":
                return `
                <div class="content-title">
                <span class="material-symbols-outlined" style ="font-size : 1em" id="backward">
                    arrow_back_ios
                </span>
                소개</div>
            <div class="content-area">
                <div class="profile-name">
                    강효민
                </div>
                <div class="profile-birth">
                    2002.04.14
                </div>
                <div class="profile-edu">
                    서강대학교 2학기 휴학
                </div>
                <div class="profile-email">miamiq0000@gmail.com</div>
            </div>
            <div class ="content-area">
                <div class ="small-title">
                    할 수 있는 것
                </div>
                
                <div class="profile-knowlege" style="line-height: 1.7em;">
                    <span class = "round-card">HTML5</span>
                    <span class = "round-card">CSS3</span>
                    <span class = "round-card">JavaScript</span>
                    <span class = "round-card">Bootstrap5</span>
                    <span class = "round-card">Matter.js</span>
                    <span class = "round-card">Three.js</span>
                    <span class = "round-card">Ammo.js</span>
                    <span class = "round-card">Tween.js</span>
                    <span class = "round-card">Spline</span>
                </div>
            </div>
            <div class ="content-area">
                <div class ="small-title">
                    알고 있는 것
                </div>
                
                <div class="profile-knowlege" style="line-height: 1.7em;">
                    <span class = "round-card">C</span>
                    <span class = "round-card">Python</span>
                    <span class = "round-card">Java</span>
                    <span class = "round-card">Calculus</span>
                    <span class = "round-card">Linear Algebra</span>
                    <span class = "round-card">Number Theory</span>
                    <span class = "round-card">combinatorial game theory</span>
                    <span class = "round-card">Classical Mechanics</span>
                </div>
            </div>
            <div class ="content-area">
                <div class ="small-title">
                    관심사
                </div>
                
                <div class="profile-knowlege" style="line-height: 1.7em;">
                    <span class = "round-card">웹 퍼블리싱</span>
                    <span class = "round-card">웹 디자인</span>
                    <span class = "round-card">인터랙션 디자인</span>
                    <span class = "round-card">3D 그래픽</span>
                    <span class = "round-card">게임 인공지능</span>
                    <span class = "round-card">XSS</span>
                </div>
            </div>
                `
                
            case "interdesign":
                return `

                `
            case "webapp":
                return `

                `
            case "article":
                return `

                `
        }
    }
    setEvent(btnType){
        document.querySelector("#backward").addEventListener('click', ()=>{
            document.querySelector(".btn-window").remove()
        }, false)
        switch(btnType){
            case "profile":
                return;
                
            case "interdesign":
                return;
            case "webapp":
                return;
            case "article":
                return;
        }
        
    }

    

    render() {
		TWEEN.update();
        
		requestAnimationFrame(this.render.bind(this));
        
	}
    
}

window.onload = function(){
    new app();
}