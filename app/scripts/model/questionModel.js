import Storage from '../common/webStorage';
import Constants from '../common/constants';


export default{
  setAllLoans: function(data){
    allLoans.push(data);
    Storage.setCollection(Constants.STOARGE_ALL_LOANS,allLoans);
  },

  getAllQuestions: function(){
    return allQuestions;
  },



}

let allQuestions =[
  {
      'question': 'What\'s your mobile number?',
      'type': 'number',
      'mandatory': true
  },
  {
      'question': 'What\'s your email id?',
      'type': 'email',
      'mandatory': true
  },
  {
      'question': 'What\'s your Date of birth',
      'type': 'date',
      'mandatory': true
  },
  {
      'question': 'What\'s your Name',
      'type': 'text',
      'mandatory': true
  },
  {
      'question': 'How much do you spend on food?',
      'type': 'single-select-multi-choice',
      'options': ['0 - 500', '500 - 1000', '1000 - 5000', '5000 - 10000'],
      'mandatory': false
  },
  {
      'question': 'How much do you spend on fuel?',
      'type': 'single-select-multi-choice',
      'options': ['0 - 500', '500 - 1000', '1000 - 5000', '5000 - 10000'],
      'mandatory': false
  },
  {
      'question': 'How much do you spend on shopping?',
      'type': 'multi-select-multi-choice',
      'options': ['0 - 500', '500 - 1000', '1000 - 5000', '5000 - 10000'],
      'mandatory': false
  },
  {
      'question': 'How much do you spend on medicines or health care?',
      'type': 'single-select-multi-choice',
      'options': ['0 - 500', '500 - 1000', '1000 - 5000', '5000 - 10000'],
      'mandatory': false
  },
  {
      'question': 'How much do you spend on travel?',
      'type': 'multi-select-multi-choice',
      'options': ['0 - 500', '500 - 1000', '1000 - 5000', '5000 - 10000'],
      'mandatory': false
  },
  {
      'question': 'How much do you spend on movies?',
      'type': 'multi-select-multi-choice',
      'options': ['0 - 500', '500 - 1000', '1000 - 5000', '5000 - 10000'],
      'mandatory': false
  }
];
