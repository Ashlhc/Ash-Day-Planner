$(document).ready(function () {

// Save Button click function and local storage
    $(".saveBtn").on("click",function(){
      var hIndex = $(this).parent()[0].id;
      var eventsText = $(this).siblings("textarea")[0].value.trim();
      localStorage.setItem(hIndex,eventsText);
    })
    
    var currentHour = Number(dayjs().format());
    var time = dayjs().format('MMM D, YYYY,hh:mm A');
    $("#currentTime").text(time);

    var slots = $(".container-lg").children();
    for (i=0;i<slots.length;i++) {
// loops 
      var hourId = slots[i].id;

      var hour = Number(hourId.slice(hourId.search("-")+1));

      if (currentHour<=hour) {
        if (hour===currentHour) {
          $(slots[i]).addClass("present")
        } else {
          $(slots[i]).addClass("future")
        }
      } else {
        $(slots[i]).addClass("past")
      }
//localStorage info
      var stored = localStorage.getItem(hourId)
      $("#"+hourId).children("textarea").val(stored);
    }

 
  });
  