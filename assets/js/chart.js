$(document).ready(function() {


  var attemptPercentages = [

  	{
  		
  		"race":"Blancas", 
  		"percentage":7.80,
      "number": "7.8%"
  	}, 
  	{
  		"race":"Latinas",
  		"percentage":13.20,
      "number": "13.2%"
  	},
  	{
  		"race":"Afro-americanas",
  		"percentage": 9.90,
      "number": "9.9%"
  	},
  	{
  		"race":"Asiaticas",
  		"percentage":5.30,
      "number": "5.3%"
  	},
    {
      "race":"Multiples Razas",
      "percentage":7.00,
      "number":"7%"
    }
  ]

  /*  <div class="parent">
             <p class="race"> Asian </p> <div class="bar"> </div>
        </div>*/

  var myHtml = "";

  //New for loop!! Start at zero, stop at the length of my array, increment one at a time
  for(var i = 0; i < attemptPercentages.length; i++){
  	
    var start = '<div class="parent">'
    var middle= '<p class="race"> '+ attemptPercentages[i].race +' </p> <div class="bar" style= "width:' + (attemptPercentages[i].percentage *5.3) + '%;"> </div> <div class="numero"> '+ attemptPercentages[i].number +' </div>' 
    var end=  '</div>'

    myHtml += (start+middle+end)

  }

  //Actually add that loooong string I'm calling myHTML to my .colorswrapper div, magically turning it from a string to html
  $(".chart").append(myHtml);

});