let mouseoverBg = document.querySelector(".mouseover_bg");
let header = document.querySelector("header");
let header1 = document.querySelector(".header_1");
let nav = document.querySelector(".nav");
let navItem = nav.querySelectorAll("li");

navItem.forEach(e => {
    e.addEventListener("mouseover", () => {
        mouseoverBg.style.display = "block";
        header.classList.add("remove_shadow");
    });
});

navItem.forEach(e => {
    e.addEventListener("mouseout", () => {
        mouseoverBg.style.display = "none";
        header.classList.remove("remove_shadow");
    });
});

// Mobile menu
let menuIcon = document.querySelector(".menu_icon");
let menuList = document.querySelector(".menu_list");
let menuListItem = menuList.querySelectorAll("li");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("_active");
    header1.classList.toggle("_active_menu");
});

menuListItem.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.toggle("show");
    });
});

if (window.innerWidth > 980) {
    let pos1 = window.scrollY;
    window.onscroll = () => {
        let pos2 = window.scrollY;
        if (pos1 > pos2) {
            setTimeout(() => {
                nav.style.marginTop = "0px";
            }, 0);
            nav.classList.remove("hide");
        } else {
            nav.style.marginTop = "-40px";
            setTimeout(() => {
                nav.classList.add("hide");
            }, 50);
        }
        pos1 = pos2;
    };
}
else {
    nav.classList.remove('hide');
}

let aG = document.querySelector(".a_g"),
    navItem1 = document.querySelector(".n_i-1");
let tr = document.querySelector(".tr"),
    navItem2 = document.querySelector(".n_i-2");
let el = document.querySelector(".el"),
    navItem3 = document.querySelector(".n_i-3");
let kT = document.querySelector(".k_t"),
    navItem4 = document.querySelector(".n_i-4");
let allForHome = document.querySelector(".all_for_home"),
    navItem5 = document.querySelector(".n_i-5");
let fS = document.querySelector(".f_s"),
    navItem6 = document.querySelector(".n_i-6");
let mA = document.querySelector(".m_a"),
    navItem7 = document.querySelector(".n_i-7");
let mH = document.querySelector(".m_h"),
    navItem8 = document.querySelector(".n_i-8");
let gN = document.querySelector(".g_n"),
    navItem9 = document.querySelector(".n_i-9");
let kB = document.querySelector(".k_b"),
    navItem10 = document.querySelector(".n_i-10");
let mY = document.querySelector(".m_y"),
    navItem11 = document.querySelector(".n_i-11");
let serv = document.querySelector(".serv"),
    navItem13 = document.querySelector(".n_i-13");
let job = document.querySelector(".job"),
    navItem14 = document.querySelector(".n_i-14");

const allMenuItems = [
    [aG, navItem1],
    [tr, navItem2],
    [el, navItem3],
    [kT, navItem4],
    [allForHome, navItem5],
    [fS, navItem6],
    [mA, navItem7],
    [mH, navItem8],
    [gN, navItem9],
    [kB, navItem10],
    [mY, navItem11],
    [serv, navItem13],
    [job, navItem14]
]

for (let i of allMenuItems) {
    i[1].addEventListener("mouseover", () => {
        i[0].classList.add("show");
        i[1].classList.add("mouse_over_text");
    });
    i[1].addEventListener("mouseout", () => {
        i[0].classList.remove("show");
        i[1].classList.remove("mouse_over_text");
    });
    i[0].addEventListener("mouseover", () => {
        i[0].classList.add("show");
        i[1].classList.add("mouse_over_text");
    });
    i[0].addEventListener("mouseout", () => {
        i[0].classList.remove("show");
        i[1].classList.remove("mouse_over_text");
    });
}

let lang = document.querySelector(".lang");
let langMenu = lang.querySelector(".lmenu");

lang.addEventListener("click", () => {
    langMenu.classList.toggle('show');
});