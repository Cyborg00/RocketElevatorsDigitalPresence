// Calculate Quantity on residential
// $( document ).ready(function(){
// var selected_price_range, quantity_shaft;

//Quantity Residential
function quantityResi(gamme,) {

    var nb_apartments = parseInt($("#residential_nb_apartments").val());
    var nb_floors = parseInt($("#residential_nb_floors").val());

    if (document.querySelector('input[name="radioanswer"]:checked')) {
        selected_price_range = document.querySelector('input[name="radioanswer"]:checked').value;
        console.log("selected_price_range", selected_price_range);
    } else {
        selected_price_range = 0;
    }
    //var categorie = parseFloat($("imput[name='radioanswer']:checked").val());
    //console.log("categorie", categorie);


    var total_app = Math.ceil(nb_apartments / nb_floors);
    console.log("total_app", total_app);

    var nb_elevators = Math.ceil(total_app / 6);
    console.log("nb_elevators", nb_elevators);

    var nb_shaft = Math.ceil(nb_floors / 20);
    console.log("nb_shaft", nb_shaft);

    var price = nb_elevators * nb_shaft * selected_price_range ;
    console.log("price", price);
    //document.getElementById("total").innerHTML = price
    printPrice(gamme, price,)
    $("#total_elevator").html(nb_elevators);
    

    //updateQuantities(quantity); 
}

//Quantity Commercial
function shaft(gamme) {

    quantity_elevator = $("#commercial_nb_elevator").val();
    console.log("quantity_elevator", quantity_elevator);
    if (document.querySelector('input[name="radioanswer"]:checked')) {
        selected_price_range = document.querySelector('input[name="radioanswer"]:checked').value;
        console.log("selected_price_range", selected_price_range);
    } else {
        selected_price_range = 0;
    }
    var price = quantity_elevator * selected_price_range;
    console.log("price", price);
    $("#total_elevator").html(quantity_elevator);
    //document.getElementById("total").innerHTML = price
    printPrice(gamme, price)
}


//Quantity Hybrid 
function quantity_hyb(gamme) {

    var hybrid_occupants_max = parseInt($("#hybrid_nb_occupants").val());
    var hybrid_nbfloors = parseInt($("#hybrid_nb_floors").val());
    var hybrid_nbbasements = parseInt($("#hybrid_nb_basements").val());
    if (document.querySelector('input[name="radioanswer"]:checked')) {
        selected_price_range = document.querySelector('input[name="radioanswer"]:checked').value;
        console.log("selected_price_range", selected_price_range);
    } else {
        selected_price_range = 0;
    }
    var hybrid_floors_total = Math.ceil(hybrid_nbfloors + hybrid_nbbasements);
    console.log("hybrid_floors_total", hybrid_floors_total);

    var hybrid_occupants_total = Math.ceil(hybrid_floors_total * hybrid_occupants_max);
    console.log("hybrid_occupants_total", hybrid_occupants_total);

    var hybrid_cage_total = Math.ceil(hybrid_occupants_total / 1000);
    console.log("hybrid_cage_total", hybrid_cage_total);

    var hybrid_shaft_total = Math.floor(hybrid_floors_total / 20);
    console.log("hybrid_shaft_total", hybrid_shaft_total);

    var hybrid_elevator_total = Math.ceil(hybrid_cage_total / hybrid_shaft_total);
    console.log("hybrid_elevator_total", hybrid_elevator_total);

    var price = hybrid_elevator_total * hybrid_shaft_total * selected_price_range;
    console.log("price", price);
    $("#total_elevator").html(hybrid_elevator_total);
    //document.getElementById("total").innerHTML = price
    printPrice(gamme, price)


}

//Quantity Corporate
function quantity_corp(gamme) {

    var corporate_occupants_max = parseInt($("#corporate_nb_occupants").val());
    var corporate_nbfloors = parseInt($("#corporate_nb_floors").val());
    var coporate_nbbasements = parseInt($("#corporate_nb_basements").val());

    if (document.querySelector('input[name="radioanswer"]:checked')) {
        selected_price_range = document.querySelector('input[name="radioanswer"]:checked').value;
        console.log("selected_price_range", selected_price_range);
    } else {
        selected_price_range = 0;
    }
    var corporate_floors_total = Math.ceil(corporate_nbfloors + coporate_nbbasements);
    console.log("corporate_floors_total", corporate_floors_total);

    var corporate_occupants_total = Math.ceil(corporate_floors_total * corporate_occupants_max);
    console.log("corporate_occupants_total", corporate_occupants_total);

    var corporate_cage_total = Math.ceil(corporate_occupants_total / 1000);
    console.log("corporate_cage_total", corporate_cage_total);

    var corporate_shaft_total = Math.floor(corporate_floors_total / 20);
    console.log("corporate_shaft_total", corporate_shaft_total);

    var corporate_elevator_total = Math.ceil(corporate_cage_total / corporate_shaft_total);
    console.log("corporate_elevator_total", corporate_elevator_total);

    var price = corporate_elevator_total * corporate_shaft_total * selected_price_range;
    console.log("price", price);
    $("#total_elevator").html(corporate_elevator_total);
    
    printPrice(gamme, price)
    // document.getElementById("instal").innerHTML =
}

const printPrice = function (gamme, price) {

    console.log(gamme);
    console.log(price);

    var installation = gamme == "standard" ?
        parseFloat(price * 0.10) :
        gamme == "premium" ?
        parseFloat(Math.ceil(price * 0.13)) :
        parseFloat(Math.ceil(price * 0.16))

    var gamme_standard = parseFloat(price * 0.10);
    if (gamme == 'standard')
        console.log("gamme_standard", gamme_standard);

    var gamme_premium = parseFloat(price * 0.13);
    if (gamme == 'premium')
        console.log("gamme_premium", gamme_premium);

    var gamme_excelium = parseFloat(price * 0.16)
    if (gamme == 'excelium')
        console.log("gamme_excelium", gamme_excelium);

    $("#installation-price").html(`$ ${installation} `);
    $('#total').html(`$ ${price}`);
    console.log("printPrice", price);
    console.log('installation: ', installation);
    $("#subtotal").html(`$ ${price + installation}`);
   // $("#total_elevator").html(nb_elevators);
    console.log(total_elevator);
}

function pricetotal(gamme) {
    console.log(gamme);
    console.log("pricetotal");

    var type = $("#select_building_type").val();

    console.log("type", type);

    if (type == "residential") {
        quantityResi(gamme, );
    } else if (type == "hybrid") {
        quantity_hyb(gamme);
    } else if (type == "commercial") {
        shaft(gamme);
    } else if (type == "corporate") {
        quantity_corp(gamme);
    }
 }

// function total_elevator(){
//     var nb_total_elevator = $("#total_elevator").val();

//     if ()
// }
