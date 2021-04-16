import React,{useContext,createContext,useReducer} from 'react';

const iState = { name : "Anudeep" , age : "21" }

const Context = createContext();

const reducer = (state  ,action) => {

    switch(action.type){
        case "Name" : 
        return {...state,name : action.payload}
         default :
         return state
    }

}
const Child1 = () => {
    const name = useContext(Context)
    return (
        <>
         <h1>  {name.name}  </h1> 
         <button  onClick = { () => { name.changeName({type : "Name" ,payload : "Suresh" }) } }  > Change Names </button>
         <Child2 />
         </>
         )
}
const Child2 = () => {
    const name = useContext(Context)
    return (
        <>
            <h1>{name.name}</h1>
        </>
    )
}

function UseReducer() {

    const [name,changeName] = useReducer(reducer,iState);
    

    return (
        <Context.Provider value = { { name : name.name , changeName : changeName } } >
        <div>
           {name.name}
           {name.age}
            <Child1 />
            <button  onClick = { () => {changeName({type : "Name" ,payload : "Suresh" })}  }  >Chnage Name</button>
        </div>
        </Context.Provider>
    )
}

export default UseReducer
