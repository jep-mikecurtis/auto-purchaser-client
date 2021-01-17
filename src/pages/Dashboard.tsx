import React, {useEffect} from 'react';
import {history} from '../redux/store';
import { useSelector } from 'react-redux';
import Card from "../components/Card";

// Actions 
import {GetAutos} from '../redux/actions/auto/AutoActions';

// Types
type AutoType = {
    auto: []
}

type AuthType = {
    auth: {
        success: boolean
        user: {
            email: string
        }
    }
}

const Dashboard = () => {
    const auth = useSelector((state: AuthType) => state.auth);
    const autos = useSelector((state: AutoType) => state.auto);
    
    useEffect(() => {
        console.log(auth);
        if(!auth.success) {
            history.replace('/login')
        } else {
            GetAutos(auth.user.email)
        }
    })
    return (
        <div className="container mx-auto flex justify-center py-20">
            <Card imgSrc="https://images.unsplash.com/photo-1430080369629-afa4c2ae5121?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
                <h1 className="text-white font-bold flex-auto text-xl font-semibold">
                    Dashboard
                </h1>

                {/* This will be for custom message */}
                <div className="w-full flex-none text-sm font-bold text-green-300 mt-2 text-xl">
                    Current Auto Purchases
                </div>
            </Card>
        </div>
    )
}

export default Dashboard