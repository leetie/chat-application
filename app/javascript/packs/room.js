// console.log("hello from room.js")

// var x = document.getElementById('send-button');
// var y = document.getElementById('room_message_message')
// console.log(y)
// x.addEventListener("click", function () {
//   y.value = "";
// })

$(function() {
  $('#new_room_message').on('ajax:success', function(a, b,c ) {
    $(this).find('input[type="text"]').val('');
  });
});
