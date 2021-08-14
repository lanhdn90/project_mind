import{
    SET_VALUE_SIDEBAR,
    SET_VALUE_NAV,
    SET_VALUE_INVERTER,
    SET_MENU_ITEM_SELECTED,
    SET_COLLAPSED,
    CLEAR_NOTIFICATION_SUCCESS,
    GET_SIDEBAR_LIST_SUCCESS,
    GET_ITEM_SIDEBAR_SUCCESS,
} from '../constants'

const initialState= {
    isValueSidebar: true,
    isValueInverter: false,
    collapsed: false,
    isValueNav: 1,
    menuItemSelected: 'e51f4000-a807-11eb-9f25-398f4b7e9473',
    plantList: [],
    itemPlantList: [
        {
            id: "42657f20-f50d-11eb-8e28-ab9a25a62006",
            namePlant: 'Plant Name 1',
            performance: 50,
            systemSize : 999.9,
            installDate: '2020-10-29',
            maintenance: '15 tháng 7 lúc 8:00',
            statusPlant: 'active'
        },
        {
            id: "85556c00-f50d-11eb-8e28-ab9a25a62006",
            namePlant: 'Plant Name 2',
            performance: 0,
            systemSize : 999.9,
            installDate: '2020-10-29',
            maintenance: '15 tháng 7 lúc 8:00',
            statusPlant: 'warning'
        },
        {
            id: "12697f20-f50d-11eb-8e28-ab9a25a62006",
            namePlant: 'Plant Name 3',
            performance: 50,
            systemSize : 999.9,
            installDate: '2020-10-29',
            maintenance: '15 tháng 7 lúc 8:00',
            statusPlant: 'active'
        },
        {
            id: "12657f40-f50d-11eb-8e28-ab9a25a62006",
            namePlant: 'Plant Name 4',
            performance: 100,
            systemSize : 999.9,
            installDate: '2020-10-29',
            maintenance: '15 tháng 7 lúc 8:00',
            statusPlant: 'success'
        },
        {
            id: "12657f21-f50d-11eb-8e28-ab9a25a62006",
            namePlant: 'Plant Name 2',
            performance: 0,
            systemSize : 999.9,
            installDate: '2020-10-29',
            maintenance: '15 tháng 7 lúc 8:00',
            statusPlant: 'warning'
        },

    ],
    notificationList: [
        {
          namePlant: "Plant 1",
          nameInverter: 'Inverter 2',
          timeWarning: '9:46 am',
          contentWarning: 'Device not communicating'
        },
        {
          namePlant: "Plant 2",
          nameInverter: 'Inverter 3',
          timeWarning: '9:47 am',
          contentWarning: 'Device not communicating'
        },
        {
          namePlant: "Plant 3",
          nameInverter: 'Inverter 4',
          timeWarning: '9:48 am',
          contentWarning: 'Device not communicating'
        },
        {
          namePlant: "Plant 4",
          nameInverter: 'Inverter 5',
          timeWarning: '9:49 am',
          contentWarning: 'Device not communicating'
        },
        {
          namePlant: "Plant 5",
          nameInverter: 'Inverter 6',
          timeWarning: '9:50 am',
          contentWarning: 'Device not communicating'
        },
    ]
}

function dashboardHome (state = initialState, action){
    switch (action.type) {
        case GET_ITEM_SIDEBAR_SUCCESS:
        return{
            ...state,
            plantList: [ action.payload,...state.plantList]
        }
      case GET_SIDEBAR_LIST_SUCCESS:
        return{
            ...state,
            plantList: [...action.payload]
        }
      case SET_VALUE_SIDEBAR:
          return{
              ...state,
              isValueSidebar: action.payload
          }
      case SET_VALUE_INVERTER:
          return{
              ...state,
              isValueInverter: action.payload
          }
      case SET_VALUE_NAV:
          return{
              ...state,
              isValueNav: action.payload
          }
      case SET_MENU_ITEM_SELECTED:
          return{
              ...state,
              menuItemSelected: action.payload
      }
      case SET_COLLAPSED:
          return{
              ...state,
              collapsed: action.payload
      }
      case CLEAR_NOTIFICATION_SUCCESS:
          return{
              ...state,
              notificationList :[...action.payload
              ],
          }     
      default:
          return state;
    }
}

export default dashboardHome;