export const Edit = (data) => {
    return {
        type: 'edit',
        payload: data
    }
}
export const Add = (data) => {
    return {
        type: 'add',
        payload: data
    }
}

export const Delete = (data) => {
    return {
        type: 'Delete',
        payload: data
    }
}

export const Search = (query) =>{
    return{
        type: "Search",
        payload: query
    }
}

export const maintable = () =>{
    return{
        type: "maintable"
    }
}

export const SELECT_ON_CLICK = (item) => {
    return {
        type: "SELECT_ON_CLICK",
        payload: item
    }
}