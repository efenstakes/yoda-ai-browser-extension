import React, { useState } from 'react'
import { AiOutlineCopy } from 'react-icons/ai'

import "./component.css"

const Prompt = ({ prompt: { reply, prompt }, }) => {
    const [showHasCopied, setShowHasCopied] = useState(false)


    // copy text to clipboard
    const copyReply = ()=> {

        navigator.clipboard.writeText(reply)
        setShowHasCopied(true)

        setTimeout(()=> setShowHasCopied(false), 1500)
    }

    return (
        <div className='prompt_card'>
            
            {/* prompt */}
            <div className='prompt_card__prompt'>
                { prompt }
            </div>

            {/* reply */}
            <div className='prompt_card__reply'>
                <div className='prompt_card__reply_icon_container' onClick={copyReply}>
                    { !showHasCopied && <AiOutlineCopy /> }
                    { showHasCopied && <small> Copied </small> }
                </div>
                <p className='prompt_card__reply__text'>
                    { reply }
                </p>
            </div>

        </div>
    )
}

export default Prompt
