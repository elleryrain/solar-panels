import { create } from "zustand";
import ky from "ky";
import { apiUrl } from "@/const/backendUrl.ts";
import { backendRoutes } from "@/const/routes.ts";

export interface IMainItem {
  id: number;
  name: string;
  defaultPrice: number;
  weight: number;
  power: number;
  size: string;
  description: string;
}
export interface IMainItemState {
  mainItems: IMainItem[];
  fetch: () => Promise<void>;
}
export const useMainItemStore = create<IMainItemState>((set) => ({
  mainItems: [],
  fetch: async () => {
    const mainItems = await ky
      .get(`${apiUrl}${backendRoutes.getMainWorkstation}`)
      .json<IMainItem[]>();
    set({ mainItems: mainItems });
  },
}));
