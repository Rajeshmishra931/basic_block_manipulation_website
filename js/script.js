window.addEventListener('load',function(){
    let block= document.getElementById('block');
    let scaleCoef=1;
    let rotateDeg=0;
    //position-y manipulation

    let posY= document.getElementById('pos-y');
    posY.addEventListener('input',function(){
        block.style.top=posY.value + 'px';

    })
   
     //position-x manipulation

     let posX= document.getElementById('pos-x');
     posX.addEventListener('input',function(){
         block.style.left=posX.value + 'px';
 
     })

     // size manipulation

     let size= document.getElementById('size');
     size.addEventListener('input',function(){
         scaleCoef=size.value;
         block.style.transform=`scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
 
     })


     //opacity manipulation
     let opacity   = document.getElementById('opacity');
     opacity.addEventListener('input',function(){
         block.style.opacity=opacity.value;
 
     })

     //shape type manipulation
     let selector   = document.getElementById('shape-select');
     let okBtn= document.getElementById('ok-shape');
     okBtn.addEventListener('click',function(){
       let option= selector.value;
       if(option==='1')
       {
        block.style.borderRadius='0';
        rotateDeg=0;
        block.style.transform=`scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
        
       }
       else if(option==='2')
       {
            block.style.borderRadius='50%';
       }
       else 
       {
           
            block.style.borderRadius='0';
            rotateDeg=45;
            block.style.transform=`scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
       }
        
 
     })


})