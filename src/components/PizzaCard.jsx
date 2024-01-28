import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { orderActions } from "../redux/slices/orderSlice";


export default function PizzaCard(props) {
    const { order, key } = props;
    const dispatch = useDispatch();
    const time = moment(order.orderId).fromNow();
    let isTimeDiff = false;
    const getTimeDiff = () => {
        let currentTime = new Date().getTime();
        if (order.size == 'lg') {
            let diff = moment(currentTime).diff(order.orderId, 'minute');
            if (diff > 5) {
                isTimeDiff = true;
            }
        } else if (order.size == 'mid') {
            let diff = moment(currentTime).diff(order.orderId, 'minute');
            if (diff > 4) {
                isTimeDiff = true;
            }
        } else {
            let diff = moment(currentTime).diff(order.orderId, 'minute');
            if (diff > 3) {
                isTimeDiff = true;
            }
        }
        if(order.stage == 'picked'){
            return isTimeDiff = false
        }
        return isTimeDiff
    }
    
    const nextClicked = () => {
        let nextSatge = "";
        if (order.stage === 'placed') {
            nextSatge = 'making'
        } else if (order.stage === 'making') {
            nextSatge = 'ready'
        } else {
            nextSatge = 'picked'
        }
        let payload = {
            id: order.orderId,
            stage: nextSatge
        }
        dispatch(orderActions.changeStage(payload))
    }
    return (
        <div key={key} className="card-container" style={getTimeDiff() ? {backgroundColor:'red'}:{}}>
            <h3>Order ID {order.orderId}</h3>
            {order.stage !== 'picked' ?
                <>
                    <p>{time}</p>
                    <button className="next-btn" onClick={nextClicked}>Next</button>
                </>
                :
                <p>Picked</p>
            }
        </div>
    )
}