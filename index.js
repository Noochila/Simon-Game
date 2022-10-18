var pattern = [];
var k = 1;
var collection = [];
var count = 0;
var st;
function sound(s) {
    var music = new Audio(' s + '.mp3');
    $(".btn." + s).addClass("pressed");
    setTimeout(function () {
        $(".btn." + s).removeClass("pressed");

    }, 100)
    music.play();
}
function demopattern() {
    var create = Math.floor(Math.random() * 4) + 1;
    switch (create) {
        case 1:
            {
                pattern.push("red");
                sound("red");
                console.log(pattern);
                break;
            }

        case 2:
            {
                pattern.push("blue");
                sound("blue")
                console.log(pattern);
                break;
            }

        case 3:
            {
                pattern.push("green");
                sound("green");
                console.log(pattern);
                break;
            }

        case 4:
            {
                pattern.push("yellow");
                sound("yellow")
                console.log(pattern);
                break;
            }

    }

}
$(document).keypress(function (event) {

    if (event.key == "a") {
        $("h1").text("Level 1");
        demopattern();
    }
})


$(".btn").click(function (event) {
    
    var idname = event.currentTarget.getAttribute("id");
    sound(idname);
    collection.push(idname);
    console.log(collection);
   check(); 

})

function check() {

    for (var i = 0; i < collection.length; i++) {
        if (pattern[i] != collection[i]) {

            $("h1").text("Game-over, press A key to restart");
            pattern.length = 0;
            collection.length = 0;
            k = 0;
            $("body").addClass("game-over");
            setTimeout(function () {
                $("body.game-over").removeClass("game-over");
            }, 100);
            var music = new Audio('wrong.mp3');
            music.play();
        

        }
     

       
    }
    if(collection.length==pattern.length && i==collection.length)
    {
        setTimeout(demopattern,1500);
        $("h1").text("Level "+ ++k)
        collection.length=0;

    }
 


}








