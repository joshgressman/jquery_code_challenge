

$(document).ready(function () {
var count = 0;

$('#new').on('click', function (){
  $('#container').append('<div class="spy"><div class="spyinfo"></div><button class="delete">Delete</button><button class="change">Change</button></div>');
      count += 1;
 console.log(count);
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

 //  function addSpy () {
 //    $('#container').append('<div class="spy"><div class="spyinfo"></div><button class="delete">Delete</button><button class="change">Change</button></div>');
 //   return ;
 // }
