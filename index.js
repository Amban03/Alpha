var leftOffset = 0;

var moveHeading = function () {
        $("#title").offset({left: leftOffset});
        leftOffset++;
    
    if (leftOffset > 420) {
            leftOffset = 0;
    }
};

setInterval(moveHeading, 30);

const audio = new Audio();
      audio.src = "audio/Click.mp3";  

let task = [];
var clicks = 0;

function addTask(){
    let template = task.map(task => "<li>" + task + "</li>").join("\n");
    document.querySelector("ol").innerHTML = template;
}

addTask();

let btnAdd = document.querySelector("button");
let input = document.querySelector("input");

btnAdd.addEventListener("click", () => {
 task.push(input.value);
 input.value = "";
 addTask();
 clicks++;
 if (clicks === 3) {
     $("#btn").fadeOut(100);
     $("body").append("<footer>" + "Sic Parvis Magna" + "</footer>" )
     $("body").append("<q>" + "Thus great things from small things" + "</q>" )
     $("body").append("<p>" + " -Sir Francis Drake" + "</p>" )
     $("footer").fadeOut(3000).fadeIn(3000);
     $("q").fadeOut(6000).fadeIn(6000);
     $("p").fadeOut(9000).fadeIn(9000);
    }
});


