<!DOCTYPE html>
<body>
   <canvas id = "myCanvas" width = "200" height = "100" style = "border : 1px solid black;">
       Your browser does not support html5 canvas tag.</canvas>

   <script>
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx moveTo(0, 0);
      ctx lineTo(200, 100);
      ctx.stroke();
</script> 
</body>
</html>