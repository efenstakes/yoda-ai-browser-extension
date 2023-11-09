import React from 'react'
import { AiOutlineHourglass } from 'react-icons/ai'

// styles
import "./component.css"

const NoPrompts = () => {
    return (
        <div className='no_prompts'>

            <AiOutlineHourglass size={40} color='gray' />

            <h2>
              No Prompts Yet.
            </h2>

            <p>
              Ask Yoda anything and get an immediate response now..
            </p>

        </div>
    )
}

export default NoPrompts