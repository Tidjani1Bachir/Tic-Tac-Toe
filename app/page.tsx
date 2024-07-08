"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import cell from './components/cell';
import Cell from './components/cell';

const winnigCombos = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
]
export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go,setGo]=useState("circle");

  const [winnigMessege,setWinnigMessege]=useState("");
// show winnig state dependingon the winnig array

useEffect(()=> {
winnigCombos.forEach((combo)=> {
const circleWins =combo.every((cell)=>cells[cell] ==="circle")

const crossWins =combo.every((cell)=>cells[cell] ==="cross")
if(circleWins) {
setWinnigMessege("circle Wins !")
}else if(crossWins) {
  setWinnigMessege("cross Wins !")
}
})
},[cells])

// draw state
useEffect(()=> {
if(cells.every((cell)=> cell !=="")&& !winnigMessege)
setWinnigMessege("Draw !")
},[cells,winnigMessege])

// create 9 cell divs with sending ids and go andcells arrayand winnig messege
  return (
    <main>
      <div className='gameboard'>
        {cells.map((cell, index) => (
          <Cell id={index} go={go} setGo={setGo} key={index} cells={cells} setCells={setCells} cell={cell} winnigMessege={winnigMessege}/>

        )

        )}
      </div>
      
      <div className='winning-messege'>{winnigMessege}</div>
 {!winnigMessege && <div className='turn'>{`it's now ${go} turn`}</div>}
    </main>
  )
}
