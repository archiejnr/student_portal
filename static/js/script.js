$(document).ready(()=>{
  //variable declarations
  let popUp=$('.popup');
  let main=$('main');
  let buttonArray=$('.viewResults');
  let popupButton=$('.popupButton');
  let b0=$('.b0');
  let b1=$('.b1');
  let b2=$('.b2');
  let b3=$('.b3');

  function toggleTransition(){
    main.toggleClass('blur');
    popUp.toggleClass('hidden');
  }

  popupButton.click(()=>{
    toggleTransition();
  });

b0.add(b1).add(b2).add(b3).click((e)=>{
  toggleTransition();
})


//messages ui


});
