function User(name, pass){

   // Add object properties like this
   this.name = name;
   this.pass = pass;
   this.follows=[];
    this.follow=function (name) {
        this.follows.push(name)
    };
};

var users = [];
users.push(new User("Luis", 123));
//users[0].follow(Leire);
users[0].follow("Leire");


var existsUser = function (user) {
    for (var i=0;i<users.length;i++) {
            if (user.name===users[i].name)
                return true;
            else return false;
    }    
};

var register= function (user) {
    if (!existsUser(user))
    users.push(user);
    };


var showFollows = function(name) {
    for (var i=0;i<users.length;i++)
        if (users[i].name===name)
            return users[i].follows;
};

var store = function() {
    localStorage.setItem("users",JSON.stringify(users));
}

var showFollowers = function(name) {
    var followers=[];
    for (var i=0;i<users.length;i++)
        for (var j=0;j<users[i].follows.length;j++)
        if (users[i].follows[j]===name)
            followers.push(users[i]);

    return followers;
}

var input=document.getElementById("user");
var boton=document.getElementById("botonlogin");
//console.log(users);
//console.log(input);
boton.addEventListener('click',function() {
    //console.log("entra");
    //console.log(input_userName);

    userName=document.getElementById("user").value;
    pass=document.getElementById("pass").value;

    li=document.createElement("li");
    console.log(userName+" "+pass);

    user=new User(userName,pass);

    if (!existsUser(user)) {
        register(user);
        console.log(users);
        //ocultar formulario

        document.getElementById("user").style.visibility="hidden"; 
        document.getElementById("pass").style.visibility="hidden";
        document.getElementById("botonlogin").style.visibility="hidden";
        //mostrar datos

        li.innerHTML=userName;
        document.getElementById("datos").appendChild(li);
        var followers =showFollowers(userName);
        followers.forEach(function(user) {
                    //bbbbbbb
         });
        console.log(users[1]);
        console.log(showFollowers(userName));
        document.getElementById("datos").appendChild(li);
        
        //document.getElementById("datos").appendChild(li);
    }
    else {
        confirm("El usuario ya existe!");
    }

  
        //li.innerHTML="fizz";
  
   
}, false) ;


