import { createContext } from "react";

export interface ILoginResponse {
    Message:string,
    Date:string,
    token:string
}
export interface IAuthContext {
    Token:string | null;
    Login:(payload:any) => Promise<ILoginResponse | null>;
    Auth:boolean | null;

}

export const AuthContext = createContext<IAuthContext>(null!);