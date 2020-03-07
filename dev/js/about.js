window.addEventListener('load',function(){ // wait for document ready

    var controller = new ScrollMagic.Controller();

    var horizontalSlide = new TimelineMax()
        // animate panels
        .to("#js-slideContainer", 1, {
            x: "-20%"
        })
        .to("#js-slideContainer", 1, {
            x: "-40%"
        })
        .to("#js-slideContainer", 1, {
            x: "-60%"
        })
        .to("#js-slideContainer", 1, {
            x: "-80%"
        })


    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#js-wrapper",
        triggerHook: "onLeave",
        duration: "400%"
    })
        .setPin("#js-wrapper")
        .setTween(horizontalSlide)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);



});






//

//開發人員
var works = [
    {
        title: "思甄",
        description: "FOCUS",
        cover: "./imges/illust3615-281x260.png",
        src: "http://140.115.236.71/demo-personal/DD105/web/T1901598/FOCUS/"
    },
    {
        title: "俊富",
        description: "雪冰",
        cover: "./imges/illust3615-281x260.png",
        src: "http://140.115.236.71/demo-personal/DD105/web/T1901607/SnowIce.0107/"
    },
    {
        title: "珮珊",
        description: "Eye塔羅",
        cover: "./imges/illust3615-281x260.png",
        src: "http://140.115.236.71/demo-personal/DD105/web/T1901609/tarot_green/"
    },
    {
        title: "家駿",
        description: "Cafe'Pet",
        cover: "./imges/illust3615-281x260.png",
        src: "http://140.115.236.71/demo-personal/DD105/web/T1901611/PersonalSite/"
    },
    {
        title: "政儒",
        description: "Gin Bar",
        cover: "./imges/illust3615-281x260.png",
        src: "http://140.115.236.71/demo-personal/DD105/web/T1901612/"
    },
    {
        title: "書宜",
        description: "Ocean Ville",
        cover: "./imges/illust3615-281x260.png",
        src: "http://140.115.236.71/demo-personal/DD105/web/T1901620/myProject/"
    }
];

new Vue({
    el: "#app",
    data: {
        now_index: 0,
        works: works,
        span: 962
    },
    computed: {
        computed_left() {
            var result = {
                left: -this.now_index * this.span + "px"
            };
            return result;
        }
    },
    methods: {
        delta(d) {
            this.now_index = (this.now_index + d + this.works.length) % this.works.length;
        },
        bg_css(url) {
            return "background-image:url(" + url + ")";
        }
    }
});


//Tao 動畫

// TweenMax.to("img.Tao", 3, {y: -50},);

TweenMax.fromTo('img.Tao', 1,
    {
        y: 30
    }, {
    y: -30,
    // ease: Elastic.easeOut,
    repeat: -1,
    yoyo: true,
    // scale: 0.5, 


});

TweenMax.fromTo('.section_2', 5,
    {
        y: 30
    }, {
    y: -100,


});

//水果籃子
TweenMax.fromTo('.fruits', 5,
    {
        y: -200
    }, {
    y: 20,
    // ease: Elastic.easeOut,
    // repeat:-1,
    yoyo: true,
    scale: 1.2,


});


//蘋果樹
TweenMax.fromTo('.apple_1', 5,
    {
        x: 0,
        y: 0,
        alpha: 0.5,
    }, {
    x: 500,
    y: 280,
    alpha: 0.8,
    // ease: Elastic.easeOut,
    repeat: -1,
    // yoyo:true,



});