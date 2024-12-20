import axios from "axios"


const api = axios.create({
    baseURL: `http://localhost:8000/api/form/get-product`
});



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