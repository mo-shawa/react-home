import React, { useState, useEffect } from 'react'
import Step0 from './Step0'
import Step1 from './Step1'
import Step2 from './Step2'

export default function SetupPage(props) {
    const [setupStep, setSetupStep] = useState(0)



    const nextStep = () => {
        setSetupStep(setupStep + 1)
    }

    const prevStep = () => {
        setSetupStep(setupStep - 1)
    }

    const showStep = () => {
        switch (setupStep) {
            case 0:
                return <Step0 {...props} nextStep={nextStep} prevStep={prevStep} />

            case 1:
                return <Step1 {...props} nextStep={nextStep} prevStep={prevStep} />

            case 2:
                return <Step2 {...props} nextStep={nextStep} prevStep={prevStep} />

            case 3:
                return <Step3 {...props} nextStep={nextStep} prevStep={prevStep} />
        }
    }

    // useEffect(() => {

    // }, [setupStep])

    return (
        <div>
            {props.s}
            {showStep()}
        </div>
    )
}
