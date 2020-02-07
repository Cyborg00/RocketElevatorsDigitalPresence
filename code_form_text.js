$(function() {

    
    $("#select_building_type").change(function(){  //Select the id(#) of building type
        var type = $(this).val();
        

        if( type == "residential") {
            $("#residential, #gamme,#result_final").show();
            $("#corporate,#hybrid,#commercial").hide();
            }
         else if ( type == "hybrid") {
            $("#hybrid, #gamme,#result_final").show();
            $("#corporate,#residential,#commercial").hide();
             }
        else if( type == "commercial") {
            $("#commercial , #gamme,#result_final").show();
            $("#corporate,#hybrid,#residential").hide();
             }
         else if ( type == "corporate") {
             $("#corporate , #gamme,#result_final").show();
             $("#commercial,#hybrid,#residential").hide();
            }
        else if ( type =="select" ){
            $("#select").show();
            $("#commercial,#hybrid,#residential,#corporate,#gamme,#result_final").hide();
        }
        
      });

});

