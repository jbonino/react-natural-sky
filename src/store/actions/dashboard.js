import * as actionTypes from "./actionTypes";

//thunk is passed an extraArgument: swpc.js

export const getThreedayForcast = () => {
  return (dispatch, state, swpcJS) => {
    swpcJS.getThreeDayForcast()
      .then(res => {
        dispatch(getThreedayForcastSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        
      });
  };
};
export const getThreedayForcastSuccess = data => {
  return {
    type: actionTypes.GET_THREEDAY_FORCAST_SUCCESS,
    data: data
  };
};
export const getThreedayForcastFailed = error => {
  console.log(error);
};

export const getWeeklySummary = () => {
  return (dispatch, state, swpcJS) => {
    swpcJS.getWeeklySummary()
      .then(res => {
        dispatch(getWeeklySummarySuccess(res.data));
      })
      .catch(err => {
        dispatch(getWeeklySummaryFailed(err));
      });
  };
};
export const getWeeklySummarySuccess = data => {
  return {
    type: actionTypes.GET_WEEKLY_SUMMARY_SUCCESS,
    data: data
  };
};
export const getWeeklySummaryFailed = error => {
  console.log(error);
};

export const getAlerts = () => {
  return (dispatch, state, swpcJS) => {
    swpcJS.getAlerts()
      .then(res => {
        dispatch(getAlertsSuccess(res.data));
      })
      .catch(err => {
        dispatch(getAlertsFailed(err));
      });
  };
};
export const getAlertsSuccess = data => {
  return {
    type: actionTypes.GET_ALERTS_SUCCESS,
    data: data
  };
};
export const getAlertsFailed = error => {
  console.log(error);
};

export const getThreehourForcast = () => {
  return (dispatch, state, swpcJS) => {
    swpcJS.getThreeHourForcast()
      .then(res => {
        dispatch(getThreehourForcastSuccess(res.data));
      })
      .catch(err => {
        dispatch(getThreehourForcastFailed(err));
      });
  };
};
export const getThreehourForcastSuccess = data => {
  return {
    type: actionTypes.GET_THREEHOUR_FORCAST,
    data: data
  };
};
export const getThreehourForcastFailed = error => {
  console.log(error);
};


