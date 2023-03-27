import { collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { db } from "./config/firebase"
import { useEffect, useState } from "react"
import { Todolist } from "./todolist";
import './todo.css'
interface Todo {
    id: string;
    message: string;
  }
export const Getdata = () => {
    const posts = collection(db, "todolist");
    const [todos, setTodos] = useState<Todo[] | null>(null);
    const get = async () => {
      const querySnapshot = await getDocs(posts);
      const todosData = querySnapshot.docs.map((doc) => ({ id: doc.id, message: doc.data().message }));
      setTodos(todosData);
    };
    useEffect(() => {
        get()
    },)
    const deletetodo = async (id: string) => {
      try {
        const deleteto = doc(db, "todolist", id);
        await deleteDoc(deleteto);
        setTodos((prev) => prev && prev.filter((todo) => todo.id !== id));
      } catch (err) {
        console.log(err);
      }
    };
    
    
    
    return (
    <div className="contrainer">

      <h1>Todo List</h1>
    <Todolist />
    <div className="contrainer2">
      <div className="box"> 
    {todos?.map((todo) => (
        <div key={todo.id} className="input">
        <p className="todo">{todo.message}</p>
        <div>
        {todos && <button className="button">edit</button> }
        {todos && <button onClick={() => deletetodo(todo.id)} className="button">delete</button>}
        </div>
        </div>
        ))}
        </div>
      </div>  
    </div>
    )
}