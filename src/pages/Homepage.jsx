import React, { useEffect } from 'react'
import Card from '../components/Card'
import { Navigate } from 'react-router-dom'


export default function Homepage(props) {

    return (
        <>
            {!props.initialSetup && <Navigate to="/setup" />}
            <Card />
        </>
    )
}
