const btnLatest = document.getElementById("Latest");//initialise variable
const btnTop = document.getElementById("Top");
let TITLE = document.getElementById("TITLE");
let AtricleTitle_1 = document.getElementById("H1_Article");
let AtricleTitle_2 = document.getElementById("H2_Article");
let AtricleTitle_3 = document.getElementById("H3_Article");
let AtricleTitle_4 = document.getElementById("H4_Article");
let ArticleImg_1 = document.getElementById("Article_Image_Test_1");
let ArticleImg_2 = document.getElementById("Article_Image_Test_2");
let ArticleImg_3 = document.getElementById("Article_Image_Test_3");
let ArticleImg_4 = document.getElementById("Article_Image_Test_4");
let ArticleText_1 = document.getElementById("Article_txt_1");
let ArticleText_2 = document.getElementById("Article_txt_2");
let ArticleText_3 = document.getElementById("Article_txt_3");
let ArticleText_4 = document.getElementById("Article_txt_4");

btnLatest.addEventListener("click", loadLatest);//initilise variable
btnLatest.addEventListener('mouseenter', addHighlight_Latest);
btnLatest.addEventListener('mouseleave', removeHighlight_Latest);
btnTop.addEventListener("click", loadTop);
btnTop.addEventListener('mouseenter', addHighlight_Top);
btnTop.addEventListener('mouseleave', removeHighlight_Top);

function loadLatest(){//load the lates post
    console.log("Load_Latest_stories");
    TITLE.innerHTML = "<h1>Latest Post's</h1>";
    AtricleTitle_1.innerText = "Latest Title";//change text
    AtricleTitle_2.innerText = "Latest Title";
    AtricleTitle_3.innerText = "Latest Title";
    AtricleTitle_4.innerText = "Latest Title";
    ArticleImg_1.setAttribute("src","img2.jpg")//changes img
    ArticleImg_2.setAttribute("src","img3.jpg")
    ArticleImg_3.setAttribute("src","img2.jpg")
    ArticleImg_4.setAttribute("src","img1.jpg")
    ArticleImg_1.setAttribute("alt","latest img")
    ArticleImg_2.setAttribute("alt","latest img")
    ArticleImg_3.setAttribute("alt","latest img")
    ArticleImg_4.setAttribute("alt","latest img")
}
function loadTop(){//load the top post
    console.log("Load_Top_stories");
    TITLE.innerHTML = "<h1>Top Post's</h1>";
    AtricleTitle_1.innerText = "Top Title"//change text
    AtricleTitle_2.innerText = "Top Title"
    AtricleTitle_3.innerText = "Top Title"
    AtricleTitle_4.innerText = "Top Title"
    ArticleImg_1.setAttribute("src","img3.jpg")//changes img
    ArticleImg_2.setAttribute("src","img2.jpg")
    ArticleImg_3.setAttribute("src","img1.jpg")
    ArticleImg_4.setAttribute("src","img3.jpg")
    ArticleImg_1.setAttribute("alt","top img")
    ArticleImg_2.setAttribute("alt","top img")
    ArticleImg_3.setAttribute("alt","top img")
    ArticleImg_4.setAttribute("alt","top img")
}
function addHighlight_Latest(){//addd and remove hightlight when the button is hovered over
    console.log("addHighlight");
    btnLatest.style.backgroundColor = "red";
}
function removeHighlight_Latest(){
    console.log("removeHighlight");
    btnLatest.style.backgroundColor = "#2c43ba";
}
function addHighlight_Top(){
    console.log("addHighlight");
    btnTop.style.backgroundColor = "red";
}

function removeHighlight_Top(){
    console.log("removeHighlight");
    btnTop.style.backgroundColor = "#2c43ba";
}