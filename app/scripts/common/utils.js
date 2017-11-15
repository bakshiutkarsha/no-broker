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

  }


}
