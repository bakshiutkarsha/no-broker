import AllHouseSvc from '../service/allhouseSvc';
import Storage from '../common/webStorage';
import HouseView from '../view/houseView';
import Utils from '../common/utils';
import CardDOMEvents from '../dom-events/cardDOMEvents';


let typeArr = [];

let _resetPageNumber = function(){
  Storage.set('PAGE_NUMBER', 1);
}

let applyBHKFilter = function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    _.pull(typeArr, $(this).data('type'));
    if(typeArr.length != 0){
      var typeStr = 'type='+typeArr.toString();
    } else {
      typeStr = '';
    }
    Storage.set('TYPE_URL', typeStr);
  } else {
    $(this).addClass('active');
    typeArr.push($(this).data('type'));

    let typeStr = 'type='+typeArr.toString();
    Storage.set('TYPE_URL', typeStr);
  }
    checkForOtherFilters();
}

let applyFurnishFilter = function(){
  let checkedValues = $('input:checkbox:checked').map(function() {
    return this.value;
  }).get();

  let furnishStr = 'furnishing='+checkedValues.toString();
  Storage.set('FURNISHING_URL', furnishStr);
  checkForOtherFilters();
}

let applyRangeFilter = function(){
  let lower = $('#lower-value').val();
  let upper = $('#upper-value').val();
  lower = lower.replace(/,/g,'');
  upper = upper.replace(/,/g,'');
  let rangeArr =[];
  rangeArr.push(lower, upper);

  let rangeStr = 'rent='+rangeArr.toString();
  Storage.set('RANGE_URL', rangeStr);
  checkForOtherFilters();
}

let checkForOtherFilters = function(){
  let finalParam = '';
  if(Storage.get('TYPE_URL')){
    finalParam+= '&'+Storage.get('TYPE_URL')
  }

  if(Storage.get('FURNISHING_URL')){
    finalParam+= '&'+Storage.get('FURNISHING_URL')
  }

  if(Storage.get('RANGE_URL')){
    finalParam += '&'+Storage.get('RANGE_URL')
  }
  _resetPageNumber();
  _changeView(finalParam);
}

let _changeView = function(filterStr){
  $('.loading').removeClass('hide');
  Storage.set('FINAL_PARAM', filterStr)
  AllHouseSvc.getAllHouseList().then(function(respData){
    $('.loading').addClass('hide');
    HouseView.renderHouses(respData);
    CardDOMEvents.checkDataLength(respData)
  }, function(err){
    console.log(err);
  })
}

let resetFilter = function(){
  let placeId = Storage.get('PLACE_ID')
  Storage.clear();
  Storage.set('PLACE_ID',placeId)
  HouseView.renderFilter();
  _changeView();
}

let initiateSlider = function(){
  let nonLinearSlider = document.getElementById('range');

  noUiSlider.create(nonLinearSlider, {
  	connect: true,
  	behaviour: 'tap',
  	start: [ 0, 475000 ],
  	range: {
  		'min': [ 0 ,500],
  		'10%': [ 500, 500 ],
  		'50%': [ 4000, 2000 ],
  		'max': [ 475000 ]
  	}
  });

  let nodes = [
  	document.getElementById('lower-value'),
  	document.getElementById('upper-value')
  ];

  nonLinearSlider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
	   nodes[handle].value = Utils.formatINR(values[handle].slice(0, -3));
     applyRangeFilter();
  });

}

export default{
  applyBHKFilter,
  applyFurnishFilter,
  resetFilter,
  initiateSlider,
  applyRangeFilter
}
