import {createContext,useContext} from "react";

const Context = createContext(["Light" , () => { Call()  } ]);

function Call(){
console.log("Called")

}




export default Context