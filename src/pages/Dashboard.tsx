import React, {useEffect, useState} from 'react';
import {history} from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Card from "../components/Card";
import NumberFormat from 'react-number-format'

// Actions 
import {GetAutos} from '../redux/actions/auto/AutoActions';

// Types
import {AutoType} from '../redux/actions/auto/AutoTypes';
type AutoTypeArr = {
    auto: AutoType[]
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
    const dispatch = useDispatch();
    const auth = useSelector((state: AuthType) => state.auth);
    const autos = useSelector((state: AutoTypeArr) => state.auto);
    
    useEffect(() => {
        if(!auth.success) {
            history.replace('/login')
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

                <div className="flex flex-col space-y-4 mt-4">
                    {autos.map((auto) => (
                        <div key={auto.id}>
                            <div className="text-sm">
                                <p> 
                                    <b>Make: </b> {auto.auto_make} {auto.auto_model}
                                </p>
                                <p>
                                    <b>Price: </b> <NumberFormat value={auto.purchase_price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    )
}

export default Dashboard