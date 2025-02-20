let Title_Input;//initialise variables
let Post_Image;
let Post;
const submitButton = document.getElementById("postbutton");// the button
submitButton.addEventListener("click",create_Post)
var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;//all the alowed file type
function create_Post(){
    Title_Input = document.getElementById("Title_Input").value;//get the value from the screen
    Post_Image = document.getElementById("Post_Image").value;
    Post = document.getElementById("Post").value;
    const submitButton = document.getElementById("postbutton");
    submitButton.addEventListener("click",create_Post)
    if (Title_Input != "" && Post != "" && allowedExtensions.exec(Post_Image)){//check if input is valid
        alert("Valid post");
    }
    else{
        alert("Invalid post");
    }
}