import React from 'react';
import Context from "./context";
import Provider from "./Provider";

function Consumer() {
    const Agents = () => {
        return <Agent1 />
    }
    const Agent1 = () => {
        return <Context.Consumer>
             {  (con)  => {
                 return <> <h1>{con.mission.Assigned}</h1> 
                 <button onClick = { con.changeMission} >  Change Mission</button>
                 </>
             } }
         </Context.Consumer>   
    }
    return (
        <div>
             <Provider>
        <Agents />
        </Provider>               
        </div>
    )
}

export default Consumer
