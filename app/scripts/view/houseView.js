import DomEventHandler from '../common/domEventHandler.js';
import HouseTemplate from '../../templates/house.html';
import CardComponentTemplate from '../../templates/components/cardComponent.html';
import FilterComponentTemplate from '../../templates/components/filterComponent.html';
import FilterDOMEvents from '../dom-events/filterDOMEvents';
import HeaderDOMEvents from '../dom-events/headerDOMEvents';
import CardDOMEvents from '../dom-events/cardDOMEvents';
import Utils from '../common/utils';
import Storage from '../common/webStorage';

export default {
	render (data) {
		this.viewModel = data;
		this.registerDOMEvents(data);
		Utils.initMap();
	},

	registerDOMEvents(data){
		// Storage.clear();
		DomEventHandler.renderMyTemplate('globalCntr', HouseTemplate);
		this.renderFilter();
		this.renderHouses(data);

		DomEventHandler.bindEvent('search-location', 'click', HeaderDOMEvents.searchLocation);

		let $window = $(window);
		DomEventHandler.bind($window, 'scroll', CardDOMEvents.getOldHouse);
	},

	renderHouses(data){
		DomEventHandler.renderMyTemplate('list-cntr', CardComponentTemplate, data);
	},

	renderFilter(){
		DomEventHandler.renderMyTemplate('filter-cntr', FilterComponentTemplate);
		FilterDOMEvents.initiateSlider();

		DomEventHandler.bindClassEvent('bhk-type', 'click', FilterDOMEvents.applyBHKFilter);
		DomEventHandler.bindClassEvent('styled-checkbox', 'change', FilterDOMEvents.applyFurnishFilter);
		DomEventHandler.bindClassEvent('range-filter', 'change', FilterDOMEvents.applyRangeFilter);

		DomEventHandler.bindEvent('reset', 'click', FilterDOMEvents.resetFilter);
	},

	append(appendData){
		DomEventHandler.appendMyTemplate('list-cntr', CardComponentTemplate, appendData);
		CardDOMEvents.resetLoaded();
	}



};
