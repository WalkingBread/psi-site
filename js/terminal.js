const last = document.querySelector('.last');

const setDots = () => {
  setTimeout(() => last.innerHTML =".", 100);
  setTimeout(() => last.innerHTML ="..", 500);
  setTimeout(() => last.innerHTML ="...", 900);

}
setInterval(setDots, 1000);