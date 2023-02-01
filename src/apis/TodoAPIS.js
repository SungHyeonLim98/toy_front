import axios from "axios";
import keywords from "@/consts/keywords";
import consts from "@/consts/consts";


export const getTodoList = async (page, size) => {

  const res = await axios.get(`${consts.DOMAIN}/api/todos/list`, {
    params: {
      page: page,
      size: size
    }
  })

  return res.data
}

export const getTodo = async (id) => {

  const res = await axios.get(`${consts.DOMAIN}/api/todos/details/${id}`)

  return res.data


}

export const deleteTodo = async (id) => {

  const res = await axios.delete(`${consts.DOMAIN}/api/todos/${id}`)

  return res.data


}
export const postTodo = async (todo, images) => {

  const result = {...todo, images: images}

  console.log(result)

  const res = await axios.post(`${consts.DOMAIN}/api/todos/`, result)

  return res.data


}

export const postUpload = async (file) => {

  const res = await axios.post(`${consts.DOMAIN}/api/files/upload/`, file, {
    headers: {
      'Content-Type' : 'multipart/form-data'
    }
  })

  return res.data
}

export const getTodoSearch = async (keyword, page, size) => {


  console.log("getTodoSearch")
  const postKeyword = {...keyword}

  if(postKeyword.keyword == ''){
    postKeyword.condition = ''
  }
  else if(postKeyword.condition = "total"){
    postKeyword.condition = keywords[keyword.condition]
  }

  console.log(postKeyword)

  const res = await axios.get(`${consts.DOMAIN}/api/todos/list`, {
    params: {
      ...postKeyword,
      page: page,
      size: size
    }})

  return res.data

}

export const putTodo = async (todo) => {

  console.log(todo)

  const res = await axios.put(`${consts.DOMAIN}/api/todos/`, todo)

  return res.data


}

export const getFile = async (fileName) => {

  const res = await axios.get(`${consts.DOMAIN}/api/files/${fileName}`)

  return res

}

