let tittle = document.querySelector('.tittle')
let box = document.querySelector('.box')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let box4 = document.querySelector('.box4')
let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let span = document.querySelector('.span')
let span2 = document.querySelector('.span2')
let chance2 = document.querySelector('.chance2')
let chance3 = document.querySelector('.chance3')
let chance4 = document.querySelector('.chance4')
let sp2 = document.querySelector('.sp2')
let sp3 = document.querySelector('.sp3')
let sp4 = document.querySelector('.sp4')
let cancle = document.querySelector('.cancle')
let cancle2 = document.querySelector('.cancle2')
let left = document.querySelector('.left')
let right = document.querySelector('.right')
let left2 = document.querySelector('.left2')
let right2 = document.querySelector('.right2')
let player1_inn = document.querySelector('.player1_inn')
let player2_inn = document.querySelector('.player2_inn')
let player3_inn = document.querySelector('.player3_inn')
let player4_inn = document.querySelector('.player4_inn')
let result1 = document.querySelector('.result1')
let noo = document.querySelector('.noo')
let result2 = document.querySelector('.result2')
let result3 = document.querySelector('.result3')
let result4 = document.querySelector('.result4')
let win1 = document.querySelector('.win1')
let lose1 = document.querySelector('.lose1')
let win2 = document.querySelector('.win2')
let lose2 = document.querySelector('.lose2')
let win3 = document.querySelector('.win3')
let lose3 = document.querySelector('.lose3')
let win4 = document.querySelector('.win4')
let lose4 = document.querySelector('.lose4')
let main = document.querySelector('.main')
 let cancleWithbtn1 = document.querySelector('.cancleWithbtn1')
 let cancleWithbtn = document.querySelector('.cancleWithbtn')
 let player1 = document.querySelector('.player1')
 let player2 = document.querySelector('.player2')
 let player3 = document.querySelector('.player3')
 let player4 = document.querySelector('.player4')
 let getResult = document.querySelector('.getResult')
let getNumber = box.value*9
let count2 = 4
let count3 = 4
let count4 = 4
let typeCount = -1



let text = document.querySelector('.text')
let typedArr = text.innerHTML.split('')
let typetext = text.innerHTML
text.innerHTML = '';
let count = -1
let btn5 = document.querySelector('.btn5')

right.addEventListener('click', function(){
  right.classList.add('go1')
  left.classList.add('go2')
})
right2.addEventListener('click', function(){
  right2.classList.add('go3')
  left2.classList.add('go4')
})

function typed (){
    if(count < typedArr.length){
        count++
        text.innerHTML += typetext.charAt(count)
        typedArr = typetext.split('')
    }

}
function typed2 (){
    typedArr.pop()
        text.innerHTML = typedArr.join('')
        count-1
}
let text1 = document.querySelector('.text1')
let typedArr1 = text1.innerHTML.split('')
let typetext1 = text1.innerHTML
text1.innerHTML = '';
let count1 = -1
let btn6 = document.querySelector('.btn6')

function typed3 (){
    if(count1 < typedArr1.length){
        count1++
        text1.innerHTML += typetext1.charAt(count1)
        typedArr1 = typetext1.split('')
    }

}
function typed4 (){
    typedArr1.pop()
        text1.innerHTML = typedArr1.join('')
        count1-1
}


btn5.addEventListener('click', function(){
    setInterval(function(){
        typed2()
    },50)
    cancle.classList.add('btnleft1')
})
btn6.addEventListener('click', function(){
  setInterval(function(){
    typed4()
  },50)
  cancle2.classList.add('btnleft2')
})




