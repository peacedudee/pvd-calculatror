$(".calculator input").on("input change", function (event) {
  var parameterName =  $(this).attr("id").split("calc-")[1];
  var centimeters = $(this).val()
  
  switch (parameterName) {
    case "Cr":
      $("#calc-Cr_value").html("Cr: " + centimeters + " cm");
      break;
    case "depth":
      var m = $(this).val();
      $("#calc-depth_value").html("depth: " + m + " m");
      break;
    case "Cz":
      $("#calc-Cz_value").html("Cz: " + $(this).val());
      break;
    case "Settlement":
      $("#calc-Settlement_value").html("Settlement: " + $(this).val() + " hours per week");
      break;
    case "Settlementt":
      $("#calc-Settlementt_value").html("Time after which construction is to be started(in days): " + $(this).val() + " days");
      break;
    case "Settlementtt":
      $("#calc-Settlementtt_value").html("Area of Construction  (in m²): " + $(this).val() + " m²");
      break;
    case "Loading":
      $("#calc-Loading_value").html("Loading: " + $(this).val() + " hours per week");
      break;
    // case "Time":
    //   $("#calc-days").html("Time after which construction is to be started(in days): " + $(this).val() + " hours per week");
    //   break;
    // case "Area of Construction  (in m²)":
    //   $("#calc-Area of Construction  (in m²)_value").html("Area of Construction  (in m²): " + $(this).val() + " hours per week");
    //   break;
  }
  
  var cr = parseInt($("#calc-Cr").val(), 10);
  var cz = parseInt($("#calc-Cz").val(), 10);
  var depth = parseInt($("#calc-depth").val(), 10);
  var loading = parseInt($("#calc-Loading").val(), 10);
  var settlement = parseInt($("#calc-Settlement").val(), 10);
  var tfc = parseInt($("#calc-Settlementt").val(), 10);
  var area= parseInt($("#calc-Settlementtt").val(), 10);
  var value = $(".calculator input[name='value']:checked").val();
  
  let tv=(cz*tfc)/(depth*depth);
  let 
  // The Harris–Benedict equations revised by Mifflin and St Jeor in 1990: 'A new predictive equation for resting energy expenditure in healthy individuals'
  var PVD = parseInt(10 * depth + 6.25 * Cr - 5 * Cz, 10) + (value === "With Smear Effect" ? 5 : -161);
  PVD = PVD * 1.2;
  PVD += Loading*60*(.03 * depth*1/0.45) / 7;
  PVD += Settlement*60*(.07 * depth*1/0.45) / 7;
  PVD = Math.floor(PVD);
  
  var targetGaindepth = Math.round((PVD+300) / 100) * 100;
  var targetMaintain = Math.round((PVD) / 100) * 100;
  var targetLosedepth = Math.round((PVD-500) / 100) * 100;
  // var test=54;
  $("#calc-target-gain span").html(targetGaindepth + " calories");
  $("#calc-target-maintain span").html(targetMaintain + " calories");
  $("#calc-target-lose span").html(targetLosedepth + " calories");
  $("#test span").html(area + " calories");
});