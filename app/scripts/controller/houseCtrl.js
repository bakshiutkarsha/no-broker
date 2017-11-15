import HouseView from '../view/houseView.js';
import QuestionModel from '../model/questionModel.js';
import AllHouseSvc from '../service/allhouseSvc';

export default {
    init: function() {
        this.render();
    },

    render: function() {
        AllHouseSvc.getAllHouseList().then(function(resp){
            console.log(resp);
            HouseView.render(resp);
        }, function(err){
            console.log(err);
        });

    }

}
