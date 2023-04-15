const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
  const now = new Date();

  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();

  const secondDegree = (getSecond / 60) * 360;
  const minuteDegree = (getMinute / 60) * 360;
  const hourDegree = (getHour / 12) * 360;

  second.style.transform = `rotate(${secondDegree}deg)`;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
const bodyE1 = document.querySelector("body")

bodyE1.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX
  const yPos = event.offsetY
  const spanE1 = document.createElement("span")
  spanE1.style.left = xPos + "px"
  spanE1.style.top = yPos + "Px"
  bodyE1.appendChild(spanE1)
  const size = Math.random() * 100
  spanE1.style.width = size + "px"
  spanE1.style.height = size + "px"
  setTimeout(() => {
    spanE1.remove()
  }, 3000)
})
