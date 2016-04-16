import {
  BASIC_SET_API_URL,
  GLOBAL_SET_AUTHORIZATION_TOKEN,
  GLOBAL_SET_CONSUMER_ID,
  GLOBAL_SET_MODULE_ID,
  GLOBAL_SET_SCREEN_ID,
  GLOBAL_SET_LOCATION_ID,
  GLOBAL_SET_LEVEL_ID,
  GLOBAL_SET_USER_ID,
  GLOBAL_SET_SELECTED_MENU_ITEM,
} from '../constants/basic-constants';

function dmGlobalReducer(state = {}, action) {
  switch (action.type) {
  case BASIC_SET_API_URL:
    return {
      ...state,
      apiUrl: action.value
    };
  case GLOBAL_SET_AUTHORIZATION_TOKEN:
    return {
      ...state,
      authorizationToken: action.value
    };
  case GLOBAL_SET_CONSUMER_ID:
    return {
      ...state,
      consumerId: action.value
    };
  case GLOBAL_SET_MODULE_ID:
    return {
      ...state,
      moduleId: action.value
    };
  case GLOBAL_SET_SCREEN_ID:
    return {
      ...state,
      screenId: action.value
    };
  case GLOBAL_SET_LOCATION_ID:
    return {
      ...state,
      locationId: action.value
    };
  case GLOBAL_SET_LEVEL_ID:
    return {
      ...state,
      levelId: action.value
    };
  case GLOBAL_SET_USER_ID:
    return {
      ...state,
      userId: action.value
    };
  case GLOBAL_SET_SELECTED_MENU_ITEM:
    return {
      ...state,
      selectedMenuItem: action.value
    };
  default:
    return state;
  }
}

export default dmGlobalReducer;
