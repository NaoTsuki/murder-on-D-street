$(document).ready(function(){
  $(".man_white").mouseover(function(){
    $(".lattice01").addClass("onmouse_white");
    $(".lattice02").addClass("onmouse_white");
    $('.serif_white').addClass("hover");
  });
  $(".man_white").mouseout(function(){
    $(".lattice01").removeClass("onmouse_white");
    $(".lattice02").removeClass("onmouse_white");
    $('.serif_white').removeClass("hover");
  });

  $(".man_black").mouseover(function(){
    $(".lattice01").addClass("onmouse_black");
    $(".lattice02").addClass("onmouse_black");
    $('.serif_black').addClass("hover");
  });
  $(".man_black").mouseout(function(){
    $(".lattice01").removeClass("onmouse_black");
    $(".lattice02").removeClass("onmouse_black");
    $('.serif_black').removeClass("hover");
  });

});