btn.addEventListener('click',function(){
    if(box.value == ''){
       text.classList.remove('d-none')
       cancleWithbtn.classList.remove('d-none')
        setInterval(function(){
          typed()
        },50)

    }else{
        if(!(box.value -1 == 0 ? true : box.value - 1)){
          text1.classList.remove('d-none')
          cancleWithbtn1.classList.remove('d-none')
         setInterval(function(){
          typed3()
        },50)
        }else{
            span.classList.add('getnumber')
            span.innerHTML = "Player-1 Gave Number, Please Continue the Game"
            for(i=1;i<=box.value;i++){
                span2.innerHTML = `<ul class='namta${i}'> ${i} Number Multiplication</ul>`
                for(j=1;j<=10;j++){
                 document.querySelector(`.namta${i}`).innerHTML += `<li class='bg${i}'>${i} x ${j} = ${i*j}</li>`
             }
     
             let list = document.querySelector(`.namta${i}`);
             let items = list.getElementsByTagName('li');
             let cool = span2.getElementsByTagName('ul');
             list.style.background = '#89f0a3';
             list.style.width = '300px';
             list.style.color = '#661a1a';
             
             for( let l=0;l < items.length;l++){
     
               if (l % 2 === 0) {
                 // Even-indexed items (starting from 0) will have a #7acf90 background
                 items[l].style.backgroundColor = '#7acf90';
               } else {
                 // Odd-indexed items will have a #68b37b background
                 items[l].style.backgroundColor = '#68b37b';
               }
               for(let m=0;m<cool.length;m++){
                 if(m % 2 === 0){
                   cool[m].style.background = '#a05fee'
                 }else{
                   cool[m].style.background = '#c38943'
                 }
               }
             }
             box.classList.add('d-none')
             btn.classList.add('d-none')
             box2.classList.remove('d-none')
             btn2.classList.remove('d-none')
             chance2.classList.remove('d-none')
             sp2.innerHTML = count2
             tittle.innerHTML = 'Player-2'
             player1_inn.classList.remove('d-none')
             player2_inn.classList.remove('d-none')
             player1_inn.classList.add('animi1')
             player2_inn.classList.add('animi2')
            }
        }
    }
    
})

btn2.addEventListener('click', function(){
  sp2.innerHTML = count2--
  if(!(count2 < 0)){
    if(box2.value == ''){
      text.classList.remove('d-none')
       cancleWithbtn.classList.remove('d-none')
        setInterval(function(){
          typed()
        },50)
       // no gif start
       noo.classList.add('noo_animi')
       noo.classList.remove('d-none')
       player1_inn.classList.add('animi1_1')
       player1_inn.classList.remove('animi1_2')
    }else{
      if(!(box2.value - 0)){
        text1.classList.remove('d-none')
          cancleWithbtn1.classList.remove('d-none')
         setInterval(function(){
          typed3()
        },50)
         // no gif start
         noo.classList.add('noo_animi')
         noo.classList.remove('d-none')
         player1_inn.classList.add('animi1_1')
         player1_inn.classList.remove('animi1_2')
      }else{
        if(getNumber == box2.value){
          btn2.classList.add('d-none')
          box2.classList.add('d-none')
          box3.classList.remove('d-none')
          btn3.classList.remove('d-none')
          chance2.classList.add('d-none')
          chance3.classList.remove('d-none')
          sp3.innerHTML = count3
          tittle.innerHTML = 'Player-3'
          player3_inn.classList.remove('d-none')
          player3_inn.classList.add('animi3')
           // no gif end
           noo.classList.remove('noo_animi')
           noo.classList.add('d-none')
           player1_inn.classList.remove('animi1_1')
           player1_inn.classList.add('animi1_2')
         
        }else{
          // no gif start
          noo.classList.add('noo_animi')
          noo.classList.remove('d-none')
          player1_inn.classList.add('animi1_1')
          player1_inn.classList.remove('animi1_2')
        }
      }
    }
  }else{
          btn2.classList.add('d-none')
          box2.classList.add('d-none')
          box3.classList.remove('d-none')
          btn3.classList.remove('d-none')
          chance2.classList.add('d-none')
          chance3.classList.remove('d-none')
          sp3.innerHTML = count3
          tittle.innerHTML = 'Player-3'
          player3_inn.classList.remove('d-none')
          player3_inn.classList.add('animi3')
          // no gif end
          noo.classList.remove('noo_animi')
          noo.classList.add('d-none')
          player1_inn.classList.remove('animi1_1')
          player1_inn.classList.add('animi1_2')
  }
})
btn3.addEventListener('click', function(){
  sp3.innerHTML = count3--
  if(!(count3 < 0)){
    if(box3.value == ''){
      text.classList.remove('d-none')
       cancleWithbtn.classList.remove('d-none')
        setInterval(function(){
          typed()
        },50)
       // no gif start
       noo.classList.add('noo_animi')
       noo.classList.remove('d-none')
       player1_inn.classList.add('animi1_1')
       player1_inn.classList.remove('animi1_2')
    }else{
      if(!(box3.value - 0)){
        text1.classList.remove('d-none')
        cancleWithbtn1.classList.remove('d-none')
       setInterval(function(){
        typed3()
      },50)
         // no gif start
         noo.classList.add('noo_animi')
         noo.classList.remove('d-none')
         player1_inn.classList.add('animi1_1')
         player1_inn.classList.remove('animi1_2')
      }else{
        if(getNumber == box3.value){
          box3.classList.add('d-none')
          btn3.classList.add('d-none')
          box4.classList.remove('d-none')
          btn4.classList.remove('d-none')
          chance3.classList.add('d-none')
          chance4.classList.remove('d-none')
          sp4.innerHTML = count4
          tittle.innerHTML = 'Player-4'
          player4_inn.classList.remove('d-none')
          player4_inn.classList.add('animi4')
           // no gif end
           noo.classList.remove('noo_animi')
           noo.classList.add('d-none')
           player1_inn.classList.remove('animi1_1')
           player1_inn.classList.add('animi1_2')
        }else{
           // no gif start
           noo.classList.add('noo_animi')
           noo.classList.remove('d-none')
           player1_inn.classList.add('animi1_1')
           player1_inn.classList.remove('animi1_2')
        }
      }
    }
  }else{
          box3.classList.add('d-none')
          btn3.classList.add('d-none')
          box4.classList.remove('d-none')
          btn4.classList.remove('d-none')
          chance3.classList.add('d-none')
          chance4.classList.remove('d-none')
          sp4.innerHTML = count4
          tittle.innerHTML = 'Player-4'
          player4_inn.classList.remove('d-none')
          player4_inn.classList.add('animi4')
          // no gif end
          noo.classList.remove('noo_animi')
          noo.classList.add('d-none')
          player1_inn.classList.remove('animi1_1')
          player1_inn.classList.add('animi1_2')
  }
})

