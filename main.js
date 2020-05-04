(function() {
    'use strict';
    var h = $("<div>").appendTo($("body")).css({
        "text-align": "center",
        padding: "1em"
    });
    $("<h1>",{text:"色の距離の計算"}).appendTo(h);
    $("<div>",{text:"aaaa"}).appendTo(h);
    function addInputColor(title){
        var hh = $("<div>",{text:title}).appendTo(h);
        var show = $("<div>").appendTo(h);
        var i = $("<input>",{type:"color"}).appendTo(h).change(function(){
            show.text($(this).val());
            main();
        });
        return function(){ return i.val() };
    }
    h.append("<br>");
    var a = addInputColor("色A"),
        b = addInputColor("色B");
    h.append("<br>");
    h.append("<br>");
    var result = $("<div>");
    function orgRound(value, base) { // 四捨五入
        return Math.round(value * base) / base;
    }
    function main(){
        result.empty();
        var aa = a(),
            bb = b(),
            str = "";
        [
            "RGB表色系でのユークリッド距離による色差の計算",
            "XYZ表色系でのユークリッド距離による色差の計算",
            "L*a*b*表色系でのユークリッド距離による色差の計算",
            "CIEDE2000による色差の計算"
        ].map(function(v,i){
            $("<div>",{text:h}).append("<br>").append(orgRound(diffColor(a,b,3-i),0.001)).appendTo(result);
        })
    }
})();
