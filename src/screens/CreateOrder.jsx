import React from "react";
import {useDispatch } from "react-redux";
import { orderActions } from "../redux/slices/orderSlice";
import './style.css'

export default function CreateOrder() {
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        let id = new Date().getTime()
        let payload = {
            orderId:id,
            type:e.target[0].value,
            size:e.target[1].value,
            base:e.target[2].value,
            stage:'placed'
        }
        dispatch(orderActions.add(payload))
    }
    return (
        <div name="form" id="form">
            <h2 className="heading">Create New Order</h2>
            <form className="pizza-form" onSubmit={onSubmit}>
                <div className="form-container">
                    <div className="form-clm">
                        <label className="input">Pizza Type</label>
                        <select className="input">
                            <option value={'veg'}>Veg</option>
                            <option value={'nonn-veg'}>Non-Veg</option>
                        </select>
                    </div>
                    <div className="form-clm">
                        <label className="input">Select Size</label>
                        <select className="input">
                            <option value={'lg'}>Large</option>
                            <option value={'mid'}>Medium</option>
                            <option value={'sm'}>Small</option>
                        </select>
                    </div>
                    <div className="form-clm">
                        <label className="input">Select Base</label>
                        <select className="input">
                            <option value={'thick'}>Thick</option>
                            <option value={'thin'}>Thin</option>
                        </select>
                    </div>
                    <input className="input" type="submit" value={"Submit"} />
                </div>
            </form>
        </div>
    )
}