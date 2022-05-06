var counter=0;
function getcolor(){

    var base=document.getElementById("color");
    document.getElementById("bt").style.display="none";
    base.style.display="none";
    var hex=base.value;
    document.getElementById("hex").innerText=hex;
    var rgb=hex.replace("#","").convertToRGB();
    document.getElementById("rgb").innerText=rgb;
    var color=ntc.name(hex)
    document.getElementById("name").innerText=color[1];
    document.getElementById("tab").style.display="block";
    counter++;

}
String.prototype.convertToRGB = function(){
    if(this.length != 6){
        throw "not six-digit";
    }

    var aRgbHex = this.match(/.{1,2}/g);
    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
}
