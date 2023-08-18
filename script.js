function convert(){
    let cm=Number(document.getElementById("inputf").value);
    let inch= cm/2.54;
    let result=document.getElementById("result");
    result.innerHTML=inch.toPrecision(4)+" inch";
}