const elementPark = document.getElementById("parkButton");
const elementMonth = document.getElementById("monthButton");

/* create two variables to track each visibility state of both buttons separately*/
let isHidden = false;
let isParkHidden = false;

/* initialize button text */
elementPark.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Hide charity'
elementMonth.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Hide giving plan'

/* toggle functionality to change boolean values true=>false and false=>true */
const toggleHide = () => isHidden = !isHidden;
const toggleParkHide = () => isParkHidden = !isParkHidden;

/* event listener for charity button */
elementPark.addEventListener("click", function () {
    let hideShow = (toggleHide() ? '<i class="fa-solid fa-eye"></i> Show' : '<i class="fa-solid fa-eye-slash"></i> Hide')
    elementPark.innerHTML = `${hideShow}  charity`;
});
/* event listener for park giving plan button */
elementMonth.addEventListener("click", function () {
    let hideShow = (toggleParkHide() ? '<i class="fa-solid fa-eye"></i> Show' : '<i class="fa-solid fa-eye-slash"></i> Hide')
    elementMonth.innerHTML = `${hideShow}  giving plan`;
});