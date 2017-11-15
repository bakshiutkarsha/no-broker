import Storage from '../common/webStorage';

let allPanArr = [ 'WPCCU6665L',
 'QHGOZ6609M',
 'ZVMGM9509K',
 'LIBSD0228W',
 'IMRNO5400W',
 'PFAXC2097H',
 'IHKEO2820C',
 'YFHSQ2954X',
 'PSBHE7810S',
 'BMPSQ3557F',
 'CVQMF9182S',
 'BJWYJ1005W',
 'VHIXH8224N',
 'SKBXV6005E',
 'BWRFQ6366R',
 'ZVVRG1123T',
 'APJJM1563W',
 'BHRKP3926C',
 'HMKQI9169C',
 'WXUMT3472Z',
 'DARTH0265N',
 'TTKCR5177P',
 'HFDIQ2987A',
 'OIXLD0944W',
 'AWTOI2432G',
 'QVZVS2000C',
 'CJUAR5671O',
 'JSUUI4748J',
 'GLGEE2600T',
 'EFSQA5253I',
 'GCPEI1143S',
 'HPNLB0121J',
 'FYZES1524T',
 'GRGOF3527A',
 'TCHRD8615N',
 'IMQOR4899N',
 'CCGXM3577V',
 'SEXQZ8267B',
 'BYLZU3182W',
 'NOGZN7338Q' ]

var currPanArr = [];
export default{

  searchFromAllPan: function(searchText){
    searchText = searchText.toLowerCase();
    let filteredPanArr = [];
    if(Storage.getCollection('PAN_DATA')){
      currPanArr = Storage.getCollection('PAN_DATA')
    } else {
      currPanArr = allPanArr;
    }
    _.each(currPanArr,function(panObj){
      let filterBy = [panObj]
      let isSearchable = _.some(filterBy, function(searchableValue){
        if(searchableValue != null){
						return (searchableValue.toLowerCase().indexOf(searchText) != -1);
				}
      });
      if(isSearchable){
        filteredPanArr.push(panObj)
      }
    });
    console.log(filteredPanArr);
    return filteredPanArr;
  },

  setNewPan: function(pan){
    allPanArr.push(pan);
    Storage.setCollection('PAN_DATA', allPanArr);
  }
}
