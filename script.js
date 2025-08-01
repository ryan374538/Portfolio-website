function toggleMenu() {
     const navList = document.getElementById("nav-list");
     navList.classList.toggle("show");
   }
   
   // Optional: Close menu on link click (for mobile)
   document.querySelectorAll('#nav-list a').forEach(link => {
     link.addEventListener('click', () => {
       document.getElementById('nav-list').classList.remove('show');
     });
   });
   