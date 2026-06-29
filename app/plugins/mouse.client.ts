const SIZE_CURSOR:number = 20;
const VISIBILITY:string = "visible";

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const cursor:HTMLElement = document.getElementById("mouse-decoration")!
    cursor.style.width=SIZE_CURSOR + "px";
    window.addEventListener('mousemove', (event) => {
      cursor.style.visibility=VISIBILITY.toString();
      cursor.style.top = event.pageY - SIZE_CURSOR/2 + 'px';
      cursor.style.left = event.pageX - SIZE_CURSOR/2 + 'px';
    });
  }
});
