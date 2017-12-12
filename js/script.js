'use strict';

$(document).ready(function() {

// Variables for JQuery
  var data = {
    totalNuts:0,
    totalCurrent:0,
    totalFans: 0
  };

// Function Interval Timing
  setInterval(biebs,1000);

// Function to Count Clicks and Update Browser Tab
  function biebs() {
    data.totalNuts += data.totalFans;
    data.totalCurrent += data.totalFans;
    document.title = ('Beliebers - ' + data.totalCurrent);
    updateReport();
  };

// Function to Update Click Totals and Running Total
  function updateReport() {
    $("#currentTotal").text(Math.floor(data.totalCurrent));
    $("#fans").text((data.totalFans/50).toFixed(1));
  };

// Counter to Save Clicks
  $("#bieber").click(function (){
    data.totalNuts ++;
    data.totalCurrent ++;
    updateReport();
  });

// "Cash-out" Buttons
  $(".button").click(function (){
    var addVal = $(this).data("cost");
    if ($(this).data("cost") < data.totalCurrent) {
      data.totalCurrent -=  parseFloat($(this).data("cost").toPrecision(1));
      data.totalFans += parseFloat($(this).data("val"));
      $(this).children("span").html( parseInt($(this).children("span").html()*1.15));
      $(this).data("cost", parseInt($(this).data("cost") * 1.15));
    }

// Changes Picture Based on Total Fans Counter    
    if ((data.totalFans/50) >= '10'){
      $('#bieber').attr('src', './img/bieber2.jpeg').css({"width": "25%", "height": "auto"})
    };
    if ((data.totalFans/50) >= '50'){
      $('#bieber').attr('src', './img/bieber4.png').css({"width": "25%", "height": "auto"})
    };
    if ((data.totalFans/50) >= '250'){
      $('#bieber').attr('src', './img/bieber.png').css({"width": "25%", "height": "auto"})
    };
    if ((data.totalFans/50) >= '1000'){
      $('#bieber').attr('src', './img/bieber3.png').css({"width": "25%", "height": "auto"})
    };
    if ((data.totalFans/50) >= '2500'){
      $('#bieber').attr('src', './img/justin_bieber.jpg').css({"width": "25%", "height": "auto"})
    };
    updateReport();
  });

});
