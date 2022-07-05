import React, { useState } from 'react'

export default function Step1(props) {
    const [name, setName] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.setOptions(prev => ({
            ...prev,
            name: name
        }))
        props.nextStep()
    }
    return (
        <div>
            <h1 className='text-7xl -bold m-10'>What should I call you?</h1>
            <form onSubmit={handleSubmit}>
                <input className='' onChange={(e) => setName(e.target.value)} type="text" placeholder='Charlie' />
            </form>
        </div>
    )
}
