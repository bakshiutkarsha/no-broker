import URL from '../common/url.js';
import Storage from '../common/webStorage.js';
import ServiceConnector from '../common/serviceConnector.js';

export default{
  getAllHouseList: function(){
      let pageNo = 1;
      let place_id = Storage.get('PLACE_ID');

      if(Storage.get('PAGE_NUMBER')){
         pageNo = Storage.get('PAGE_NUMBER');
      }
      Storage.set('PAGE_NUMBER', pageNo);

      let url = URL.getApiUrl().GET_ALL_HOUSES.replace(':place_id:',place_id).replace(':pageNo:', pageNo);
      if(Storage.get('FINAL_PARAM')){
        url += Storage.get('FINAL_PARAM')
      }
      return ServiceConnector.get(url);
  }
}
