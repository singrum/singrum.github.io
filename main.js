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
            this.circleAnimation(event)
        }



        this.profileBtn.addEventListener("click", showProfile);
        // this.interdesignBtn.addEventListener("click", showInterdesign)
        // this.webappBtn.addEventListener("click", showWebapp)
        // this.articleBtn.addEventListener("click", showArticle)
        
    }
    circleAnimation(event){
        let circle = document.createElement('div');
        
        circle.id = "circle1"
        document.body.appendChild(circle);
        console.log(event)
        let x = event.clientX;
        let y = event.clientY;
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';

        const maxRad = Math.max(window.innerWidth, window.innerHeight) * 2
        new TWEEN.Tween({width: 0, height: 0})
        .to({width: maxRad, height: maxRad}, 500)
        .onUpdate(function (object) {
            
            circle.style.width = object.width + "px";
            circle.style.height = object.height + "px";
        })
        .onComplete(()=>{
            circle.remove()
            
        })
        .start();
        circle.style.transform = 'translate(-50%, -50%)';
        
    }

    render() {
		TWEEN.update();
        
		requestAnimationFrame(this.render.bind(this));
        
	}
    
}

window.onload = function(){
    new app();
}