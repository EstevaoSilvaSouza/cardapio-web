import { createContext } from "react";
import { IProduct } from "../../components/pages/store/store";

export interface IStoreCart {
  Items?: IProduct[] | null;
  NameCart?: string | null;
  Id_Table?: string | null;
}

export interface IStoreContext {
  StoreCart: IStoreCart | null;
  CreateCart: (obj: IProduct,storeName:string) => Promise<number | null>;
  removeCart : (idx:any) => void;
}

export const StoreContext = createContext<IStoreContext>(null!);
