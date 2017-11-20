import HouseView from '../view/houseView.js';
import QuestionModel from '../model/questionModel.js';
import AllHouseSvc from '../service/allhouseSvc';
import Storage from '../common/webStorage';

export default {
    init: function() {
        this.render();
    },

    render: function() {
      Storage.clear();
        AllHouseSvc.getAllHouseList().then(function(resp){
            console.log(resp);
            HouseView.render(resp);
        }, function(err){
            console.log(err);
        });

    }

}
