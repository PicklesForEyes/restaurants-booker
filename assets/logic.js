$(document).ready(function() {

  //form logic with dummy variables/naming

  $('#submit').on('click', function() {
    var obj = {
      name : $('name-input').val().trim(),
      phoneNum : $('phone-number-input').val().trim(),
      email : $('email-input').val().trim(),
      unique : $('id').val().trim()
    }
    addTable(obj);
  });

  function addTable(obj) {
    //send to express server here
  }


  //page changing, dummy variables
  $('#tables').on('click', function() {
    drawTables();
  })

  $('#reserve').on('click', function() {
    drawReserve();
  })

  $('#home').on('click', function() {
    drawHome();
  })



})