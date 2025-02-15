const btnDarkMode = document.getElementById("DarkMode");//inititalise variable
let main = document.getElementById("main");
let count = 0;
btnDarkMode.addEventListener("click", ChangeColour);//initialise event
btnDarkMode.addEventListener('mouseenter', addHighlight_DarkMode);
btnDarkMode.addEventListener('mouseleave', removeHighlight_DarkMode);

function ChangeColour(){//function to chainge colour of page
    let main = document.getElementById("main");
    console.log("Change Colour");
    if (count == 1){
        main.style.color = "#ffffff";
        main.style.background = "#121212";
        count = 0;
    }
    else{
        main.style.color = "#000000";
        main.style.background = "#ffffff";
        count = 1;
    }
    
}

function addHighlight_DarkMode(){//change colour of the button when hovered over
    console.log("addHighlight");
    btnDarkMode.style.backgroundColor = "red";
}
function removeHighlight_DarkMode(){//change colour of the button when no longer hovered over
    console.log("removeHighlight");
    btnDarkMode.style.backgroundColor = "#2c43ba";
}