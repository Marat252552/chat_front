import StartTransition from '../../shared/transitions/StartTransition'
import styles from './lib/styles.module.css'
import FormPageTemplate from '../../shared/templates/FormPageTemplate'
import { useState } from 'react'
import LoginForm from './elements/LoginForm'
import SigninForm from './elements/SigninForm'


const AuthPage = () => {

    let [isLoginForm, setIsLoginForm] = useState(true)

    let CurrentForm = () => {
        if(isLoginForm) return <LoginForm setIsLoginForm={setIsLoginForm} />
        return <SigninForm setIsLoginForm={setIsLoginForm} />
    }

    return (
        <>
            <StartTransition />
            <FormPageTemplate>

                <div className={styles.container}>

                    <CurrentForm />

                </div>

            </FormPageTemplate>
        </>
    )
}

export default AuthPage