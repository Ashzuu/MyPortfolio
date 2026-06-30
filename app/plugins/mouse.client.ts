const SIZE_CURSOR:number = 20;
const VISIBILITY:string = "visible";

function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    if(!isMobile()){
      const cursor:HTMLElement = document.getElementById("mouse-decoration")!
      cursor.style.width=SIZE_CURSOR + "px";
      window.addEventListener('mousemove', (event) => {
        cursor.style.visibility=VISIBILITY.toString();
        cursor.style.top = event.pageY - SIZE_CURSOR/2 + 'px';
        cursor.style.left = event.pageX - SIZE_CURSOR/2 + 'px';
      });
    }

  }
});


