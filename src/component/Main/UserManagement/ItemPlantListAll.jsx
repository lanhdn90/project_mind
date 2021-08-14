import React from 'react';
// import moment from 'moment';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import {
    getItemPlantInfoAction,
} from '../../../redux/actions'
function ItemPlantListAll(props) {
    const {
        item,
        setPlantId,
        getItemPlantInfo,
    } = props;

    return (
        <div
            key={item.id}
            onClick={()=>{
            getItemPlantInfo(item);
            setPlantId(false);
            }}  
        className="item-plant-listAll">
            <div className="code-plant-item">
                {item.code}
            </div> 
            <div className="label-plant-item">
                {item.label}
            </div>
            <div className={`status-plant-item `}>
                {item.system_size} kW
            </div>
            <div className="plant-activity-time">
            <Moment  format={"DD-MM-YYYY THH:mm:ss"}>
                {parseInt(item.installation_date)}
            </Moment>
            </div>
        </div>
    );
}

// const mapStateToProps = (state) =>{
//     const {itemPlantList} =state.userManagementReducer
//     return{
//         itemPlantList: itemPlantList,
//     }
// }
  
const mapDispatchToProps = (dispatch) =>{
    return{
        getItemPlantInfo: (par) => dispatch(getItemPlantInfoAction(par)),

    }
}
  
export default connect(null,mapDispatchToProps)(ItemPlantListAll);
// export default ItemPlantListAll;