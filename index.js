
$("i").click (function () {
    
    var input = document.getElementById("input");
    
        
        if (input.type === "password") {
          input.type = "text";
          var icon = $("i");
          icon.toggleClass("bx-hide");
          icon.toggleClass("bx-show");
        } else {
          input.type = "password";
          var icon = $("i");
          icon.toggleClass("bx-hide");
          icon.toggleClass("bx-show");
        }
     
    });
  