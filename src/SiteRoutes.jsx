import { Route, Routes } from "react-router-dom";
import NumberRandom from "./a random  number/NumberRandom";
import Todo from "./todo list app/Todo";

export default function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/numberRandom" element={<NumberRandom />}  />
      <Route path="/todoList" element={<Todo />}  />
    </Routes>
  )
}