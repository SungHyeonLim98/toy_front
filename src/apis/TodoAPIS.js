import axios from "axios";
import consts from "@/consts/consts";
import {tr} from "vuetify/locale";


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
export const postTodo = async (result) => {

  const res = await axios.post(`${consts.DOMAIN}/api/todos/`, result)

  return res.data


}

export const postUpload = async (files) => {

  const res = await axios.post(`${consts.DOMAIN}/api/files/upload`, files)

  return res.data


}

export const deleteTodoImages = async (images) => {

  console.log("result: ", images)
  const res = await axios.delete(`${consts.DOMAIN}/api/files/delete`, {
    data: {
      fnames: images
    }
  })

  return res.data;

}

export const getTodoSearch = async (keyword, page, size) => {

  if(keyword.condition == 'total') keyword.condition = 'title,writer'

  const res = await axios.get(`${consts.DOMAIN}/api/todos/list`, {
    params: {
      keyword: keyword.keyword,
      condition: keyword.condition,
      page: page,
      size: size
    }})

  return res.data

}

export const putTodo = async (todo, page) => {

  const res = await axios.put(`${consts.DOMAIN}/api/todos/list`, {todo})

  return res.data


}
