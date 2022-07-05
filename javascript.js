let name = prompt("Who's there?");
if ( name === "Admin") {
    let password = prompt("What is your password?");
    if (password === "TheMaster" ) { 
        alert("Welcome back master.");
    }
    else if (password == "" || password == null){
        alert("Cancelled");
    }
    else{
        alert("Wrong password.")
    }
}
else if (name == "" ||  name == null){
    alert("Cancelled");
}

else{
    alert("I dont know you my G.")
}
