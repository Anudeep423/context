import React,{useState,useEffect} from 'react'

function lifecyle() {
    const [val,setValue] = useState(["jj"])
    useEffect( () => {
      return () => {
        // clean up 
       } 
    } ,[])
    return (
        <div>
            
        </div>
    )
}

export default lifecyle

