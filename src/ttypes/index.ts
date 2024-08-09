export interface TodosTypes{
    todos:any[],
    loading:boolean,
    completed?:boolean,
    checking?:boolean,
    deleting?:boolean
}

export interface UsProps{
    users:any[],
    loadingUser:boolean
}