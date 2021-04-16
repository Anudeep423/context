import React,{useContext} from 'react'
import Context from "./context"

function ThemeToggler() {
    const [theme,setTheme] = useContext(Context)
    return (
        <div>
            <h1>This is Theme Toggler  : {theme} </h1>
            <button  onClick = { () => { setTheme( ) } } > Change Theme  </button>
        </div>
    )
}

export default ThemeToggler
