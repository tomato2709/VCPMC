import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

export interface DataTypeAuthorizedPartner {
    id?: number,
    key: number,
    fullName: string,
    userName: string,
    email: string,
    expiryDate: string,
    phone: string,
    status: boolean,
}

interface ICreateList {
    authorizedPartnerList: DataTypeAuthorizedPartner[],
}

const initialState: ICreateList = {
    authorizedPartnerList: [],
} 

export const fetchAuthorizedPartnerList = createAsyncThunk(
    "authorizedPartnerList/fetch",
    async () => {
        let tempList: any = [];
        const query = await getDocs(collection(db, "authorized-partner"));
        
        query.docs.forEach( doc => {
            tempList.push({...doc.data(), id: doc.id})
        })
        
        return tempList;
})


const authorizedPartnerSlice = createSlice({
    name: 'authorizedPartner',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAuthorizedPartnerList.fulfilled, (state, action) => {
          state.authorizedPartnerList = action.payload;
        });
      }, 

})

export default authorizedPartnerSlice;