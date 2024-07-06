import { Route, Routes } from "react-router-dom";
import NumberRandom from "./a random  number/NumberRandom";
import Todo from "./todo list app/Todo";
import QuoteGenerator from "./quote generator/QuoteGenerator";

export default function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/numberRandom" element={<NumberRandom />}  />
      <Route path="/todoList" element={<Todo />}  />
      <Route path="/quoteGenerator" element={<QuoteGenerator />}  />
    </Routes>
  )
}