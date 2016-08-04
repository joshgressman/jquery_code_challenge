

$(document).ready(function () {

$('#new').on('click', function (){
  $('#container').append('<div class="spy"><div class="spyinfo"></div><button class="delete">Delete</button><button class="change">Change</button></div>');
    // addSpy();
    
    $('.change').on('click', function (){
      $('.spy').toggleClass("colorRed");

    });

    $('.delete').on('click', function (){
      $('.spy').remove();
    });

});

// $('.spy').on('click', function (){
//   $('.change').css("background-color", "red");
//
// });


//doc ready function close
});

// function addSpy () {
//   return $('#container').append('<div class="spy"><div class="spyinfo"></div><button class="delete">Delete</button><button class="change">Change</button></div>');
