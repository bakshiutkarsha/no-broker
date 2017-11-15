import AllHouseSvc from '../service/allhouseSvc';
import Storage from '../common/webStorage';
import HouseView from '../view/houseView';

let isLoading = false;

export default{
  getOldHouse : function(){
    if(($(window).scrollTop() + $(window).height() == $(document).height())) {
      // var oldOrder = true;
      $('.loader').removeClass('hide');
      isLoading = true;
      let pageNum = Number(Storage.get('PAGE_NUMBER'));
      pageNum += 1;
      Storage.set('PAGE_NUMBER', pageNum);
       AllHouseSvc.getAllHouseList().then(function(data){
            $('.loader').addClass('hide');
            HouseView.append(data);
      },function(err){
          console.log(err);
      });
    }
   }
}
