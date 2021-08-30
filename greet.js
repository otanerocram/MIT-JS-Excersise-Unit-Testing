
const greet = name => {

    let greet = '';


    if (typeof name === null || typeof name === 'undefined' || (name === "" && name.length == 0)) {
        return "Hello there!";
    }

    if (typeof name === 'string' && name.length > 0 ){
        if (name == name.toUpperCase()){
            return "HELLO " + name + "!";  
        }else{
            return "Hello " + name + "!";  
        }
    }

    if (typeof name === 'object'){
        let salute = 'Hello';
        name.forEach(element => {
            salute += ', '+element;
            
        });
        salute += "!";
        return salute;
    }    
}


module.exports = greet;
