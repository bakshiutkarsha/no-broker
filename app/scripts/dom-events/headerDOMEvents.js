import Storage from '../common/webStorage';
import AllHouseSvc from '../service/allhouseSvc';
import HouseView from '../view/houseView';

export default{
  searchLocation: function(){
    AllHouseSvc.getAllHouseList().then(function(respData){
      $('.loading').addClass('hide');
      HouseView.renderHouses(respData);
    }, function(err){
      console.log(err);
    })
  }
}
