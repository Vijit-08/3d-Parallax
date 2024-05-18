const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

function update() {
  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) `;
  });
}
window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;
  
  update()
});

update(0);

let timeline = gsap.timeline();

parallax_el.forEach(el => {
  timeline.from(el ,
    {
      y: `${document.querySelector(".bg-img").offsetHeight/2-el.dataset.distance}px`,
      duration:3.5,
    },
  )
})


