import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

export interface DataTypeUnit {
    id?: string,
    key: number,
    adminAccountName: string,
    contractID: string,
    admin: number,
    listUser: any,
    assignedDevice: any,
    expiryDate: string,
    status: boolean,
}

export interface DataTypeUser {
    key: number
    userName: string
    email: string,
    fullName: string,
    password: string,
    role: string,
    status: boolean,
    lastUpdated: string,
}

interface IUnit {
    unit: DataTypeUnit[],
}

const initialState: IUnit = {
    unit: [],
} 

export const fetchUnit = createAsyncThunk(
    "unit/fetch",
    async () => {
        let unitTemp: any = [];
        const query = await getDocs(collection(db, "unit"));
        
        query.docs.forEach( doc => {
            unitTemp.push({...doc.data(), id: doc.id})
        })
        
        return unitTemp;
})


const unitSlice = createSlice({
    name: 'unit',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUnit.fulfilled, (state, action) => {
          state.unit = action.payload;
        });
      }, 

})

export default unitSlice;