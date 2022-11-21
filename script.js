var names = new Array();
names [0] = "james";
names [1] = "Rosline";
names [2] = "John";
names [3] = "Mary";
names [4] = "Joe";
names [5] = "Ann";
names [6] = "jumbo";
names [7] = "Nkechi";
names [8] = "Queen";

for (var i = 0; i < names.length; i++){
    if (names [i].charAt(0)==="J"|| names [i].charAt(0)==="j"){
        console.log ("Goodbye "+ names[i])

    }
    else{
       console.log("Hello "+ names[i]) 
    }
}
