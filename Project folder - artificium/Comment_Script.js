function Comment_script(){
    let comment = document.getElementById("comment").value;//get the value from comment
    if (comment != ""){//check if the commet has a value in it
        alert("comment Posted")
    }
    else {
        alert("invalid Comment")
    }
}