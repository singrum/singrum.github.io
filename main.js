import * as TWEEN from "/node_modules/@tweenjs/tween.js/dist/tween.esm.js"
class app{
    constructor(){
        history.pushState({}, "", new URL(location));
        // this.queryStringSearch();
        this.setupButtonEvent();
        requestAnimationFrame(this.render.bind(this));

    }
    queryStringSearch(){
        const urlParams = new URLSearchParams(window.location.search);
        const state = urlParams.get('state');
        console.log(state)
        if(!state){
        }
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
        
        const circle = document.createElement('div');
        
        circle.id = "circle1"
        document.body.appendChild(circle);
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';

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
        content.classList.add("content", "scroll")

        const showContent = new TWEEN.Tween({opacity:0})
        .to({opacity:1},500)
        .onUpdate(object=>{
            content.style.opacity = object.opacity
        })
        .onComplete(()=>{

            const url = new URL(location);
            url.searchParams.set("menu", btnType);
            history.pushState({menu : btnType}, "", url);
        
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
                <span class="material-symbols-outlined" style ="font-size : 1em" id="backward" onclick="document.querySelector('.btn-window').remove()">
                    arrow_back_ios
                </span>
                소개</div>
            <div class="content-area">
                <div class="profile-about-grid">
                    <div class ="col-1">이름</div>
                    <div class="profile-name">
                        강효민
                    </div>
                    <div class ="col-1">생일</div>
                    <div class="profile-birth">
                        2002.04.14
                    </div>
                    <div class ="col-1">학력</div>
                    <div class="profile-edu">
                        서강대학교 2학기 휴학
                    </div>
                    <div class ="col-1">이메일</div>
                    <div class="profile-email">miamiq0000@gmail.com</div>
                </div>
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
                    <span class = "round-card">Discrete Mathematics</span>
                    <span class = "round-card">Number Theory</span>
                    <span class = "round-card">combinatorial game theory</span>
                    <span class = "round-card">Classical Mechanics</span>
                </div>
            </div>
            <div class ="content-area">
                <div class ="small-title">
                    관심 있는 것
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
                            <div class="content-title">
                <span class="material-symbols-outlined"  id="backward" style ="font-size : 1em" onclick="document.querySelector('.btn-window').remove()">
                    arrow_back_ios
                    </span>
                    인터랙션 디자인</div>
            <div class="content-area">
                <div class="interdesign-area">
                    <span class="interdesign-image" style = "background-image : url('src/interdesign/candy_factory.jpg')" onclick="window.open('https://singrum.github.io/ammojsnote/notes/note08_candy_factory', '_blank')"'></span>
                    <span class="interdesign-image" style = "background-image : url('src/interdesign/dandelion.jpg')" onclick="window.open('https://singrum.github.io/threejsnote/notes/note30_dandelion', '_blank')"></span>
                    <span class="interdesign-image" style = "background-image : url('src/interdesign/domino_simulator.jpg')" onclick="window.open('https://singrum.github.io/ammojsnote/notes/note03_domino_simulator', '_blank')"></span>
                    <span class="interdesign-image" style = "background-image : url('src/interdesign/growing_block.jpg')" onclick="window.open('https://singrum.github.io/growingblock2/', '_blank')"></span>
                    <span class="interdesign-image" style = "background-image : url('src/interdesign/fractal_tree.jpg')" onclick="window.open('https://singrum.github.io/threejsnote/notes/note19_tree', '_blank')"></span>
                    <span class="interdesign-image" style = "background-image : url('src/interdesign/minecraft_bee.jpg')" onclick="window.open('https://singrum.github.io/ammojsnote/notes/note07_mc_bee', '_blank')"></span>
                    <span class="interdesign-image" style = "background-image : url('src/interdesign/morphing_globe.jpg')" onclick="window.open('https://singrum.github.io/threejsnote/notes/note18_globe', '_blank')"></span>
                    <span class="interdesign-image" style = "background-image : url('src/interdesign/nottetris_clone.jpg')" onclick="window.open('https://singrum.github.io/not-tetris-2-clone', '_blank')"></span>
                    <span class="interdesign-image" style = "background-image : url('src/interdesign/patrick_with_horse.jpg')" onclick="window.open('https://singrum.github.io/threejsnote/notes/note20_patrick_with_horse', '_blank')"></span>
                    <span class="interdesign-image" style = "background-image : url('src/interdesign/pixelation.jpg')" onclick="window.open('https://singrum.github.io/threejsnote/notes/note25_pixel', '_blank')"></span>
                    <span class="interdesign-image" style = "background-image : url('src/interdesign/wave.jpg')" onclick="window.open('https://singrum.github.io/threejsnote/notes/note24_wave1', '_blank')"></span>
    
                </div>    
            </div>
                `
            case "webapp":
                return `
                <div class="content-title" style="color : #8e6197">
                <span class="material-symbols-outlined" id="backward" style ="font-size : 1em" onclick="document.querySelector('.btn-window').remove()">
                    arrow_back_ios
                    </span>
                    웹 앱</div>
            <div class="content-area">
                <div class="webapp-area">
                    <span class="webapp-image" style = "background-image : url('src/webapp/ggeugle.jpg')" onclick="window.open('https://singrum.github.io/ggeugle', '_blank')"'></span>
                    <span class="webapp-image" style = "background-image : url('src/webapp/lifedori.jpg')" onclick="window.open('https://singrum.github.io/lifedori', '_blank')"'></span>
    
                </div>    
            </div>
            
                `
            case "article":
                return `
                <div class="content-title" style="color : #f0c14a">
                <span class="material-symbols-outlined" id="backward" style ="font-size : 1em" onclick="document.querySelector('.btn-window').remove()">arrow_back_ios</span>글</div>
            <div class="content-area scroll">
                <div class="article-area">
                    <div class="article-container">
                        <span class="article-image">
                        </span>
                        <span class="article-title">
                            준비중..
                        </span>
                    </div>
                    <div class="article-container">
                        <span class="article-image">
                        </span>
                        <span class="article-title">
                            준비중..
                        </span>
                    </div>
                    <div class="article-container">
                        <span class="article-image">
                        </span>
                        <span class="article-title">
                            준비중..
                        </span>
                    </div>
                </div>
                
     
            </div>
                `
        }
    }
    setEvent(btnType){
        const removeNewWindow = ()=>{
            document.querySelector(".btn-window").remove()
        }
        

        window.addEventListener("popstate", removeNewWindow,false)
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