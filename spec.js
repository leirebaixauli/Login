chai.should(); // invoking this function creates a "should" object on every object
context = describe;


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


var input=document.getElementById("user");
var boton=document.getElementById("botonlogin");

boton.addEventListener('click',function() {
    console.log("entra");
    console.log(input_userName);

    userName=document.getElementById("input_user").value;
    pass=document.getElementById("input_pass").value;

    li=document.createElement("li");
    console.log(userName+" "+pass);

    user=new User(userName,pass);

    if (!existsUser(user)) {
        register(user);
        //ocultar formulario
        //mostrar datos

    }
    else {
        confirm("El usuario ya existe!");
    }

    if (numero%3===0 && numero%5===0) {
    li.innerHTML="fizzBuzz";
    }
    else if (numero % 3===0)
    {
        li.innerHTML="fizz";
    }
    else if (numero%5===0)
    {
        li.innerHTML="buzz";
    }
    else {
        li.innerHTML="nada";
    
    }
    document.getElementById("lista").appendChild(li);
}, false) ;






describe("test twitter kata", function(){

    it("detectar si un usuario existe", function(){

        expect(1 == "1").toBeTruthy(); // assertion using Jasmine.
        user = {name: "Luis", pass:"123" }
        expect(existsUser(user)).toBeTruthy();
        user = {name: "Leire", pass:"123" }
        expect(existsUser(user)).toBeFalsy();
    });

    it("un usuario puede registrarse", function () {

        var user2 = new User("Pedro",123);
        register(user2);
        expect(users[1]).toBe(user2);
    });

    it("un usuario no puede registrarse si el nombre ya existe", function (){
        var user3 = {name: "Luis", pass:"123" };
        register(user3);
        expect(users[2]).toBe(undefined);

    });

    it("un usuario quiere seguir a otro", function (){
        var user3 = new User("Luis",123);
        var user2 = new User("Pedro",123);
        user3.follow(user2.name);
        expect(user3.follows[0]).toBe(user2.name);
    });

    it("saca la lista de follows de alguien", function () {
        expect(users[1].follows).toBe(showFollows(users[1].name));
    });    

    it("saca la lista de followers de alguien", function () {
        //expect(users[1].follows).toBe(showFollows(users[1].name));
    }); 

    it("guarda en local storage", function () {
        console.log(users);
        store();
        expect(localStorage.getItem("users")).toBe(JSON.stringify(users));
    });    

    });

