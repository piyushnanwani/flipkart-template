
function myfunction()
{
    // var name = ("container", "uname");
    // alert("Please enter your name.");

    var name = document.getElementById('uname');
    // var name = document.getElement("form.container.uname")

    var email = document.getElementById("email");
    var password = document.getElementById("password");


    if(name.value == "")
    {
        alert("Please enter your name.");
        name.focus();
        return false;
    }

    if(email.value== "")
    {
        alert("Please enter your email.");
        email.focus();
        return false;
    }

    if(password.value== "")
    {
        alert("Please enter your password.");
        password.focus();
        return false;
    }
       
    return true;
}
