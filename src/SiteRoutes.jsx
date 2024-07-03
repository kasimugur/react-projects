import { Route, Routes } from "react-router-dom";
import NumberRandom from "./a random  number/NumberRandom";

export default function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/numberRandom" element={<NumberRandom />}  />
    </Routes>
  )
}