import { addDoc, collection, doc } from "firebase/firestore"
import { db } from "./config/firebase"
import { useForm } from "react-hook-form"
import { useState } from "react"
import './todo.css'

export const Todolist = () => {
  const posts = collection(db, "todolist")
  const { handleSubmit } = useForm()
  const [todo, setTodo] = useState<string>("");

  const addData = async () => {
    const newDocRef = doc(posts);
    await addDoc(posts, {
      id: newDocRef.id,
      message: todo,
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(addData)} className="form">
        <input onChange={(e) => setTodo(e.target.value)} className="input-todo"/>
        <input type="submit" className="sub-todo"/>
      </form>
    </div>
  )
}
