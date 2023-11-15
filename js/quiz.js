//generate the numbers for the quiz
function randInt(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

var M = randInt(300, 600);
var N = randInt(100, M);
var K = randInt(1, 10);
console.log(M, N, K);

//put the random numbers into the HTML
document.getElementById("s1").textContent = M.toString();
document.getElementById("s2").textContent = N.toString();
document.getElementById("s3").textContent = K.toString();

//generate correct answer
document.querySelector('[value="4"]').nextSibling.nodeValue= M.toString() + "-" + N.toString() + "+" + K.toString();
document.querySelector('[value="3"]').nextSibling.nodeValue= M.toString() + "-" + N.toString() + "-" + K.toString();
document.querySelector('[value="2"]').nextSibling.nodeValue= M.toString() + "-" + (N-K).toString();
document.querySelector('[value="1"]').nextSibling.nodeValue= M.toString() + "-" + (N+K).toString();

//Action -- click and change style
function changeStyle(e){
    e.preventDefault(); //prevent the default action

    var classname = this.getAttribute("class");
    //change the style of this element
    if(classname=="answer"){
        this.setAttribute("class", "answer selected");
    }
    else{
        this.setAttribute("class", "answer");
    }

}

for (var i =0;i<4;i++){
    document.getElementsByClassName("answer")[i].addEventListener("click", changeStyle, false);
}