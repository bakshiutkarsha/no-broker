import HouseCtrl from '../controller/houseCtrl.js';
import SuggestionCtrl from '../controller/suggestionCtrl.js';

export default {
    toQuestion: function () {
        HouseCtrl.init();
    },
    toSuggestion: function(){
       SuggestionCtrl.init();
    }
};
