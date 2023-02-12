var dataBase = [
    {
        userName : "Omkar",
        password : "topsec"
    },
    {
        userName : "Charles",
        password : "abc123"
    },
    {
        userName : "Sally",
        password : "xyz123"
    }
];

var newsFeed = [
    {
        user : "Sally",
        timeline : "Woke up late today !!"
    },
    {
        user : "Omkar",
        timeline : "Turkey is having earthquake ??"
    },
    {
        user : "Charles",
        timeline : "Javascript is easy !!"
    }
];

var userName = prompt("Add userName");
var password = prompt("Add password");

function signIn(user, pass){
    for (i =0; i < dataBase.length; i++){
        if(dataBase[i].userName === user 
            && dataBase[i].password === pass){
                return true;
            }
        else{
            return false;
        }
    }
}

function showFeed(userName,password){
    if(signIn(userName,password)){
        console.log(newsFeed);
    }
    else{
        alert("Wrong userName or Password")
    }
}

showFeed(userName,password);