import * as actionTypes from "../actions/actionTypes";
import * as swpc from '../../api/swpc'

const initState = {
  //holds { alert: "alert", touched: false }
  alerts: [
    {
      id: '',
      alert: '',
      time: '',
      thresholdReached: '',
      station: '',
      impacts: '',
      touched: false
    }
  ],
  threeHour: [
    [
      //day
      [
        //'date', 'kp-index', 'observed|estimated|predicted', 'noaa_scale'
      ]
    ]
  ],
  threeDayLights: {
    title: "",
    greatesObserved: "",
    greatestExpected: "",
    kpBreakdown: "",
    dateRange: "",
    dateTable: "",
    rationale: ""
  },
  threeDaySolar:{},
  threeDayRadio:{
    rationale: '',
    blackout: ''
  },
  weekly: {
    highlights: "",
    forcast: ""
  },
  error: true
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
    case actionTypes.GET_THREEDAY_FORCAST_SUCCESS:
      return {
        ...state,
        threeDayLights: swpc.parseThreeDayLights(action.data),
        threeDaySolar: swpc.parseThreeDaySolar(action.data),
        threeDayRadio: swpc.parseThreeDayRadio(action.data),
        error: false
      };
    case actionTypes.GET_WEEKLY_SUMMARY_SUCCESS:
      return {
        ...state,
        weekly: swpc.parseWeeklySummary(action.data),
        error: false
      };
    case actionTypes.GET_ALERTS_SUCCESS:
      return {
        ...state,
        alerts: swpc.parseAlerts(action.data),
        error: false
      };
    case actionTypes.GET_THREEHOUR_FORCAST:
      return {
        ...state,
        threeHour: swpc.parseThreehourForcast(action.data),
        error: false
      };
  }
};



export default reducer;
