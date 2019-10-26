jQuery(document).ready(function($){
  $(document).scroll(function() {
      var bounding = document.getElementById('gradient').getBoundingClientRect() ;
      var position = bounding.bottom  - window.innerHeight;
      if( position < 0 && bounding.top > 0){ // estamos en zona donde queremos hacer el efecto
          var percent = ((100 * bounding.top) / (window.innerHeight - bounding.height)) - 100
          // var cosi = ((100 * (bounding.top + bounding.height)) / (bounding.height + window.innerHeight)) - 100
          // var cosi = ((100 * (bounding.bottom + bounding.height)) / (window.innerHeight - bounding.height )) - 100
          $('#gradient').css({"left": percent + "%"});
      }
  });
});
