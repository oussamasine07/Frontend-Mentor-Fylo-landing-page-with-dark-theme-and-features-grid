const openNavIcon = document.getElementById("openNavMenu");
const closeNavIcon = document.getElementById("closeNavMenu");
const mobileNav = document.querySelector(".mobile-nav");


openNavIcon.addEventListener("click", (e) => {
    // remove the open icon 
    e.target.style.opacity = "0"
    setTimeout(() => {
        e.target.style.display = "none"
    }, 300);

    // add the close icon
    setTimeout(() => {
        closeNavIcon.style.display = "block";
        // display the menu
        mobileNav.style.display = "block";
    }, 200)
    setTimeout(() => {
        closeNavIcon.style.opacity = "1"
        mobileNav.style.top = "100%";
        mobileNav.style.opacity = "1";
    }, 300);
});

closeNavIcon.addEventListener("click", (e) => {
    // remove the open icon 
    e.target.style.opacity = "0"
    setTimeout(() => {
        e.target.style.display = "none"
    }, 300);

    // add the close icon
    setTimeout(() => {
        openNavIcon.style.display = "block";
        // display the menu
        mobileNav.style.display = "none";
    }, 200)
    setTimeout(() => {
        openNavIcon.style.opacity = "1"
        mobileNav.style.top = "40%";
        mobileNav.style.opacity = "0";
    }, 300);
});

