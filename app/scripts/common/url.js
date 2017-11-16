import Env from './env.js';

export default {

    BASE_URL: {
        STAGE: 'https://www.nobroker.in/api/v1',
        PROD: 'https://www.nobroker.in/api/v1'
    },


    API_URLS: {
        GET_ALL_HOUSES: ':BASE_URL:/property/filter/region/:place_id:?pageNo=:pageNo:',
    },


    getApiUrl: function () {
        //dummy commit
        for (var prop in this.API_URLS) {
            this.API_URLS[prop] = this.API_URLS[prop].replace(':BASE_URL:', this.BASE_URL[Env.CURR_ENV]);
        }
        return this.API_URLS;
    }


}
