import React, { useEffect, useState } from 'react'
// import car from "../../../images/car.png"
import empty from "../../../images/empty.png"
import car from '../../../images/wolf.png'
const Table = (props) => {
  console.log(props);
  var rows = [], i = 0, len = Math.ceil(props.occupied/2);
  
  var cols=[],j=0, len2=Math.ceil((props.free)/2);
  const [tableData, setTableData] = useState([]);
  while (++i <= len) rows.push(i);
  while (++j <= len2) cols.push(j);
  useEffect(() => {
  let tempTableData=[];
  let tempOccu=props.occupied;
  let tempFree=props.free;
    for(let i=0;i<(props.total_space/2);i++){
      let tempObj=[];
      for(let j=0;j<2;j++){
        if(tempOccu){
          tempOccu--;
          tempObj.push(car);
        }
        else if(tempFree){
          tempFree--;
          tempObj.push(empty);
        }
      }  
      tempTableData.push(tempObj);
    }
    console.log(tempTableData);
    setTableData(tempTableData);
  }, [props])
    return (
        <>
        <p style={{color:"#03045E"}}>Occupied: {props.occupied}  Free: {props.free}</p>
 <table class="table">
 
  <tbody>

 
  
    {tableData&&tableData.map( (ele)=>{
    return(  <tr>
     <td><img style={{height:"2rem"}} src={ele[0]}></img></td>
   
     <td><img style={{height:"2rem"}} src={ele[1]}></img></td>
   
    
      </tr>)
    })}
    {/* {cols.map(function (j) {
    return(  <tr>
     <td><img  style={{height:"1rem"}} src={empty}/></td>
   
     <td><img  style={{height:"1rem"}} src={empty}/></td>
    
      </tr>)
    })} */}

   
     
    
  
  </tbody>
</table>  
        </>
    )
}

export default Table
