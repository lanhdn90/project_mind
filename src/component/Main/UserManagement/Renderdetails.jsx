import React from 'react';
import { HiMinusCircle } from "react-icons/hi";
function Renderdetails(props) {
    const {item,index, setDataPlant, dataPlant}=props;

    

    const deleteItemPlant = (index)=>{
        dataPlant.splice(index,1);
        setDataPlant([...dataPlant]);
    }
    return (

            <div key={index} className="item-plant-viewUser">
            <div className="code-item-plant">
                {item.code}
            </div> 
            <div className="label-item-plant">
                {item.name}
            </div>
            <div className={`status-item-plant `}>
                {item.systemSize}
            </div>
            <div className="item-plant-activity-time">
                {item.installDate}
                
                <HiMinusCircle className='icon-delete'
                        onClick={()=>{deleteItemPlant(index)}}
                />
                
            </div>
        </div>

    );
}

export default Renderdetails;