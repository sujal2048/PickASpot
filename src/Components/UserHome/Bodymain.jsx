import {React,useState} from 'react'
import Section from './UserContent/Section'
import Table from './UserContent/Table';
import Data from "../data/Data"
import { useEffect } from 'react';


//passing data to tables and displaying floors
const Bodymain = () => {
 
 
    const [Floor, setFloor] = useState();
    const [activeParkingId, setActiveParkingId] = useState(1);
    const [parkingData, setParkingData] = useState(Data.data[0]);
    let handleChangeActiveParkingId=(resp)=>{
        setActiveParkingId(resp);   
    }
    useEffect(() => {
        setFloor(Data.data[activeParkingId-1].floor[0]);
    }, [activeParkingId])
  
    console.log(Data.data[1].floor[0]);

    const floors=4;

    return (
        <>
         <div className="container">
            <div className="row">
                <div className="col-lg-4  col-md-12 justify-content-left ">
                    <Section handleChangeActiveParkingId={handleChangeActiveParkingId}/>
                    
                </div>
                <div className="col-8 text-center mt-3" >
                    <h3 style={{color:"#03045E"}}>{Data.data[activeParkingId-1].pakingspace_name}</h3>
                    <div className="row mt-4 text-info" >
                    {Data.data[activeParkingId-1].floor.map((item)=>{
                       return (
                           <>
                           {
                               ((Data.data[activeParkingId-1].floor[item.floor_no-1])==Floor)? 
                                <div className="col">
                                        <button onClick={() => {setFloor(Data.data[activeParkingId-1].floor[item.floor_no-1])}} className=' btn  active' style={{background:"#03045E",color:"#fff"}}>{`Floor ${item.floor_no}`}</button>
                                </div>
                                :  
                                <div className="col">
                                    <button onClick={() => {setFloor(Data.data[activeParkingId-1].floor[item.floor_no-1])}} className=' btn btn-primary active'>{`Floor ${item.floor_no}`}</button>
                                </div>
                           }
                           </>
                         
                       )
                    }
                    )}

                    </div>
                    <div className="row mt-4">
                    {Floor&&Floor.section?Floor.section.map((item)=>{
                        return (
                            <div className="col border-end">
                                <h5 style={{color:"#03045E"}}>Section {item.sec_id}</h5>
                                <Table occupied={item.occupied_space} free={item.free_space} total_space={item.section_total_capacity}/>
                            </div>
                        )  
                    }):null}
                        
                    </div>
                   
                </div>
            </div>
        </div>   
        </>
    )
}

export default Bodymain
