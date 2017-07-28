$(document).ready(function(){
    window.addEventListener("keydown", add, false);

    function add(e)  {
      var i = Math.floor(Math.random() * 16);
      console.log("before 2");
      while (($("td").eq(i)).text() != "") // && is_space() == true)
      {
        console.log("while 2");
        i = Math.floor(Math.random() * 16);
      }
      console.log("after 2");
      $("td").eq(i).text(2);


      // var a = e.keyCode;
      // switch (a) {
      //   case 38:
      //
      //
      //     break;
      //
      //     case 40:
      //     var i = Math.floor(Math.random() * 16);
      //     console.log("before 4");
      //     while (($("td").eq(i)).text() != "")
      //     {  console.log("while 4");
      //       i = Math.floor(Math.random() * 16);}
      //       console.log("after 4");
      //     $("td").eq(i).text(2);
      //
      //       break;
      //
      //       case 37:
      //       var i = Math.floor(Math.random() * 16);
      //       console.log("before 6");
      //       while (($("td").eq(i)).text() != "")
      //       {  console.log("while 6");
      //         i = Math.floor(Math.random() * 16);}
      //         console.log("after 6");
      //       $("td").eq(i).text(2);
      //
      //         break;
      //
      //         case 39:
      //         var i = Math.floor(Math.random() * 16);
      //         console.log("before 8");
      //         while (($("td").eq(i)).text() != "")
      //         {
      //           console.log("while 8");
      //           i = Math.floor(Math.random() * 16);
      //         }
      //         console.log("after 8");
      //         $("td").eq(i).text(2);
      //           break;
      //
      //   default:
      //
      // }
    }
  });
