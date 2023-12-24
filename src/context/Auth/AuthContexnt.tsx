import { createContext } from "react";

export interface ILoginResponse {
    message:string,
    data:string,
    token:string,
    returnCode:number,
}
export interface IAuthContext {
    Token:string | null;
    Login:(payload:any) => Promise<ILoginResponse | null>;
    Auth:boolean | null;
    Data:ILoginResponse | null;
    Logout :() => void;
    contextValue: any;

}

export const AuthContext = createContext<IAuthContext>(null!);