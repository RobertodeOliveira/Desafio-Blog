import { useState } from "react";
export default function Estatico1() {
  const [num,setNum] = useState(Math.random())
  return(
    <div>
      <h1>Estático #01 - versão</h1>
      <h2>{num}</h2>
    </div>
  )
}