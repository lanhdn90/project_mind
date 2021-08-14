import React,{useState} from 'react';
import './Style.css'
import MenuManagement from './MenuManagement';
import PlantInformation from './PlantInformation'
import PlantDevices from './plantDevices'
import PlantPerformance from './plantPerformance'
import PlantElectricity from './plantElectricity'
function Management(props) {
    const [plantId, setPlantId] = useState(true);
    const [isShowItem, setIsShowItem] = useState('Plant Information')
    const [plantInfo, setPlantInfo] = useState({
        name: 'Nguyen van linh',
        systemSize: 998.76,
        installDate: '2020-11-16',
        Azimuth: null,
        Tilt: null,
        Address: '377 Nguyen Van Linh',
        Latitude: 13.16896,
        Longitude: 107.732158,
        Elevation: 310.857788
    });
    function renderSwith(param){
        switch (param) {
            case 'Devices':
                return <PlantDevices/>
            case 'Performance':
                return <PlantPerformance/>   
            case 'Electricity Cost':
                return <PlantElectricity/>   
            default:
                return <PlantInformation
                setPlantInfo={setPlantInfo}
                plantInfo={plantInfo}
                plantId={plantId}
                setPlantId={setPlantId}
                />
        }
    }

    return (
        <div className='management-main-container'>
            <MenuManagement
                setIsShowItem={setIsShowItem}
                isShowItem={isShowItem}
                plantInfo={plantInfo}
            />
            <div className="management-content">
                {renderSwith(isShowItem)}
            </div>
        </div>
    );
}

export default Management;