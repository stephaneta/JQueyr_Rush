$(document).ready(function(){
    window.addEventListener("keydown", test, false);

    // $("body").on("keyPress", function(event) {
    function test(e){
      // console.log(e);
      var a = e.keyCode;
      switch (a) {
        case 38:
        $("td").each(function(i){
            while ((i > 3) && ($("td").eq(i - 4)).text() == "")
            {
              up = i - 4;
              $("td").eq(up).append(($("td").eq(i)).text());
              $("td").eq(i).empty();
              i = i - 4;
            }
          });
          break;

          case 40:
          // $("td").each(function(i){
          var j = 15;
          while (j > 0)
          {
              i = j;
              // console.log("ok");
              while ((i < 12) && ($("td").eq(i + 4)).text() == "")
              {
                // console.log("out");
                down = i + 4;
                $("td").eq(down).append(($("td").eq(i)).text());
                $("td").eq(i).empty();
                i = i + 4;
              }
              j--;
            }

            break;

            case 37:
            $("td").each(function(i){
              // while ((i % 4) > 0)
              //   {
              //     console.log("step 1");
              //     console.log(left);
              console.log(i);
              // console.log(i / 4);
              // console.log((i - 1) / 4);
                  while (i > 0 && Math.floor(i / 4) == Math.floor((i - 1) / 4)
                  && ($("td").eq(i - 1)).text() == "" && ($("td").eq(i)).text() != "")
                {
                  console.log("step 2");
                  console.log(i);
                  left = i - 1;
                  $("td").eq(left).append(($("td").eq(i)).text());
                  $("td").eq(i).empty();
                  i = i - 1;
                }
              // }
            });
            break;

            case 39:
            var j = 15;
            while (j > 0)
            {
                i = j;
                // console.log("ok");
                while (i > 0 && Math.floor(i / 4) == Math.floor((i + 1) / 4)
                && ($("td").eq(i + 1)).text() == "" && ($("td").eq(i)).text() != "")
              {
                // console.log("step 2");
                // console.log(i);
                right = i + 1;
                $("td").eq(right).append(($("td").eq(i)).text());
                $("td").eq(i).empty();
                i = i + 1;
              }
                j--;
              }

              break;

          //     $("td").each(function(i){
          //     if (i == 1 || i == 5 || i == 9 || i == 13)
          //       {
          //         console.log("step 1");
          //         while ((i > 0) && (i != 0 || i != 4 || i != 8 || i != 12) && ($("td").eq(i - 1)).text() == "")
          //       {
          //         console.log("step 2");
          //         console.log(i);
          //         left = i - 1;
          //         $("td").eq(left).append(($("td").eq(i)).text());
          //         $("td").eq(i).empty();
          //         i = i - 1;
          //       }
          //     }
          //
          //    if (i == 2 || i == 6 || i == 10 || i == 14)
          //     {
          //       console.log("step 3");
          //       while ((i > 0) && (i != 0 || i != 4 || i != 8 || i != 12) && ($("td").eq(i - 2)).text() == "")
          //     {
          //       console.log("step 4");
          //       console.log(i);
          //       left = i - 2;
          //       $("td").eq(left).append(($("td").eq(i)).text());
          //       $("td").eq(i).empty();
          //       i = i - 2;
          //     }
          //   }
          //
          //   if (i == 3 || i == 7 || i == 11 || i == 15)
          //   {
          //     console.log("step 5");
          //     while ((i > 0) && (i != 0 || i != 4 || i != 8 || i != 12) && ($("td").eq(i - 3)).text() == "")
          //   {
          //     console.log("step 6");
          //     console.log(i);
          //     left = i - 3;
          //     $("td").eq(left).append(($("td").eq(i)).text());
          //     $("td").eq(i).empty();
          //     i = i - 3;
          //   }
          // }

        default:

      }
//       if (a == 38) {
//         // <div id="id "></div>
//         var i;
//         console.log("lol");
//         console.log(i);
//
//         switch (i) {
//           case (i == $("#16").val()):
//           $("#16").appendTo("#4");
//           break;
//
//
//           case (i == $("#15").val()):
//             $("#15").appendTo("#3");
//             break;
//
//             case (i == $("#14").val()):
//             $("#14").appendTo("#2");
//             break;
//
//             case (i == $("#13").val()):
//             $("#13").appendTo("#1");
//             break;
//
//             case (i == $("#12").val()):
//             $("#12").appendTo("#4");
//             break;
//
//             case (i == $("#11").val()):
//             $("#11").appendTo("#3");
//               break;
//
//             case (i == $("#10").val()):
//             $("#10").appendTo("#2");
//             break;
//
//             case (i == $("#9").val()):
//             $("#9").appendTo("#1");
//             break;
//
//             case (i == $("#8").val()):
//             $("#8").appendTo("#4");
//             break;
//
//             case (i == $("#7").val()):
//             $("#7").appendTo("#3");
//             break;
//
//             case (i == $("#6").val()):
//             $("#6").appendTo("#2");
//             break;
//
//             case (i == $("#5").val()):
//             $("#5").appendTo("#1");
//             break;
//
//           default:
// }
//         }
}
});
