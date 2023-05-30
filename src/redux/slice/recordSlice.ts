import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

export interface DataTypeRecord {
    key: number,
    id: string,
    recordName: string,
    ISRCID: string,
    duration: string,
    singer: string,
    author: string,
    expiryDate: string,
    dateCreated: string,
    genre: string,
    format: string,
    status: boolean,
    update?: string,
    listen?: string,
  }

interface IRecordState {
    record: DataTypeRecord[]
}

const initialState: IRecordState = {
    record: []
} 

export const fetchRecord = createAsyncThunk(
    "record/fetch",
    async () => {
        let record: any = [];
        const query = await getDocs(collection(db, "record"));
        
        query.docs.forEach( doc => {
            record.push({...doc.data(), id: doc.id})
        })
        
        return record;
})


const recordSlice = createSlice({
    name: 'record',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecord.fulfilled, (state, action) => {
          state.record = action.payload;
        });
      }, 

})

export default recordSlice;