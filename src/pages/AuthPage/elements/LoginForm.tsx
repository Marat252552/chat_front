import { LoginOutlined } from '@ant-design/icons'
import IconFilledButton from '../../../UI/Buttons/IconFilledButton'
import FilledInput from '../../../UI/FilledInput'
import styles from './../lib/styles.module.css'
import StarText from '../../../shared/Texts/StarText'
import { useForm } from 'react-hook-form'
import CustomCheckbox from './CustomCheckbox'
import { LoginValues_T } from '../lib/types'
import { useEffect, useState } from 'react'
import {message} from 'antd'
import loginAPI from '../../../shared/api/actions/loginAPI'
import userSlice from '../../../state/Reducers/UserReducer'
import { useAppDispatch } from '../../../state/hooks'
import Spinner from '../../../UI/Spinner'
import { useNavigate } from 'react-router-dom'


const LoginForm = ({ setIsLoginForm }: { setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>> }) => {

    let { register, formState: { errors }, handleSubmit} = useForm<LoginValues_T>({
        mode: 'onChange',
        defaultValues: {
            remember: true
        }
    })

    let {setUser} = userSlice.actions
    let dispatch = useAppDispatch()
    let navigate = useNavigate()

    let [loading, setLoading] = useState(false)

    let onSubmit = async (values: LoginValues_T) => {
        setLoading(true)
        try {
            let {data} = await loginAPI(values)
            let {AccessToken, user} = data
            dispatch(setUser(user))
            localStorage.setItem('access_token', AccessToken)
            navigate('/chat')
        } catch(e: any) {
            console.log(e)
            let message_info = e?.response?.data?.message || 'Произошла непредвиденная ошибка'
            message.error(message_info)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        console.log(errors.login)
    }, [errors.login])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

                <StarText>
                    Вход
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
                    {...register('password', {
                        required: 'Введите пароль',
                        pattern: {
                            value: /^[a-z0-9]+$/i,
                            message: 'Допустимы только латинские символы'
                        }
                    })}
                    placeholder='Пароль'
                    type='password'
                />

                {errors.password?.message && <StarText>{errors.password.message}</StarText>}

                <CustomCheckbox
                    {...register('remember')}
                />


                <div onClick={() => { setIsLoginForm(false) }}>
                    <StarText >
                        Впервые здесь? Создать аккаунт
                    </StarText>
                </div>

                <IconFilledButton
                    IconComponent={loading? <Spinner /> : <LoginOutlined />}
                />

            </form>
        </>
    )
}

export default LoginForm