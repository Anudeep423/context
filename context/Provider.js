import React,{useState} from 'react'
import Context from "./context"

export default function Provider(props) {

    const [mission,setMission] = useState({ Assigned : "Mangal"  })
    return (
        <div>
            <Context.Provider  value = { { mission ,changeMission : () => { mission.Assigned == "Mangal" ?  setMission(  {Assigned : "Chand"})  :
        setMission({Assigned : "Mangal"})
        }  }} >0
                {props.children}
            </Context.Provider>
        </div>
    )
}
