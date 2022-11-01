
document.getElementById("foot01").innerHTML =
"&copy;  " + new Date().getFullYear() + " Selling Books. All rights reserved.";


document.getElementById("header1").innerHTML =
"<ul id='menu'>" +
"<li><a href='Books.html' >Books</a></li>" +
"<li><a href='Study.html'>Study</a></li>" +
"<li><a href='Carrer.html' >Career</a></li>" +
"<li><a href='Life.html'>Life</a></li>" +
"<label for='text'><hidden>For Educators</hidden></label>"+
"<vl>"+
"<li><a href='Helps.html' style='padding-left30px'>Helps</a></li>" +
"<vl>"+
"<li><a href='SignIn.html'>Sign in</a></li>" +
"</ul>"; 


function validateForm1(){
    var x = document.forms["search"]["intl"].value;
    var x2 = document.forms["search"]["srn"].value;
    var x3 = document.forms["search"]["std"].value;
    if((x==null|| x=="" ))
    {
        alert("Input spaces must be filled out.");
        return false;
    }
    else if((x2==null || x2=="")){
        alert("Input spaces must be filled out.");
        return false;
    }
    else if((x3==null || x3=="")){
        alert("Input spaces must be filled out.");
        return false;
    }
}

function validateForm2(){
    var v1 = document.forms["myF"]["typ"].value;
    var v2 = document.forms["myF"]["stdNo"].value;
    var v3 = document.forms["myF"]["password"].value;
    if(v1==null || v1==""){
        alert("Information must be filled out");
        return false;
    }
    else if(v2==null || v2==""){
        alert("Information must be filled out");
        return false;
    }
    else if(v3==null || v3==""){
        alert("Information must be filled out");
        return false;
    }
}

function validateForm3(){
    var v1 = document.forms["Yes"]["stdNo"].value;
    var v2 = document.forms["Yes"]["Npaswd"].value;
    var v3 = document.forms["Yes"]["Cpaswd"].value;
    if(v1==null || v1==""){
        alert("Information must be filled out");
        return false;
    }
    else if(v2==null || v2==""){
        alert("Information must be filled out");
        return false;
    }
    else if(v3==null || v3==""){
        alert("Information must be filled out");
        return false;
    }
}

function validateForm4(){
    var v1 = document.forms["Change"]["old"].value;
    var v2 = document.forms["Change"]["new"].value;
    var v3 = document.forms["Change"]["con"].value;
    if(v1==null || v1==""){
        alert("Passwords must be filled out");
        return false;
    }
    else if(v2==null || v2==""){
        alert("Passwords must be filled out");
        return false;
    }
    else if(v3==null || v3==""){
        alert("Passwords must be filled out");
        return false;
    }
}

