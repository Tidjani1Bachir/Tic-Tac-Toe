import { Dispatch, SetStateAction } from "react";
// type of cell props
type CellProps = {
    id:number,
  go:string,
  setGo: Dispatch<SetStateAction<string>>
  cells:string[]
  setCells:Dispatch<SetStateAction<string[]>>
  cell:string
  winnigMessege:string
}

const Cell =({go,setGo,id ,cells,setCells,cell,winnigMessege}:CellProps) => {
  const handleClick = () => {
    if(winnigMessege) {
return;
    }
    const notTaken = !cells[id]
if(notTaken) {
    if(go === "circle"){
        handleCellChange("circle");
        setGo("cross")
      }else if(go ==="cross") {
        handleCellChange("cross");
        setGo("circle")
      }
      }
}

// get the cells arrayand and create new copy of itrerender the valueof the elements that we clicked in by it's id and change reassigne theold array with the new array (it's copy)
  const handleCellChange = (cellToChange:string) => {
  let copyCells = [...cells];
  copyCells[id]=cellToChange
  setCells(copyCells);

  }

return <div className="X-O-Box" onClick={handleClick}>
{/* if the cells array withe id of the element that we clicked in have value show xor o deppending on that else let if empty until the user click  */}
  <div className={cell}>{cell ? (cell === "circle" ? "O":"X"):""}</div>
</div>

}
export default Cell;