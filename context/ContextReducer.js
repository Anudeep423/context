import React,{createContext,useReducer,useContext} from 'react'
const ContextReducer = ()  => {

    const Context = createContext(["Anudeep" , () => {    } ]);



    const iState = {
        name : "Anudeep",
        age : 21
    }

    const reducer = (state = iState ,action) => {
            switch(action.type){
                case "Name" :
                    return {...state,age : action.payload}
                default : 
                return state    
            }
    
        }
    

  
    const Agents = () => {

        const name = useContext(Context);



        console.log("Suing context in fnnnnn" , name.pass.name )

    
        return (
            <Agent1>

            </Agent1>
        )
    }

    const Agent1 = () => {

        return <Context.Consumer >
           {con  => {
             return (
                 <>
                 <h1> Name  : {con.pass.name} </h1>
                 <h1>  Age : {con.pass.age}  </h1>
                 <button onClick = {  () => { con.changeName({ type : "Name" , payload : 22   }) }   } >   Change Age </button>
                 </>
             )
            } }
        </Context.Consumer>
    }

    const [val ,changeName ] = useReducer(reducer,iState)
        console.log(val)
        
    return (   <div>
            <h1>USe Context + USe Reducer</h1>
            
            <Context.Provider  value = {{ pass : val , changeName    }} >
                <Agents />
            </Context.Provider>
            
            
        </div>
    )
}



export default ContextReducer