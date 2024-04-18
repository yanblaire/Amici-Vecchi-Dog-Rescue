// Navigation bar animation
let list = document.querySelectorAll('.list');
        function setActiveClass(){
            list.forEach((item) =>
            item.classList.remove('active'));
            this.classList.add('active');
            
        }
        function removeActiveClass(){
            this.classList.remove('active')
        }
        list.forEach((item) => {
            item.addEventListener('mouseover' , setActiveClass);
            item.addEventListener('mouseout' , removeActiveClass)
        });
// Scroll animation
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var opacity = 1 - (window.scrollY / 150); 
    opacity = Math.max(0, opacity); 

    if (window.scrollY > 200) {
        opacity = 0; 
        header.style.zIndex = -10; 
    } else {
        header.classList.toggle("sticky", window.scrollY > 0);
        header.style.zIndex = 1; 
    }

    header.style.opacity = opacity;
});
