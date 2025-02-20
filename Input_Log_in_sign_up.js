function Log_in(){
    let Username = document.getElementById("Username1").value;//get the variable for each value
    let Password = document.getElementById("Password1").value;
    if (Username != "" && Password != "")// check if both are filled in
    {
        window.open("Account_Profile_Write_Post.html",self)
        window.close()
    }
    else if (Username == "" && Password == "")//check if both are blank
    {
        alert("need to fill in username and password")
    }
    else if(Username == "") //check if username is blank
    {
        alert("Username isn't filled in")
    }
    else if(Password == "") // check if password is blank
    {
        alert("password isn't filled in")
    }
}

function Sign_up(){
    let Username = document.getElementById("Username").value;//get the variable
    let Email = document.getElementById("Email").value;
    let Password = document.getElementById("Password").value;
    let Reconfirm_Password = document.getElementById("Reconfirm_Password").value;
    let Accept_term_and_conditions = document.getElementById("Accept_term_and_conditions").checked;
    let mailing_list = document.getElementById("mailing_list").checked;
    if (Username != "" && Email != "" && Password != "" && Reconfirm_Password != null &&
        Accept_term_and_conditions == true && Reconfirm_Password == Password)//check if they have filled out everthing correctly
    {
        window.open("Account_Profile_Write_Post.html",self)
        window.close()
    }
    else if (Username == "" && Email == "" && Password == "" && Reconfirm_Password == "" &&
        Accept_term_and_conditions == false)//check if everythink is blank
    {
        alert("need to fill out account information")
    }
    else if(Username == "")//check to find which element is missing a value
    {
        alert("need to fill in username")
    }
    else if(Email == "")
    {
        alert("need to fill in Email")
    }
    else if(Password == "")
    {
        alert("need to fill in password")
    }
    else if(Reconfirm_Password == "")
    {
        alert("need to fill in Reconfirm Password")
    }
    else if(Reconfirm_Password != Password)
    {
        alert("Password was not the same")
    }
    else if(Accept_term_and_conditions == false)
    {
        alert("need to accept terms and conditions")
    }
}
