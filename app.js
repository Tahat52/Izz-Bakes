const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")
const cookies = document.querySelectorAll(".cookies")
const Brownie = document.querySelectorAll(".Brownie")
const image = document.querySelector(".image")
const contain = document.querySelector(".contain")
const nav = document.querySelector(".nav")
const closebutton = document.querySelector(".close-button")
const openbutton = document.querySelector(".open")
const panels = document.querySelectorAll(".panel");
const track = document.querySelector(".track");
const pause = document.querySelector("#pause");
const play = document.querySelector("#play");

play.addEventListener("click", () => {
  track.style.animationPlayState = "running";
});

pause.addEventListener("click", () => {
  track.style.animationPlayState = "paused";
});

openbutton.addEventListener('click', () => {
     nav.classList.add('forward');
});

closebutton.addEventListener('click', () => {
     nav.classList.remove('forward');
})

const observer = new IntersectionObserver((entries) => {
     if (entries[0].isIntersecting) {
          entries[0].target.classList.add('show')

     }
}, {
     threshold: 0
})
observer.observe(image)



window.addEventListener("load", () => {
     setTimeout(panels.forEach(panel => {
          panel.classList.add("open");
     }), 1000);
});










button1.addEventListener('click', () => {
     button1.style.backgroundColor = "#2f0e07"
     button1.style.color = "  #E5D4BA"

     cookies.forEach(cookies => {
          cookies.style.display = 'block'
     })
     Brownie.forEach(brownie => {
          brownie.style.display = 'block'


     })



     button2.style.backgroundColor = '#f3ebdf'
     button2.style.color = "#2f0e07"
     button3.style.backgroundColor = '#f3ebdf'
     button3.style.color = "#2f0e07"
})


button2.addEventListener('click', () => {
     button2.style.backgroundColor = "#2f0e07"
     button2.style.color = "#E5D4BA "

     Brownie.forEach(brownie => {
          brownie.style.display = 'none'


     })



     cookies.forEach(cookies => {
          cookies.style.display = 'block'


     })




     button1.style.backgroundColor = "#f3ebdf"
     button1.style.color = "#2f0e07"
     button3.style.backgroundColor = "#f3ebdf"
     button3.style.color = "#2f0e07"
})




button3.addEventListener('click', () => {
     button3.style.backgroundColor = "#2f0e07"
     button3.style.color = "#E5D4BA "

     cookies.forEach(cookies => {
          cookies.style.display = 'none'


     })

     Brownie.forEach(brownie => {
          brownie.style.display = 'block'


     })


     button2.style.backgroundColor = "#f3ebdf"
     button2.style.color = "#2f0e07"
     button1.style.backgroundColor = "#f3ebdf"
     button1.style.color = "#2f0e07"
})
