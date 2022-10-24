let upperNavStatus = false;

let upperNav = function() {
  let getSidebar = document.querySelector(".sidebar-nav");
  let getSidebarUl = document.querySelector(".sidebar-nav ul");
  let getSidebarTitle = document.querySelector(".sidebar-nav span");
  let getSidebarLinks = document.querySelectorAll(".sidebar-nav a");

      if (upperNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";
        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
        getSidebarLinks[i].style.opacity = "1";
        }
        upperNavStatus = true;
        } else if (upperNavStatus === true) {
          getSidebar.style.width = "50px";
          getSidebarTitle.style.opacity ="0";
          let arrayLength = getSidebarLinks.length;
            for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
            }
          getSidebarUl.style.visibility = "hidden";
          upperNavStatus = false;
          }

}
