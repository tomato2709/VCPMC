import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

export interface DataTypeAuthorizedContract {
    id?: string
    key: number
    contractID: string
    contractName: string
    fullName: string
    authorizedPerson: string
    accountNumber: string
    bank: string
    birthDay: string
    email: string
    role: string
    sex: number
    startDay: string
    status: string
    userName: string
    nationality: string
    numberPhone: string
    pasword: string
    personID: string
    date: string
    place: string
    taxID: number
    address: string
    reason?: string
}

interface IAuthContract {
    authContracts: DataTypeAuthorizedContract[],
}

const initialState: IAuthContract = {
    authContracts: [],
} 

export const fetchAuthContract = createAsyncThunk(
    "auth-contract/fetch",
    async () => {
        let listAuthContract: any = [];
        const query = await getDocs(collection(db, "auth-contract"));
        
        query.docs.forEach( doc => {
            listAuthContract.push({...doc.data(), id: doc.id})
        })
        
        return listAuthContract;
})


const authContractSlice = createSlice({
    name: 'authContracts',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAuthContract.fulfilled, (state, action) => {
          state.authContracts = action.payload;
        });
      }, 

})

export default authContractSlice;
export const {  } = authContractSlice.actions;