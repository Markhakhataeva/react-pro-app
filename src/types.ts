export interface ReduxState {
    todos:any[]
    loading: boolean
    users:any[]
    loadUser:boolean
    completed?:boolean
    checking?:boolean
    deleting?:boolean
}

export enum ActionType
{
    FETCH_TODOS="FETCH_TODOS",
    FETCH_TODOS_SUCCESS="FETCH_TODOS_SUCCESS",
    FETCH_DELETE="FETCH_DELETE",
    FETCH_TODOS_DELETE="FETCH_TODOS_DELETE",
    FETCH_CHECK="FETCH_CHECK",
    FETCH_CHECK_SUCCESS="FETCH_CHECK_SUCCESS",
    FETCH_USER="FETCH_USER",
    FETCH_USER_SUCCESS="FETCH_USER_SUCCESS",


}
interface FetchTODOS{
    type:ActionType.FETCH_TODOS

}

interface FetchTODOSSuccess{

    type:ActionType.FETCH_TODOS_SUCCESS,
    payload:any[]
}
interface FetchDELETE{

    type:ActionType.FETCH_DELETE
    payload:number
}
interface FetchDELETESuccess{

    type:ActionType.FETCH_TODOS_DELETE
    payload:number
}


interface Check{
    type:ActionType.FETCH_CHECK
    payload:number
}


interface CheckSuccesss{
    type:ActionType.FETCH_CHECK_SUCCESS,
    payload:number
}
interface User{
    type:ActionType.FETCH_USER

}


interface UserSuccess{
    type:ActionType.FETCH_USER_SUCCESS,
    payload:any[]

}


export type FetchTODOS_Actions=
    FetchTODOS
    | FetchTODOSSuccess
    | FetchDELETE
    |FetchDELETESuccess
    |Check
    |CheckSuccesss
    |User
    | UserSuccess
