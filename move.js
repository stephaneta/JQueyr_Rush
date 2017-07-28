$(document).ready(function(){
    window.addEventListener("keydown", move, false);

    // $("body").on("keyPress", function(event) {
    function move(e){
      // console.log(e);
      var a = e.keyCode;
      switch (a) {
        case 38:
        $("td").each(function(i){
          console.log("before 1");
          console.log(i);
            while (i > 3)
            {
            if (($("td").eq(i - 4)).text() == "") {
                console.log("while 1");
                up = i - 4;
                $("td").eq(up).append(($("td").eq(i)).text());
                $("td").eq(i).empty();
                i = i - 4;

              }

            if (($("td").eq(i - 4)).text() != "" && ($("td").eq(i - 4)).text() == ($("td").eq(i)).text()) { //
                console.log("1");
                var a = parseInt(($("td").eq(i)).text());
                var b = parseInt(($("td").eq(i - 4)).text());
                console.log("a : " + a + "---" + "b : " + b);
                if (a == b) {
                  console.log("1bis");
                  var n = (a + b).toString();
                  $("td").eq(i - 4).text(n);
                  $("td").eq(i).text("");
                  i = i - 4;
                }
              }

              if (($("td").eq(i - 4)).text() != "" && ($("td").eq(i - 4)).text() != ($("td").eq(i)).text()) {
                // var a = parseInt(($("td").eq(i)).text());
                // var b = parseInt(($("td").eq(i - 4)).text());
                // $("td").eq(i - 4).text(b);
                // $("td").eq(i).text(a);
                // return;
                i = i - 4;
              }
              // i = i - 4;
            }
            console.log("after 1");
            // var x = Math.floor(Math.random() * 16);
        });
          break;

          case 40:
          // $("td").each(function(i){
          var j = 15;
          while (j >= 0)
          {
            i = j;
            console.log("before 3");
            while (i < 12)
            {
              if (($("td").eq(i + 4)).text() == "") {
                console.log("while 3");
                down = i + 4;
                $("td").eq(down).append(($("td").eq(i)).text());
                $("td").eq(i).empty();
                i = i + 4;

              }

              if (($("td").eq(i + 4)).text() != "" && ($("td").eq(i + 4)).text() == ($("td").eq(i)).text()) {
                // console.log("2");
                var a = parseInt(($("td").eq(i)).text());
                var b = parseInt(($("td").eq(i + 4)).text());
                // var b = ($("td").eq(i)).text();
                console.log("lol" + a);
                console.log(b);
                if (a == b) {
                  console.log("2bis");
                  var n = (a + b).toString();
                  $("td").eq(i + 4).text(n);
                  $("td").eq(i).text("");
                  i = i + 4;
                }
              }

              if (($("td").eq(i + 4)).text() != "" && ($("td").eq(i + 4)).text() != ($("td").eq(i)).text()) {
                // var a = parseInt(($("td").eq(i)).text());
                // var b = parseInt(($("td").eq(i + 4)).text());
                // $("td").eq(i + 4).text(b);
                // $("td").eq(i).text(a);
                // return;
                i = i + 4;
              }
              // i = i + 4;
            }
            console.log("after 3");
            // var x = Math.floor(Math.random() * 16);
            j--;
          }
          break;

          case 37:
          $("td").each(function(i){

            console.log("before 5");
            while (i > 0 && Math.floor(i / 4) == Math.floor((i - 1) / 4))
            {
              if (($("td").eq(i - 1)).text() == "") {
                console.log("while 5");
                // console.log(i);
                left = i - 1;
                $("td").eq(left).append(($("td").eq(i)).text());
                $("td").eq(i).empty();
                i = i - 1;
              }

              if (($("td").eq(i - 1)).text() != "" && ($("td").eq(i - 1)).text() == ($("td").eq(i)).text()) {
                console.log("3");
                var a = parseInt(($("td").eq(i)).text());
                var b = parseInt(($("td").eq(i - 1)).text());
                if (a == b) {
                  console.log("3bis");
                  var n = (a + b).toString();
                  $("td").eq(i - 1).text(n);
                  $("td").eq(i).text("");
                  i = i - 1;
                }
              }

              if (($("td").eq(i - 1)).text() != "" && ($("td").eq(i - 1)).text() != ($("td").eq(i)).text()) {
                // var a = parseInt(($("td").eq(i)).text());
                // var b = parseInt(($("td").eq(i - 1)).text());
                // $("td").eq(i - 1).text(b);
                // $("td").eq(i).text(a);
                // return;
                i = i - 1;
              }
              // i = i - 1;
            }
            console.log("after 5");
            // var x = Math.floor(Math.random() * 16);
            // }
          });

          break;

          case 39:
          var j = 15;
          console.log("before 7");
          while (j >= 0)
          {
            console.log("while 7");
            i = j;
            // console.log("ok");
            while (i >= 0 && Math.floor(i / 4) == Math.floor((i + 1) / 4))
            {
              if (($("td").eq(i + 1)).text() == "") {
                console.log("while 7bis");
                // console.log(i);
                right = i + 1;
                $("td").eq(right).append(($("td").eq(i)).text());
                $("td").eq(i).empty();
                i = i + 1;

              }

              if (($("td").eq(i + 1)).text() != "" && ($("td").eq(i + 1)).text() == ($("td").eq(i)).text()) {
                console.log("4");
                var a = parseInt(($("td").eq(i)).text());
                var b = parseInt(($("td").eq(i + 1)).text());
                if (a == b) {
                  console.log("4bis");
                  var n = (a + b).toString();
                  $("td").eq(i + 1).text(n);
                  $("td").eq(i).text("");
                  i = i + 1;
                }
              }

              if (($("td").eq(i + 1)).text() != "" && ($("td").eq(i + 1)).text() != ($("td").eq(i)).text()) {
                // var a = parseInt(($("td").eq(i)).text());
                // var b = parseInt(($("td").eq(i + 1)).text());
                // $("td").eq(i + 1).text(b);
                // $("td").eq(i).text(a);
                // return;
                i = i + 1;
              }
              // i = i + 1;
            }
            console.log("after 7");
            // var x = Math.floor(Math.random() * 16);
            j--;
          }
          break;

          default:

        }
            }
    });
