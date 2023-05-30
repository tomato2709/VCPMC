import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { DataTypeRecord } from "./recordSlice";

export interface DataTypePlaylist {
    key: number,
    title: string,
    id?: string,
    recordID: DataTypeRecord[],
    duration: string,
    genres: string[],
    desc: string
    createAt: string,
    author: string,
}

interface IPlaylist {
    playlist: DataTypePlaylist[],
    tempAddRecordToPlaylist: DataTypeRecord[]
}

const initialState: IPlaylist = {
    playlist: [],
    tempAddRecordToPlaylist: []
} 

export const fetchPlaylist = createAsyncThunk(
    "playlist/fetch",
    async () => {
        let playlist: any = [];
        const query = await getDocs(collection(db, "playlist"));
        
        query.docs.forEach( doc => {
            playlist.push({...doc.data(), id: doc.id})
        })
        
        return playlist;
})


const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        tempPlaylist: (state, action) => {
            state.tempAddRecordToPlaylist = action.payload
        },
        cancelTempPlaylist: (state) => {
            state.tempAddRecordToPlaylist = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPlaylist.fulfilled, (state, action) => {
          state.playlist = action.payload;
        });
      }, 

})

export default playlistSlice;
export const { tempPlaylist, cancelTempPlaylist } = playlistSlice.actions;