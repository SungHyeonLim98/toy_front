import axios from "axios";
import consts from "@/consts/consts";

export async function getTodoList(){

  const res = await axios.get(`${consts.DOMAIN}/api/todos/list`)

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

export const putTodo = async (todo) => {

  const res = await axios.put(`http://localhost/todos/${todo.id}`, todo)

  return res.data


}
