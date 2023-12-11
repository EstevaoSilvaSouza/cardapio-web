import { createContext } from "react";

export interface IAuthContext {
    Token:string | null;
    Login:(payload:any) => boolean | null;
    Auth:boolean | null;

}

export const AuthContext = createContext<IAuthContext>(null!);