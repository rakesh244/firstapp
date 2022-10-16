import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const userLogin=createAsyncThunk('loginuser',async(userCredentialsObject,thunkApi)=>{
    let response=await axios.post('/user-api/login',userCredentialsObject);
    let data=response.data;
    if(data.message==='success'){
        localStorage.setItem("token",data.payload);
        return data.userObj;
    }
    if(data.message==='invalid user'||data.message==='invalid password'){
        return thunkApi.rejectWithValue(data)
    }
})

let userslice=createSlice({
    name:'user',
    initialState:{
        userObj:{},
        isError:false,
        isSuccess:false,
        isLoading:false,
        errMsg:''
    },
    reducers:{},
    extraReducers:{
        [userLogin.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [userLogin.fulfilled]:(state,action)=>{
            state.userObj=action.payload;
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.errMsg=''
        },
        [userLogin.rejected]:(state,action)=>{
            state.isError=true;
            state.isLoading=false;
            state.errMsg=action.payload.message;
            state.isSuccess=false;  
        }
    }
})
export const{}=userslice.actions;
export default userslice.reducer;