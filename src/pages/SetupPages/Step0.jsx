import React from 'react'

export default function Step0(props) {
    console.log(props)
    return (
        <>
            <h1 className='text-7xl -bold m-10'>Welcome!</h1>
            <h1 className='text-6xl -bold m-10'>Let's get you set up...</h1>
            <button className='btn-primary' onClick={() => props.nextStep()}>Start Setup</button>
        </>
    )
}
