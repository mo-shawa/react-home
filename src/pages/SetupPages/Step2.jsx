import React from 'react'
import SetupCard from '../../components/SetupCard'
import SetupPage from './SetupPage'

export default function Step2(props) {
    return (
        <div className='flex flex-wrap align-center justify-center'>
            <h1 className='text-3xl -bold m-10 text-left'>Nice to meet you, {props.options.name}.</h1>
            <h1 className='text-7xl -bold m-10'>What would you like to see on your homepage?</h1>
            <div className="flex justify-between">
                <SetupCard item={"showNews"} setOptions={props.setOptions} />
                <SetupCard item={"showWeather"} setOptions={props.setOptions} />
                <SetupCard item={"showCalendar"} setOptions={props.setOptions} />
            </div>

        </div>
    )
}
