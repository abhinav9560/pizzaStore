import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders:[
        {
            orderId:1706387196816,
            type:'Veg',
            size:'mid',
            base:'thin',
            stage:'placed'
        }
    ]
}

const orderSlice =  createSlice({
    name:'orders',
    initialState,
    reducers:{
        add:(state,action) => {
            state.orders.push(action.payload)
        },
        changeStage:(state,action) => {
            let newState = state.orders.map((order,i) => {
                if(order.orderId == action.payload.id){
                    order.stage = action.payload.stage
                }
                return order
            })
        },
        delete:(state,action) => {
            state.orders.forEach((order,i) => {
                if(order.orderId == action.payload){
                    state.orders.splice(i,1)
                }
            })
        }
    }
})

export const orderReducer = orderSlice.reducer;
export const orderActions = orderSlice.actions;
export const orderSelector = (state) => state.orderReducer.orders;