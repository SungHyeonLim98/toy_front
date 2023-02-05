import axios from "axios";
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
export const postTodo = async (todo) => {

  const res = await axios.post(`${consts.DOMAIN}/api/todos/`, todo)

  return res.data


}

export const getTodoSearch = async (keyword, page, size) => {

  const res = await axios.get(`${consts.DOMAIN}/api/todos/list`, {
    params: {
      ...keyword,
      page: page,
      size: size
    }})

  return res.data

}

export const putTodo = async (todo, page) => {

  const res = await axios.put(`${consts.DOMAIN}/api/todos/list`, {todo})

  return res.data


}
