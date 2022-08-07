import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
export const adminLogin=createAsyncThunk("adminLogin",async(adminLoginDetails,thunkApi)=>{
let response=await axios.post('/admin-api/login',adminLoginDetails);
console.log(adminLoginDetails)
console.log(response)
let data=response.data;
if(data.message==="Login success"){
    return data.userdata;
}
if(data.message==="Invalid users" || data.message==="Invalid password"){
    return thunkApi.rejectWithValue(data);
}
})
const adminLoginSlice=createSlice({
    name:"adminLoginData",
    initialState:{
        userObjA:{},
        isPending:false,
        isFulfilled:false,
        isRejected:false,
        errMsg:''
    },
    reducers:{
        clearLoginStatus:(state)=>{
            state.userObjA=null;
            state.isPending=false;
            state.isFulfilled=false;
            state.isRejected=false;
            state.errMsg='';
            localStorage.removeItem("login")
            return state;
        }
    },
    extraReducers:{
        [adminLogin.pending]:(state,action)=>{
            state.isPending=true
        },
        [adminLogin.fulfilled]:(state,action)=>{
            state.userObjA=action.payload;
            state.isFulfilled=true;
            state.isRejected=false;
            state.isPending=false;
            state.errMsg='';
            localStorage.setItem("login",true)
        },
        [adminLogin.rejected]:(state,action)=>{
            state.isRejected=true;
            state.isPending=false;
            state.isFulfilled=false;
            state.errMsg=action.payload.message;
        }
    }
});
export const {clearLoginStatus}=adminLoginSlice.actions;
export default adminLoginSlice.reducer;