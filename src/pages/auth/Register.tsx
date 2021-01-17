import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';

// Types
import {AutoType} from '../../redux/actions/auto/AutoTypes';

// Actions
import {AuthRegister} from '../../redux/actions/auth/AuthActions';
import {GetAutos} from '../../redux/actions/auto/AutoActions'

// Components
import Card from "../../components/Card";
import { InputText } from "../../components/Inputs";
import { ButtonClass } from "../../components/types/ButtonsTypes";

// Auto State Type From Store
type AutoStateType = {
    auto: AutoType[]
}

type RegisterStateType = {
    auth: {
        success?: boolean
        errors?: {
            name?: []
            email?: []
            password?: []
            passwordConfirm?: []
        }
    }
}


const Register = () => {
    const dispatch = useDispatch();

    // Get Autos From Redux Store
    const auto = useSelector((state: AutoStateType) => state.auto);

    // Get Register State
    const registerState = useSelector((state: RegisterStateType) => state.auth);
    const errors = registerState.errors;
    
    // SETUP STATE
    const [name, setName] = useState(auto[0]?.name ?? '');
    const [email, setEmail] = useState(auto[0]?.email ?? '');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = () => {
        const data = {
            name,
            email,
            password,
            passwordConfirm
        }

        dispatch(AuthRegister(data))
        dispatch(GetAutos(data))
    }

    return (
        <div className="container mx-auto flex justify-center py-20">
            <Card imgSrc="https://images.unsplash.com/photo-1517817748493-49ec54a32465?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
                <h1 className="text-white font-bold flex-auto text-xl font-semibold">
                    Create New Account
                </h1>

                {/* This will be for custom message */}
                <div className="w-full flex-none text-sm font-bold text-green-300 mt-2 text-xl">
                    {auto[0]?.message}
                </div>

                {/* Register FORM */}
                <div className="flex flex-col space-y-2 mt-4">
                    {/* Name */}
                    <InputText inputValue={name} name="name" label="Name" setState={setName}/>
                    <small className="text-red-600 text-xs">{errors?.name}</small>

                    {/* Email */}
                    <InputText inputValue={email} name="email" label="Email" setState={setEmail}/>
                    <small className="text-red-600 text-xs">{errors?.email}</small>

                    {/* Password */}
                    <InputText name="password" label="Password" password={true} setState={setPassword}/>
                    <small className="text-red-600 text-xs">{errors?.password}</small>

                    {/* Password Confirm */}
                    <InputText name="password_confirm" label="Confirm Password" password={true} setState={setPasswordConfirm}/>
                    <small className="text-red-600 text-xs">{errors?.passwordConfirm}</small>

                    <div className="py-4">
                        <button className={ButtonClass.primary}
                         onClick={handleSubmit}>Create</button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Register