const bakalavar = document.getElementById("bakalavar")
const nonDisplay = document.querySelector("#nonDisplay")
const plusB = document.querySelector("#plusBakalavar")
const plusG = document.querySelector("#plusGimnaziq")
const gimnazniq = document.getElementById("gimnaziq")
const readMoreMalki = document.getElementById("readMoreMalkiGolemiNeshta")
const readMoreDiv = document.querySelector(".read")
const readMoreSteni = document.getElementById("readMoreSteni")
const moreVidio = document.getElementById("moreVideo")
const noneVideo = document.querySelector(".row2")
const links  = document.querySelector(".links")
const profilM = document.querySelector(".profilM")
let togle = false
var button = $("button");
button.text(button.data("text-swap"));
// const readLess = document.createElement("a")
// readLess.innerHTML ="Прочети по малко"

bakalavar.addEventListener('click',function(){
    if (nonDisplay.style.display === "none") {
        nonDisplay.style.display = "block";
        plusB.innerHTML = "-"
        bakalavar.style.backgroundColor ="#2c98f0"
      } else {
        nonDisplay.style.display = "none";
        plusB.innerHTML = "+"
        bakalavar.style.backgroundColor= "rgba(242,243,247,255)"
      }
})

gimnazniq.addEventListener('click',function(){
    if (noneGimnaziq.style.display === "none") {
        noneGimnaziq.style.display = "block";
        plusG.innerHTML = "-"
        gimnazniq.style.backgroundColor ="#2c98f0"
      } else {
        noneGimnaziq.style.display = "none";
        plusG.innerHTML = "+"
        gimnazniq.style.backgroundColor= "rgba(242,243,247,255)"
      }
})

readMoreMalki.addEventListener('click',function(){
    readMoreDiv.style.display = "block"
    readMoreDiv.innerHTML = "Събитията обаче не свършват до тук. При непредвидени обстоятелства Рут трябва да остане сама с детето, което умира докато тя е с него. Започва дело за убийството на новороденото бебе от Рут. В никакъв случай не мога да кажа, че книгата е идеална и напълно реалистична, но въпреки това и дадох пет звезди, защото смятам, че е разтърсваща, дълбоко образоваща и показваща картината на расизма от различни гледни точки. Това е така, защото повествованието се води от гледната точка на Рут, Търк (бащата на детето) и Кенеди (адвокат на Рут). Различните гледни точки обрисуват пред нас различни психологически портрети на противоположни типове герои. Едно от важните правила, според мен, за да бъде една книга наистина добра е героите да се променят независимо дали към по-добро или не. Важно е да има движение. Това се случва в „Малки големи неща” и затова препоръчвам четивото. Разбира се, че книгата има своите недостатъци, но е начало към четенето на по-сериозна литература засягаща такива сериозни теми, които обществото по света и това в България обича да подминава. Една от тези теми, която е засегната в книгата е, че за да бъде приет даден човек като личност заслужаваща уважение той трябва да се доказва. Това прави Рут през цялото време – доказва се и се прави, че не забелязва нападките на обществото, които ,разбира се,не се отнасят до нея, защото е „изключение” докато не се стига до това обвинение. Вие смятате ли, че за да ни оценяват като личности с индивидуалност и мнение трябва постоянно да се вкарваме в общоприетите рамки? Книгата си заслужава прочита, защото стилът на писане е лек и въздействащ, а темите дълбоки и важни. <a id='readLess'>Прочети по малко</a>"
    readLess.addEventListener('click',function(){
      const readLess = document.getElementById("readLess")
      readMoreDiv.style.display = "none"
    })
})

readMoreSteni.addEventListener('click',function(){
    readMoreDiv.style.display ="block"
    readMoreDiv.innerHTML ="Избрах тази книга, за да отпразнуваме, макар и с един ден закъснение и Хелоуин, защото книгата е в духа на страшното, на ужасите и мрачните тайни, които никой не иска да научи. . За да разберете, какво се случва в романа и каква е символиката на перото трябва да: 1. Последвате @rayna.bookplace 2. Да харесате поста 3. Да сложите на стори поста, както и да тагнете @rayna.bookplace . Победителят ще изтегля тук в инстаграм на 08.11.2020 в стори. . Вие харесвате ли жанра на ужасите, трилъра? Ще се радвам да споделите в коментарите. . Приятно четене и весел празник! 🖤 . П. П - книгата е закупена с лични средства и е четена от мен. Постът НЕ Е продуктово позициониране. rayna.bookplace a - моето малко пространство за отдих, релакс и удовлетворение, надявам се да се превърне и във вашето. . 🖤📚<a id='readLess'>Прочети по малко</а>"
    readLess.addEventListener('click',function(){
      const readLess = document.getElementById("readLess")
      readMoreDiv.style.display = "none"
    })
})



$( "#moreVideo" ).click(function() {
  $( ".row2" ).slideToggle( "slow" );
  $(".row2").css("display","flex");
});

$("#togle").click(function(){
  $(".profilM").slideToggle("slow");
  $(".profilM").css("display","flex");
});

links.addEventListener('click',function(){
  profilM.style.display = "none"
  console.log("hi")
})
