import { createContext } from "react";
import { IProduct } from "../../components/pages/store";

export interface IStoreCart {
  Items?: IProduct[] | null;
  CartName?: string | null;
  Table?: string | null;
}

export interface IStoreContext {
  StoreCart: IStoreCart | null;
  CreateCart: (obj: IProduct) => Promise<number | null>;
}

export const StoreContext = createContext<IStoreContext>(null!);
