import axios from "axios"


const api = axios.create({

    baseURL: "https://fakestoreapi.com/products"
})


export const getPost= () =>{
    return api.get('/');
}

export const deletePost = (id) =>{
    return api.delete(`/${id}`)
}

export const postData =(post)=>
    {
        return api.post("/",post)
    }  

export const putData =(id,post)=>{
    return api.put(`/${id}`,post)
}    