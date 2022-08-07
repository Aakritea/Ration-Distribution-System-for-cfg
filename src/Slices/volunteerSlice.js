import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
export const volunteerLogin=createAsyncThunk("volunteerLogin",async(volunteerLoginDetails,thunkApi)=>{
let response=await axios.post('/volunteer-api/login',volunteerLoginDetails);
let data=response.data;
if(data.message==="Login success"){
    return data.userdata;
}
if(data.message==="Invalid users" || data.message==="Invalid password"){
    return thunkApi.rejectWithValue(data);
}
})
const volunteerLoginSlice=createSlice({
    name:"volunteerLoginData",
    initialState:{
        userObj:{},
        isPending:false,
        isFulfilled:false,
        isRejected:false,
        errMsg:''
    },
    reducers:{
        clearLoginStatus:(state)=>{
            state.userObj=null;
            state.isPending=false;
            state.isFulfilled=false;
            state.isRejected=false;
            state.errMsg='';
            localStorage.removeItem("login")
            return state;
        }
    },
    extraReducers:{
        [volunteerLogin.pending]:(state,action)=>{
            state.isPending=true
        },
        [volunteerLogin.fulfilled]:(state,action)=>{
            state.userObj=action.payload;
            state.isFulfilled=true;
            state.isRejected=false;
            state.isPending=false;
            state.errMsg='';
            localStorage.setItem("login",true)
        },
        [volunteerLogin.rejected]:(state,action)=>{
            state.isRejected=true;
            state.isPending=false;
            state.isFulfilled=false;
            state.errMsg=action.payload.message;
        }
    }
});
export const {clearLoginStatus}=volunteerLoginSlice.actions;
export default volunteerLoginSlice.reducer;