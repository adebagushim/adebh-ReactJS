import { useEffect, useState } from "react"

const Effect = () => {
    let [text, setText] = useState('');

    useEffect(() => {
        localStorage.setItem('text', text)
    })
    
    return(
        <div>
            <textarea cols="30" rows="10" onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}

export default Effect;