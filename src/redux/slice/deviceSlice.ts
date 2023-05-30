import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

export interface DataTypeDevice {
    id?: string
    key: number
    deviceName: string
    skuID: string
    macAddress: string
    warrantyPeriod: string
    label: string
    information: string
    note: string
    address: string
    capacity: number
    duration: string
    memory: string
    location: string
    contractExpiryDate: string
    status: string
    userName: string
    password?: string
    time?: string
    desc?: string
}

interface IDevice {
    devices: DataTypeDevice[],
}

const initialState: IDevice = {
    devices: [],
} 

export const fetchDevice = createAsyncThunk(
    "device/fetch",
    async () => {
        let listDevice: any = [];
        const query = await getDocs(collection(db, "device"));
        
        query.docs.forEach( doc => {
            listDevice.push({...doc.data(), id: doc.id})
        })
        
        return listDevice;
})


const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDevice.fulfilled, (state, action) => {
          state.devices = action.payload;
        });
      }, 

})

export default deviceSlice;
export const {  } = deviceSlice.actions;