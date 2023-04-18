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
            this.circleAnimation(event.clientX, event.clientY, "#738e5c")
            
        }
        const showInterdesign = event=>{
            this.circleAnimation(event.clientX, event.clientY, "#e85913")
        }

        const showWebapp = event=>{
            this.circleAnimation(event.clientX, event.clientY, "#f0c14a")
        }
        const showArticle = event=>{
            this.circleAnimation(event.clientX, event.clientY, "#8e6197")
        }



        this.profileBtn.addEventListener("click", showProfile);
        this.interdesignBtn.addEventListener("click", showInterdesign)
        this.webappBtn.addEventListener("click", showWebapp)
        this.articleBtn.addEventListener("click", showArticle)
        
    }
    circleAnimation(x,y,color){
        const circle = document.createElement('div');
        
        circle.id = "circle1"
        document.body.appendChild(circle);
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
        circle.style.backgroundColor = color;
        circle.style.transform = 'translate(-50%, -50%)';
        const maxRad = Math.hypot(window.innerWidth, window.innerHeight) * 2
        return new TWEEN.Tween({width: 0, height: 0})
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
            newWindow.style.backgroundColor = color

        })
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