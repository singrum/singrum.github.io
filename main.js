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



        this.profileBtn.addEventListener("click", showProfile);
        this.interdesignBtn.addEventListener("click", showInterdesign)
        this.webappBtn.addEventListener("click", showWebapp)
        this.articleBtn.addEventListener("click", showArticle)
        
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
        .to({opacity:1},5000)
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
            content.innerHTML

        })
        .chain(showContent)
        .start();


        
        
    }

    

    render() {
		TWEEN.update();
        
		requestAnimationFrame(this.render.bind(this));
        
	}
    
}

window.onload = function(){
    new app();
}