let calcBtn = document.getElementById('paymentValue');
// let customername = document.getElementById("customername");

let maincourse = document.getElementById("maincourse");
let indian = document.getElementById("indian");
let chinese = document.getElementById("chinese");
let dessert = document.getElementById("dessert");
let starter = document.getElementById("starter");
let gsts = document.getElementById("gst");



let bill = document.getElementById('billOutput');
// calculation 

calcBtn.addEventListener("click", (noReload)=>{

    let intMaincourse = parseInt(maincourse.value);
    let intIndian = parseInt(indian.value);
    let intChinese = parseInt(chinese.value);
    let intDessert =  parseInt(dessert.value);
    let intStarter = parseInt(starter.value);

    function calc(){

    let foodCost = intStarter + intIndian + intChinese + intDessert + intMaincourse;
    let gst = (foodCost *18)/100;
    gsts.innerHTML = gst;

    // gsts.innerHTML =gst;

    let totalValue = foodCost + gst;
    console.log(totalValue);

    if(totalValue > 18000){
        let tip = 500;
        let paymentValue = totalValue + tip;
        bill.innerHTML = paymentValue;
        
    }else{
        let tip = 1000;
        let paymentValue = totalValue + tip;
        console.log(paymentValue);
        bill.innerHTML = paymentValue;
    }
   
}
    calc();
    noReload.preventDefault();

});

