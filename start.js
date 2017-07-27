$(document).ready(function(){
    var i = Math.floor(Math.random() * 16);
    var j = Math.floor(Math.random() * 16);
    $("td").eq(i).append(2);
    while (i == j){
      var j = Math.floor(Math.random() * 16);
    }
    $("td").eq(j).append(2);
});
