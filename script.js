function validateForm(){
    var a = checkPassLength();
    var b = checkBirthYear();
    if(a && b){
        document.getElementById('congrats').innerHTML = "Hooray! your account has been successfully created.";
    }
}

function checkPassLength(){
    var value = document.getElementById('password').value;
    if(value.length < 8){
        document.getElementById('passWarning').innerHTML = "Password must be at least 8 characters.";
        return false;
    }
    document.getElementById('passWarning').innerHTML = "";
    return true;
}

function checkBirthYear(){
    var date = document.getElementById('date').value;
    var d = date.split("-")
    if(2023-d[0] <= 21){
        document.getElementById('birthWarning').innerHTML = "Minors are not allowed!";
        return false;
    }
    document.getElementById('birthWarning').innerHTML = "";
    return true;
}

function eraseMessage(){
    document.getElementById('congrats').innerHTML = "";
    document.getElementById('passWarning').innerHTML = "";
    document.getElementById('birthWarning').innerHTML = "";
}