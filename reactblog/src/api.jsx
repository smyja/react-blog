const baseURL= process.env.NODE_ENV === "development"?"http://127.0.0.1:8000":"https://domain.com"
console.log(process.env)
export const api ={
    posts:{
        list:`${baseURL}/api/blog/posts/`,
        create:`${baseURL}/api/blog/posts/create/`
    }
}