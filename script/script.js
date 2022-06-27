const elementPark = document.getElementById("parkButton");
const elementParkTitle = document.getElementById("parkTitle");
const elementParkText = document.getElementById("parkText");

const elementMonth = document.getElementById("monthButton");
const elementMonthTitle = document.getElementById("monthTitle");
const elementMonthText = document.getElementById("monthText");

/* create two variables to track each visibility state of both buttons separately*/
let isHidden = false;
let isParkHidden = false;

/* initialize button text */
elementPark.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Hide charity'
elementMonth.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Hide giving plan'

/* toggle functionality to change boolean values true=>false and false=>true */
const toggleMonthHide = () => isHidden = !isHidden;
const toggleParkHide = () => isParkHidden = !isParkHidden;

/* event listener for charity button */
elementPark.addEventListener("click", function () {
    //let hideShow = (toggleMonthHide() ? '<i class="fa-solid fa-eye"></i> Show' : '<i class="fa-solid fa-eye-slash"></i> Hide')
    let hideShow, title, text;

    if (toggleMonthHide()) {
        hideShow = '<i class="fa-solid fa-eye"></i> Show';
        title = 'Another Title';
        text = 'Sed ut perspiciatis unde omnis iste natus';
    } else {
        hideShow = '<i class="fa-solid fa-eye-slash"></i> Hide';
        title = 'New!';
        text = 'National Park Trust has been added';
    }
    elementPark.innerHTML = `${hideShow}  charity`;
    elementParkTitle.innerHTML = `${title}`;
    elementParkText.innerHTML = `${text}`;
});
/* event listener for park giving plan button */
elementMonth.addEventListener("click", function () {
    //let hideShow = (toggleParkHide() ? '<i class="fa-solid fa-eye"></i> Show' : '<i class="fa-solid fa-eye-slash"></i> Hide')
    let hideShow = '';
    let title = '';
    if (toggleParkHide()) {
        hideShow = '<i class="fa-solid fa-eye"></i> Show';
        title = 'Alternate Title';
        text = 'Lorem ipsum dolor sit amet, consectetur elit';
    } else {
        hideShow = '<i class="fa-solid fa-eye-slash"></i> Hide';
        title = '$150/mo';
        text = 'Next giving plan disbursement occurs on 08/30/20.'
    }
    elementMonth.innerHTML = `${hideShow}  giving plan`;
    elementMonthTitle.innerHTML = `${title}`;
    elementMonthText.innerHTML = `${text}`;
});