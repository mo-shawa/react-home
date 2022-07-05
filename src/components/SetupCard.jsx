import React from 'react'

export default function SetupCard(props) {

    const handleChange = () => {
        props.setOptions(prev => ({ ...prev, [props.item]: !prev[props.item] }))
    }

    return (
        <div className='h-50 w-50 shadow-md p-9'>
            <label htmlFor={props.item}>{props.item}</label>
            <input onChange={handleChange} type="checkbox" name={props.item} />
        </div>
    )
}
