//First Class Ticket Increment
document.getElementById("first-class-ticket-increase").addEventListener("click", function () {
    firstClassCounter(true);
})
//First Class Ticket Decrement
document.getElementById("first-class-ticket-decrease").addEventListener("click", function () {
    firstClassCounter(false);
})
// //First class  increase decrease function
function firstClassCounter(isIncrease) {
    var ticketInput = document.getElementById("firstClassCounter").value;
    var ticketCount = parseInt(ticketInput);
    var ticketNewCount = ticketCount
    if (isIncrease == true) {
        var ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        var ticketNewCount = ticketCount - 1;
    }
    document.getElementById("firstClassCounter").value = ticketNewCount;
    subTotal();
}

//Economy Class Ticket Increment
document.getElementById("economy-class-ticket-increase").addEventListener("click", function () {
    economyClassCounter(true);
})
//Economy Class Ticket Decrement
document.getElementById("economy-class-ticket-decrease").addEventListener("click", function () {
    economyClassCounter(false);
})
// //Economy class ticket increase decrease function
function economyClassCounter(isIncrease) {
    var ticketInput = document.getElementById("economyClassCounter").value;
    var ticketCount = parseInt(ticketInput);
    var ticketNewCount = ticketCount;
    if (isIncrease == true) {
        var ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        var ticketNewCount = ticketCount - 1;
    }
    document.getElementById("economyClassCounter").value = ticketNewCount;
    subTotal();
}
//Subtotal,Vat,GrandTotal calculating function
function subTotal() {
    const firstClassInput = document.getElementById("firstClassCounter").value;
    const firstClassCount = parseInt(firstClassInput);

    const economyClassInput = document.getElementById("economyClassCounter").value;
    const economyClassCount = parseInt(economyClassInput);

    const subTotal = (firstClassCount * 150) + (economyClassCount * 100);
    document.getElementById("sub-total").innerText = subTotal;

    const totalVat = Math.round(subTotal * 0.1);
    document.getElementById("total-vat").innerText = totalVat;

    const grandTotal = subTotal + totalVat;
    document.getElementById("grand-total").innerText = grandTotal;

}
//Book Now button event handler
document.getElementById("book-now").addEventListener("click", function () {
    const totalFirstClass = document.getElementById("firstClassCounter").value;
    document.getElementById("total-first-ticket").innerText = "Total first class ticket = " + totalFirstClass + " pc(s)";

    const totalEconomyClass = document.getElementById("economyClassCounter").value;
    document.getElementById("total-economy-ticket").innerText = "Total economy class ticket = " + totalEconomyClass + " pc(s)";

    const finalVat = document.getElementById("total-vat").innerText;
    document.getElementById("final-vat").innerText = "Total vat amount = $" + finalVat;

    const finalAmount = document.getElementById("grand-total").innerText;
    if(finalAmount <= 0){
        alert("Purchase one ticket at least!");
        document.getElementById("main-area").style.display = "block";
        document.getElementById("popup-message").style.display = "none";
    }
    else{
        document.getElementById("final-amount").innerText = "Your final amount = $" + finalAmount;
        document.getElementById("main-area").style.display = "none";
        document.getElementById("popup-message").style.display = "block";
    }
})
//Return home Button event handler
document.getElementById("return-btn").addEventListener("click", function () {
    document.getElementById("main-area").style.display = "block";
    document.getElementById("popup-message").style.display = "none";
})
// //Reset button Event handler
document.getElementById("reset-all").addEventListener("click",function(){
    document.getElementById("firstClassCounter").value = 0;
    document.getElementById("economyClassCounter").value = 0;
    document.getElementById("sub-total").innerText = 0;
    document.getElementById("total-vat").innerText = 0;
    document.getElementById("grand-total").innerText = 0;
})

