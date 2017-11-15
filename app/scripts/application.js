import RouteHandler from './common/routeHandler';
import Constants from './common/constants';

(function () {
	let routeConfig = {};
  routeConfig[Constants.TO_QUESTION] = RouteHandler.toHouse;
	routeConfig[Constants.TO_SUGGESTION] = RouteHandler.toSuggestion;
	routeConfig['*'] = RouteHandler.toQuestion;
	routie(routeConfig);

})();
