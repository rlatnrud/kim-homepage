
$(function(){
  var nav = document.querySelector('#main-menu');
  var nav_top = nav.offsetTop;
  var win_y = 0;
  var nav_height = nav.clientHeight;
  console.log(nav_top);
  console.log('nav_height= ' + nav_height)
  
  window.onscroll = function(){
    console.log(window.pageYOffset);
    win_y = window.pageYOffset;
    if(nav_top <= win_y){
      nav.classList.add('sticky');
       document.querySelector('#about').style.marginTop = nav_height + 'px';
    } else{
      nav.classList.remove('sticky');
      document.querySelector('#about').style.marginTop = '0px';

    }
  }  
})


  
    var nav = document.getElementById('nav');
    var nav_top = nav.offsetTop;
    var body = document.body; // Safari
    var html = document.documentElement;
    
    // 스크롤 되면 메뉴가 상단에 고정
    window.onscroll = function(){
      var scroll_top = body.scrollTop || html.scrollTop
    
      if(nav_top <= scroll_top) {
        nav.classList.add('fixed')
      } else {
        nav.classList.remove('fixed')
      }
    
    }