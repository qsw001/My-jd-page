var items = document.querySelectorAll(".item");
var left = document.getElementById("left-button");
var right = document.getElementById("right-button");
var all = document.getElementById("wrap");
var index = 0;
var time = 0;

var clearActive = function(){
    for(i = 0; i < items.length; i++){
        items[i].className = "item"
    }
}

var goIndex = function(){
    clearActive();
    items[index].className = "item-active";
}

var goLeft = function(){
    if(index < 0){
        index = items.length - 1;
    }else{
        index--;
    }
    goIndex();
}

var goRight = function(){
    if(index < items.length - 1){
        index++;
    }else{
        index = 0
    }
    goIndex();
}

left.addEventListener("click",function(){
    goLeft();
    time = 0;
})

right.addEventListener("click",function(){
    goRight();
    time = 0;
})

var timer;
function play(){
    timer = setInterval(() => {
        time++;
        if(time == 30){
            goRight();
            time = 0;
        }
    },100)
}

all.onmousemove = function(){
    clearInterval(timer);
}

all.onmouseleave = function(){
    play();
}

play();
