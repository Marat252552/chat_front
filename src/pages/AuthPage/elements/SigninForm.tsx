import { FormOutlined } from '@ant-design/icons'
import IconFilledButton from '../../../UI/Buttons/IconFilledButton'
import FilledInput from '../../../UI/FilledInput'
import styles from './../lib/styles.module.css'
import StarText from '../../../shared/Texts/StarText'
import { useForm } from 'react-hook-form'
import { SigninValues_T } from '../lib/types'
import signinAPI from '../../../shared/api/actions/signinAPI'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../state/hooks'
import userSlice from '../../../state/Reducers/UserReducer'
import { useState } from 'react'
import Spinner from '../../../UI/Spinner'
import {message} from 'antd'


const SigninForm = ({ setIsLoginForm }: { setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const { register, handleSubmit, formState: { errors } } = useForm<SigninValues_T>({
        mode: 'onChange',
        defaultValues: {
            remember: true
        }
    })

    let [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    let dispatch = useAppDispatch()
    let { setUser } = userSlice.actions

    let onSubmit = async ({ login, password, remember }: SigninValues_T) => {
        setLoading(true)
        try {
            let response = await signinAPI({ login, password, remember })
            if (response.status === 201) {
                navigate('/chat')
                let { user, AccessToken } = response.data
                localStorage.setItem('access_token', AccessToken)
                dispatch(setUser(user))
            }
        } catch (e: any) {
            console.log(e)
            let {message: message_info} = e.response.data
            if(e.response.status === 400 && message_info) {
                message.error(message_info)
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

                <StarText>
                    Регистрация
                </StarText>

                <FilledInput
                    placeholder='Логин'
                    {...register('login', {
                        required: 'Введите логин',
                        maxLength: 20,
                        pattern: {
                            value: /^[a-z0-9]+$/i,
                            message: 'Допустимы только латинские символы'
                        },
                    })}
                />

                {errors.login?.message && <StarText>{errors.login.message}</StarText>}

                <FilledInput
                    type='password'
                    placeholder='Пароль'
                    {...register('password', {
                        required: 'Введите пароль',
                        pattern: {
                            value: /^[a-z0-9]+$/i,
                            message: 'Допустимы только латинские символы'
                        }
                    })}
                />

                {errors.password?.message && <StarText>{errors.password.message}</StarText>}

                <FilledInput
                    type='password'
                    placeholder='Пароль'
                    {...register('password2', {
                        required: 'Подтвердите пароль',
                        validate: (value, formValues) => {
                            if (value !== formValues.password) {
                                return 'Пароли не совпадают'
                            }
                        }
                    })}
                />

                {errors.password2?.message && <StarText>{errors.password2.message}</StarText>}

                <div onClick={() => { setIsLoginForm(true) }}>
                    <StarText >
                        Уже есть аккаунт? Войти
                    </StarText>
                </div>

                <IconFilledButton
                    IconComponent={loading ? <Spinner /> : <FormOutlined />}
                />

            </form>
        </>
    )
}

export default SigninForm