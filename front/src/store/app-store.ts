import { create } from 'zustand';

interface AppState {
    isSet: boolean,
    settings: Settings,
    setIsSet: (by: boolean) => void
  }

interface Settings {
    appid: string,
    apihash: string
}

export const useStore = create<AppState>((set) => ({
    isSet: false,
    settings: {
        appid: "",
        apihash: ""
    },
    setIsSet: (value: boolean) => set({ isSet: value }),
    setSettings: (value: Settings) => set({ settings: value })
}));