btn4.addEventListener("click", function(){
  if(count4 > 0){
  sp4.innerHTML = count4--;
  if(getNumber == box4.value){
     // no gif end
     noo.classList.remove('noo_animi')
     noo.classList.add('d-none')
     player1_inn.classList.remove('animi1_1')
     player1_inn.classList.add('animi1_2')
     span2.classList.add('d-none')
     getResult.classList.remove('d-none')
  }else{
 // no gif start
 noo.classList.add('noo_animi')
 noo.classList.remove('d-none')
 player1_inn.classList.add('animi1_1')
 player1_inn.classList.remove('animi1_2')
 
  }
  if(getNumber == box2.value && getNumber == box3.value && getNumber == box4.value){
    result1.innerHTML = 'Lose'
    result2.innerHTML = 'Win'
    result3.innerHTML = 'Win'
    result4.innerHTML = 'Win'
    player1.innerHTML = 'Lose'
    player2.innerHTML = 'Win'
    player3.innerHTML = 'Win'
    player4.innerHTML = 'Win'
    main.classList.add('bg')
    win1.classList.add('d-none')
    lose1.classList.remove('d-none')   
  }else if(getNumber == box3.value && !(getNumber == box2.value) && getNumber == box4.value){
      result1.innerHTML = 'Lose'
      result2.innerHTML = 'Lose'
      result3.innerHTML = 'Win'
      result4.innerHTML = 'Win'
      player1.innerHTML = 'Lose'
      player2.innerHTML = 'Lose'
      player3.innerHTML = 'Win'
      player4.innerHTML = 'Win'
      main.classList.add('bg')
      win1.classList.add('d-none')
      lose1.classList.remove('d-none') 
      win2.classList.add('d-none')
      lose2.classList.remove('d-none') 
  }else if(getNumber == box2.value && !(getNumber == box3.value) && getNumber == box4.value){
      result1.innerHTML = 'Lose'
      result2.innerHTML = 'Win'
      result3.innerHTML = 'Lose'
      result4.innerHTML = 'Win'
      player1.innerHTML = 'Lose'
      player2.innerHTML = 'Win'
      player3.innerHTML = 'Lose'
      player4.innerHTML = 'Win'
      main.classList.add('bg')
      win1.classList.add('d-none')
      lose1.classList.remove('d-none') 
      win3.classList.add('d-none')
      lose3.classList.remove('d-none') 
  }else if(!(getNumber == box2.value) && !(getNumber == box3.value) && getNumber == box4.value){
      result1.innerHTML = 'Lose'
      result2.innerHTML = 'Lose'
      result3.innerHTML = 'Lose'
      result4.innerHTML = 'Win'
      player1.innerHTML = 'Lose'
      player2.innerHTML = 'Lose'
      player3.innerHTML = 'Lose'
      player4.innerHTML = 'Win'
      main.classList.add('bg')
      win1.classList.add('d-none')
      lose1.classList.remove('d-none') 
      win2.classList.add('d-none')
      lose2.classList.remove('d-none') 
      win3.classList.add('d-none')
      lose3.classList.remove('d-none') 
  }
  
  }else{
      // no gif end
      noo.classList.remove('noo_animi')
      noo.classList.add('d-none')
      player1_inn.classList.remove('animi1_1')
      player1_inn.classList.add('animi1_2')
      span2.classList.add('d-none')
     getResult.classList.remove('d-none')
 
      if(!(getNumber == box3.value) && !(getNumber == box2.value) && !(getNumber == box4.value)){
          result1.innerHTML = 'Win'
          result2.innerHTML = 'Lose'
          result3.innerHTML = 'Lose'
          result4.innerHTML = 'Lose'
          player1.innerHTML = 'Win'
          player2.innerHTML = 'Lose'
          player3.innerHTML = 'Lose'
          player4.innerHTML = 'Lose'
          main.classList.add('bg')
          win2.classList.add('d-none')
          lose2.classList.remove('d-none') 
          win3.classList.add('d-none')
          lose3.classList.remove('d-none') 
          win4.classList.add('d-none')
          lose4.classList.remove('d-none') 
      }else if(getNumber == box3.value && !(getNumber == box2.value) && !(getNumber == box4.value)){
          result1.innerHTML = 'Lose'
          result2.innerHTML = 'Lose'
          result3.innerHTML = 'Win'
          result4.innerHTML = 'Lose'
          player1.innerHTML = 'Lose'
          player2.innerHTML = 'Lose'
          player3.innerHTML = 'Win'
          player4.innerHTML = 'Lose'
          main.classList.add('bg')
          win1.classList.add('d-none')
          lose1.classList.remove('d-none') 
          win2.classList.add('d-none')
          lose2.classList.remove('d-none') 
          win4.classList.add('d-none')
          lose4.classList.remove('d-none') 
          
      }else if(getNumber == box2.value && !(getNumber == box3.value) && !(getNumber == box4.value)){
          result1.innerHTML = 'Lose'
          result2.innerHTML = 'Win'
          result3.innerHTML = 'Lose'
          result4.innerHTML = 'Lose'
          player1.innerHTML = 'Lose'
          player2.innerHTML = 'Win'
          player3.innerHTML = 'Lose'
          player4.innerHTML = 'Lose'
          main.classList.add('bg')
          win1.classList.add('d-none')
          lose1.classList.remove('d-none') 
          win3.classList.add('d-none')
          lose3.classList.remove('d-none') 
          win4.classList.add('d-none')
          lose4.classList.remove('d-none') 
      }else if(getNumber == box2.value && getNumber == box3.value && !(getNumber == box4.value)){
          result1.innerHTML = 'Lose'
          result2.innerHTML = 'Win'
          result3.innerHTML = 'Win'
          result4.innerHTML = 'Lose'
          player1.innerHTML = 'Lose'
          player2.innerHTML = 'Win'
          player3.innerHTML = 'Win'
          player4.innerHTML = 'Lose'
          main.classList.add('bg')
          win1.classList.add('d-none')
          lose1.classList.remove('d-none') 
          win4.classList.add('d-none')
          lose4.classList.remove('d-none') 
      }

     

  }
  
})
window.addEventListener('mousemove', function(e){
    getResult.style.top = `${e.clientX / 7}px`
    getResult.style.right = `${e.clientY / 7}px`
})

 
