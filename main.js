(function() {
    'use strict';
    var h = $("<div>").appendTo($("body")).css({
        "text-align": "center",
        padding: "1em"
    });
    $("<h1>",{text:"色の距離の計算"}).appendTo(h);
    $("<div>",{text:"色を選択してください。"}).appendTo(h);
    function addInputColor(title){
        var hh = $("<div>",{text:title}).appendTo(h);
        var show = $("<div>").appendTo(h);
        var i = $("<input>",{type:"color"}).appendTo(h).change(function(){
            show.text($(this).val());
            main();
        });
        h.append("<br><br><br>");
        return function(){ return i.val() };
    }
    h.append("<br>");
    var a = addInputColor("色A"),
        b = addInputColor("色B");
    h.append("<br>");
    var result = $("<div>").appendTo(h);
    function orgRound(value, base) { // 四捨五入
        return Math.round(value * base) / base;
    }
    function main(){
        result.empty();
        var aa = a(),
            bb = b();
        [
            "RGB表色系でのユークリッド距離による色差の計算",
            "XYZ表色系でのユークリッド距離による色差の計算",
            "L*a*b*表色系でのユークリッド距離による色差の計算",
            "CIEDE2000による色差の計算"
        ].map(function(v,i){
            $("<div>",{text:v}).append("<br>").append(orgRound(diffColor(
                yaju1919.getRGB(aa),
                yaju1919.getRGB(bb),
                3-i),1000)).appendTo(result);
        })
    }
})();
