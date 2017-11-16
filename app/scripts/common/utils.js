import Storage from '../common/webStorage';

export default{
  formatINR : function (number) {
    var totalAmtSplitArr = Number(number).toString().split('.');
    var totalAmtINR = '';
    if (totalAmtSplitArr && totalAmtSplitArr.length) {
        totalAmtINR += totalAmtSplitArr[0].replace(/(\d)(?=(\d\d)+\d$)/g, '$1,');
        if (totalAmtSplitArr.length === 2) {
            totalAmtINR += '.' + totalAmtSplitArr[1];
        }
    }
    return totalAmtINR;
  },

  propertyAvailabilityTime: function(number){
    var currentDate = new Date();
    if(currentDate > number){
      return 'Ready to Move';
    } else {
      return moment(number).format('LL');
    }

  },

  initMap: function(){
    var map = new google.maps.Map(document.getElementById('map'), {
              center: {
                  lat: -33.8688,
                  lng: 151.2195
              },
              zoom: 13
          });

          var input = document.getElementById('pac-input');
          var autocomplete = new google.maps.places.Autocomplete(input);

          autocomplete.addListener('place_changed', function() {
              var place = autocomplete.getPlace();
              if (!place.geometry) {
                  return;
              }
              //console.log(place.place_id);
              Storage.set('PLACE_ID', place.place_id)
         });

      }


}
