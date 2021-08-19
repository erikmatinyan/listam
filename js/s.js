let container = document.querySelector('.container');
let mobile = document.querySelector('.mob');

// Region
let allRegionsBtn = container.querySelector('.first_all');
let allRegionsBtnM = mobile.querySelector('.first_all');

let regionBlock = container.querySelector('.top');
let regionBlockM = mobile.querySelector('.top_mobile');

let regionItem = regionBlock.querySelectorAll('.i');
let regionItemM = regionBlockM.querySelectorAll('.i');

let selectedRegion = allRegionsBtn.querySelector('.selected_region');
let selectedRegionM = allRegionsBtnM.querySelector('.selected_region');

// Currency
let curr = document.querySelector(".curr");
let selectedCurrency = container.querySelector('.selected_curr');
let selectedCurrencyM = curr.querySelector('.selected_curr')

let currNames = container.querySelector('.curr_names');
let currNamesM = curr.querySelector('.curr_names')

let maySelectCurrency = currNames.querySelectorAll('.i');
let maySelectCurrencyM = curr.querySelectorAll('.i')

// Filters
let openFilterBtn = document.querySelector('.open_filter');
let mobileMenu = document.querySelector('.mob');
let closeBtn = document.querySelector('.close');
let applyBtn = document.querySelector('.apply');

let radios = document.getElementsByName('type');
let withPhoto = document.querySelector('#idphoto');

openFilterBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle('show')
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove('show')
});

applyBtn.addEventListener("click", () => {
    let updatedFilters = {
        searchType: {
            suggestion: false,
            lookingFor: false
        },
        withPhoto: withPhoto.checked,
        region: selectedRegion.textContent,
        price: {
            min: Number(document.querySelector('#minPrice').value),
            max: Number(document.querySelector('#maxPrice').value)
        },
        currency: selectedCurrency.textContent
    }
    
    let data = JSON.stringify(updatedFilters);

    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if (radios[i].id == 'id1') {
                updatedFilters.searchType.suggestion = true
            } else if (radios[i].id == 'id2') {
                updatedFilters.searchType.lookingFor = true
            }
        }
    }

    console.log(updatedFilters);
    mobileMenu.classList.remove('show');
});

// Sections

allRegionsBtn.addEventListener("click", () => {
    regionBlock.classList.toggle("show");
});

allRegionsBtnM.addEventListener("click", () => {
    regionBlockM.classList.toggle("show");
});

regionItem.forEach(e => {
    e.addEventListener("click", () => {
        regionBlock.classList.remove("show");
        selectedRegion.innerHTML = e.textContent;
    });
});

regionItemM.forEach(e => {
    e.addEventListener("click", () => {
        regionBlockM.classList.remove("show");
        selectedRegion.innerHTML = e.textContent;
        selectedRegionM.innerHTML = e.textContent;
    });
});

selectedCurrency.addEventListener("click", () => {
    currNames.classList.toggle("show");
});

selectedCurrencyM.addEventListener("click", () => {
    currNamesM.classList.toggle("show");
});

maySelectCurrency.forEach(e => {
    e.addEventListener('click', () => {
        currNames.classList.remove("show");
        selectedCurrency.innerHTML = e.textContent;
    });
});

maySelectCurrencyM.forEach(e => {
    e.addEventListener('click', () => {
        currNamesM.classList.remove("show");
        selectedCurrency.innerHTML = e.textContent;
        selectedCurrencyM.innerHTML = e.textContent;
    });
});

$('span:empty').hide();