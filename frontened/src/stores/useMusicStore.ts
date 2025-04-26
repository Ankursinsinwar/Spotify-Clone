import { axiosInstance } from '@/lib/axios';
import { Album, Song } from '@/types';
import { create } from 'zustand';

interface MusicStore {
    songs: Song[];
    albums: Album[];
    isLoading: boolean;
    error: string | null;
    currentAlbum: Album | null;

    fetchAlbums: () => Promise<void>;
    fetchAlbumById: (id: string) => Promise<void>;
    fetchSongs: () => Promise<void>;

}

export const useMusicStore = create<MusicStore>((set) =>({
    albums :[],
    songs: [],
    isLoading: false,
    error: null,
    currentAlbum: null,



    
    fetchSongs: async () => {
		set({ isLoading: true, error: null });
		try {
			const response = await axiosInstance.get("/songs");
			set({ songs: response.data });
		} catch (error: any) {
			set({ error: error.message });
		} finally {
			set({ isLoading: false });
		}
	},

    fetchAlbums: async () => {
        set({isLoading: true, error: null});
        try {
            const response = await axiosInstance.get("/albums");
            set({albums: response.data});
        } catch (error: any) {
            set({error: error.response.data.message});
        }finally {
            set({isLoading: false})
        }
    },

    fetchAlbumById: async (id) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axiosInstance.get(`/albums/${id}/`);
			set({ currentAlbum: response.data });
		} catch (error: any) {
			set({ error: error.response.data.message });
		} finally {
			set({ isLoading: false });
		}
	},

}));