import AllHouseSvc from '../service/allhouseSvc';
import Storage from '../common/webStorage';
import HouseView from '../view/houseView';

let isLoading = false;

let checkDataLength = function(appendData){
  if(appendData.data.length == 0){
    Storage.set('DATA_LENGTH',0);
  } else {
    Storage.set('DATA_LENGTH',1);
  }
}

export default{
  getOldHouse : function(){
    if(($(window).scrollTop() + $(window).height() == $(document).height()) && (!isLoading) && (Storage.get('DATA_LENGTH') != 0)) {
      // var oldOrder = true;
      $('.loader').removeClass('hide');
      isLoading = true;
      let pageNum = Number(Storage.get('PAGE_NUMBER'));
      pageNum += 1;
      Storage.set('PAGE_NUMBER', pageNum);
       AllHouseSvc.getAllHouseList().then(function(data){
            $('.loader').addClass('hide');
            HouseView.append(data);
            console.log(this);
            checkDataLength(data);
      },function(err){
          console.log(err);
      });
    }
  },

  resetLoaded : function () {
     isLoading = false;
  },

  checkDataLength:checkDataLength
}
