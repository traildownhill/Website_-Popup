y
console.log("Current time:");

$(document).ready(function() {
    var curr_time = Date()
    setInterval(runningTime, 1000);
    console.log(curr_time)
   });
   function runningTime() {
     $.ajax({
       url: 'timeScript.php',
       success: function(data) {
          $('#runningTime').html(data);
        },
     });
}