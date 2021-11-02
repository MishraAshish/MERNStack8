//bind : changes the context of a function at runtime, and doesn't executes immediately but when required

var SoftwareEnggineer = {
    Name : "XYZ Zukerberg",
    Age : 25,
    Skill : "JS, ES6",
    GetSkills : function() {
        console.log("Skill " + this.Skill)
        //console.log("this ", this)
        var that = this;

        //using settimeout to introduce a delay
        setTimeout((function() {
            console.log("Skill 2.5 "+ this.Skill)
            //console.log("this ", this)

        }).bind(this), 2500);


        //using settimeout to introduce a delay
        setTimeout(function() {
            console.log("Skill 3.5 "+ that.Skill)
        }, 3500);
    }
}

SoftwareEnggineer.GetSkills()



//html example
//<button id="newBtnBind">Practice Div</button>
var btn = document.getElementById("newBtnBind")
var onclick = function(){alert("The name is "+ this.name)}

btn.addEventListener("click", this.onclick.bind(user1), false) // changing context to user1 upon click
btn.addEventListener("click", this.onclick, false) //without bind context remains global

var user1 = {
    name : "Estben"
}