function show_open(){
    const open=document.querySelector('.ul2');
    open.style.display='flex';
}

function show_close(){
    const close=document.querySelector('.ul2');
close.style.display='none';
}



function show_lang(){
    const show_choose=document.querySelector('.languages');
    const m=document.querySelector('.lang .choose p strong');
    m.style.display='none';
    
    show_choose.style.display='flex';
    
    }
    
    
    function hide_lang(){
    const hide_choose=document.querySelector('.languages');
    const show_language=document.querySelector('.lang .choose p strong');
    show_language.style.display='flex';
    hide_choose.style.display='none';
    
    
    }
    

    function show_language(){
        let show_lang=document.querySelector('.languages_menu_bar');
        show_lang.style.display='flex';
      
        let hide_icon=document.querySelector('.language_menu .choose_language p strong');
        hide_icon.style.display='none';
      }
      
      
      function hide_language(){
        let show_lang=document.querySelector('.languages_menu_bar');
        show_lang.style.display='none';
      
        let hide_icon=document.querySelector('.language_menu .choose_language p strong');
        hide_icon.style.display='flex';
      }



      
   
      let move_up=document.querySelector('.move_up');

    
    window.onscroll = function(){
      if(scrollY >=200){
        move_up.style.display='flex';
      }else{
        move_up.style.display='none';
      }
      }


      move_up.onclick=function(){
        scroll({
          left:0,
          top:0,
          behavior:"smooth"
        })
      }
    