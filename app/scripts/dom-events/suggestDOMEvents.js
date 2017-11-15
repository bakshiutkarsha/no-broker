import SuggestionModel from '../model/suggestionModel';
import Suggestionview from '../view/suggestionView';

let searchForPan = function(){
  let text = $(this).val();
  checkPANvalidation(text)
  Suggestionview.renderDropDown(SuggestionModel.searchFromAllPan(text));
}

let checkPANvalidation  = function(text){
    let NumRegex = /^[0-9]+$/
    let textRegex = /^[A-z]+$/

    if(text.length == 5){

      if(!textRegex.test(text)){
        showErr();
      }else {
        showDefault();
      }
    }

    if(text.length == 6){
      if(!NumRegex.test(text.slice(-1))){
        showErr();
      }else {
        showDefault();
      }
    }

    if(text.length == 7){
      if(!NumRegex.test(text.slice(-1))){
        showErr();
      }else {
        showDefault();
      }
    }

    if(text.length == 8){
      if(!NumRegex.test(text.slice(-1))){
        showErr();
      }else {
        showDefault();
      }
    }

    if(text.length == 9){
      if(!NumRegex.test(text.slice(-1))){
        showErr();
      }else {
        showDefault();
      }
    }

    if(text.length == 10){
      if(!textRegex.test(text.slice(-1))){
        showErr();
      } else {
        showAddBtn();
      }
    }
  }

  let showErr = function(){
    $('.err').removeClass('hide');
  }

  let showDefault = function(){
    $('.err').addClass('hide');
  }

  let showAddBtn = function(){
    $('.add-btn').removeClass('hide');
  }

  let checkForLengths = function(e){
    let textLength = $(this).val().length
    if( (textLength > 4) && (e.keyCode != 8)){
      if($('.err').hasClass('hide')){
        return true;
      } else {
        e.preventDefault();
      }
    }
  }

  let addPan = function(){
    SuggestionModel.setNewPan($('#search-pan').val());
    Suggestionview.render();

  }

export default{
  searchForPan,
  checkPANvalidation,
  checkForLengths,
  addPan
}
