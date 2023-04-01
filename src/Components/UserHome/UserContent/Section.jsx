import React,{useState} from 'react'
import { useEffect } from 'react'
//import "../../../Css/section.css"
import Userdata from '../../data/Userdata'
import Parkingarea from './Parkingarea'



//this is taking data from user data and passing data to parking area
const Section = (props) => {
const [activeParkingId, setActiveParkingId] = useState("1");
var ans=1;
useEffect(() => {
    props.handleChangeActiveParkingId(activeParkingId);
}, [activeParkingId])

   console.log(localStorage.getItem('id'));
  

    return (
        <div className=" mt-4 ">
             {Userdata[0].parkingspace_info.map((item)=>{
                
                 let per=(item.parkingspace_occupiedspace*1.0/item.parkingspace_total_capacity)*100;
                 
                    
                return (
                    <>
                   {
                       (item.parkingspace_id===activeParkingId)?
                       <a onClick={() =>{setActiveParkingId(item.parkingspace_id)}}>
                            <Parkingarea background="#03045E" image={item.parkingspace_imageUrl} name={item.parkingspace_name} percentage={per} occupied={item.parkingspace_occupiedspace} total={item.parkingspace_total_capacity}/>
                      </a>
                      :
                      <a onClick={() =>{setActiveParkingId(item.parkingspace_id)}}>
                           <Parkingarea background="#015BA0" image={item.parkingspace_imageUrl} name={item.parkingspace_name} percentage={per} occupied={item.parkingspace_occupiedspace} total={item.parkingspace_total_capacity}/>
                      </a>
                      
                       
                   }  
                   </>   
                   
                )
                
                }
            )}
       
    </div>
    
    )
}

export default Section
