import React from 'react'

export default function SetupPage(props) {

    return (
        <div>
            <h1 className='text-7xl -bold m-10'>Let's get you set up...</h1>
            <button className='btn-primary' onClick={() => props.setInitialSetup(true)}>Set Setup</button>
        </div>
    )
}
