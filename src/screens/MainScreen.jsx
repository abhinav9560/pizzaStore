import React, { useEffect, useState } from "react";
import './style.css'
import { useSelector, useDispatch } from "react-redux";
import { orderSelector } from "../redux/slices/orderSlice";
import moment from "moment";
import { orderActions } from "../redux/slices/orderSlice";

export default function MainSection() {
    const orders = useSelector(orderSelector);
    const [totalDelivery, setTotalDelivery] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        getTotalDelivered()
    }, [orders])
    const getTotalDelivered = () => {
        let delivered = orders.filter((item) => item.stage === 'picked')
        setTotalDelivery(delivered.length)
    }
    const getOrderStatus = (status) => {
        if (status == 'ready') {
            return 'Order Ready'
        } else if (status == 'making') {
            return "Order In Making"
        } else if (status == 'picked') {
            return "Order Picked"
        } else {
            return "Order Placed"
        }
    }
    const cancleOrder = (id) => {
        dispatch(orderActions.delete(id))
    }
    const getTimeSpent = (time) => {
        return moment(time).fromNow()
    }
    return (
        <div name="main" id="main">
            <h2 className="heading">Main Section</h2>
            <div className="main-container">
                <table className="table-container">
                    <tr>
                        <th>Order Id</th>
                        <th>Stage</th>
                        <th>Total time spent (time from order placed)</th>
                        <th>Action</th>
                    </tr>
                    {
                        orders.map(item => {
                            let orderStatus = getOrderStatus(item.stage);
                            let time = getTimeSpent(item.orderId)
                            return (<tr>
                                <td>{item.orderId}</td>
                                <td>{orderStatus}</td>
                                <td>{time}</td>
                                {item.stage === 'placed' || item.stage === 'making' ?
                                    <td>
                                        <button onClick={() => cancleOrder(item.orderId)}>Cancle</button>
                                    </td>
                                    :
                                    <td></td>
                                }
                            </tr>)
                        })
                    }
                    <tr>
                        <th>Total order delivered</th>
                        <td colspan="3">{totalDelivery}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}