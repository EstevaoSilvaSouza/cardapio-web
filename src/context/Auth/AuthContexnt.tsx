import { createContext } from "react";

export interface ILoginResponse {
    message:string,
    data:string,
    token:string,
    returnCode:number,
}
export interface IAuthContext {
    Login:(payload:any) => Promise<ILoginResponse | null>;
    Auth:boolean | null;
    Data:ILoginResponse | null;
    Logout :() => void;
}

export const AuthContext = createContext<IAuthContext>(null!);