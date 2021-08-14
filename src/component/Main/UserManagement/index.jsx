import React, {useState, useEffect} from 'react';
import MenuUser from './MenuUser';
import ListOfGateWay from './listOfGateWay';
import ListOfPlant from './listOfPlant';
import ListOfViewUser from './listOfViewUser';
import './style.css'
import { connect } from 'react-redux';
import {
    getItemPlantAction,
    restartItemPlantAction,
    getViewerListAction,
    getGatewayListAction,
    restartItemGatewayAction,
    getItemGatewayInfoAction,
} from '../../../redux/actions'
function UserName(props) {
    const [isShowItem, setIsShowItem] = useState('Plant')
    const {
        plantList,
        getItemPlant,
        restartItemPlant,
        getViewerList,
        getGatewayList,
        // restartItemGateway,
        // getItemGatewayInfo,
        // gatewayList,
    } = props;
    const [isRestart, setIsRestart] = useState(false)
    const [pagePlant, setPagePlant] = useState(0)
    useEffect(() => {
        getViewerList({page_size : 5, page: 0})
        getGatewayList({page_size : 5, page: 0})
        setIsRestart(true)
    }, [])


    useEffect(() => {
        if(!isRestart){
            restartItemPlant()
            for(let i = pagePlant * 5; i < pagePlant * 5 + 5; i++){
                getItemPlant(plantList[i])
            }
            setIsRestart(true)
        }
    }, [isRestart])

    function renderSwith(param){
        switch (param) {

            case 'Gateways':
                return <ListOfGateWay/>   
            case 'View User':
                return <ListOfViewUser/>   
            default:
                return <ListOfPlant
                pagePlant={pagePlant}
                setIsRestart={setIsRestart}
                setPagePlant={setPagePlant}
                />
        }
    }

    return (
        <div className='management-main-container'>
            <MenuUser
                setIsShowItem={setIsShowItem}
                isShowItem={isShowItem}
            />
            <div className="management-content">
                {renderSwith(isShowItem)}
            </div>
        </div>
    );
}

const mapStateToProps = (state) =>{
    const {plantList ,gatewayList} =state.dashboardHome
    return{
        plantList: plantList,
        gatewayList: gatewayList
    }
}
  
    const mapDispatchToProps = (dispatch) =>{
      return{
        getGatewayList: (par) => dispatch(getGatewayListAction(par)),
        getItemPlant: (par) => dispatch(getItemPlantAction(par)),
        restartItemPlant: ()=> dispatch(restartItemPlantAction()),
        getViewerList: (par) => dispatch(getViewerListAction(par)),
      
    }
    }
  
export default connect(mapStateToProps,mapDispatchToProps)(UserName);

