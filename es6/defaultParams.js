// default params - are the parameter values that we set as default at the time of function definition

function PrintUserInfo(name = "name", age = 18, somethingelse = "Default Params") {
    console.log(`${name} ${age} ${somethingelse}`)
}

PrintUserInfo()


// create a sum function to do sum of two numbers with default params default value should be 100 for each