var Un,Pass;

function un(){
    Un = document.getElementById("username").value;
}

function ps(){
    Pass = document.getElementById("password").value;
}

function localstorage() { 

    localStorage.setItem('Usern', Un);
    localStorage.setItem('Passw', Pass);
    if (Un==undefined||Pass==undefined){
        alert("poresh kon");
    }
    else{
        window.open("https://www.google.com");
    }
}
