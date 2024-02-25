function buttonClick(e) {
  const tabSchedule = document.getElementById("tab-1-schedule");
  console.log(tabSchedule.firstElementChild);
  if (e == 1) {
    tabSchedule.firstElementChild.src = "../images/tab-1-schedule.png";
  } else if ((e = 2)) {
    tabSchedule.firstElementChild.src = "../images/tab-2-schedule.png";
  }
}

// https://colorlib.com/preview/theme/seogo/

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("third")) {
      slides.style.transform = "translatex(-66.6666666667%)";
      e.target.classList.add("active");
    }
  }
});
