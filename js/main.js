let barsIcon = document.querySelector(".bars-icon");
let listClick = document.querySelector(".lnk");

barsIcon.addEventListener("click", () => {
    listClick.classList.toggle("list-clk");
});

document.addEventListener('click', (e) => {
    if (e.target !== barsIcon && e.target !== listClick) {
        if (listClick.classList.contains("list-clk")) {
            listClick.classList.toggle("list-clk");
        }
    }
});
listClick.addEventListener('click', (e) => {
    e.stopPropagation();
});

function removeIfSigned() {
    const getHeading = document.querySelector(".my-heading");
    const signWith = document.querySelector("#signWith");
    if (getHeading.textContent !== "Hello There" + signWith.textContent) {
        signWith.style.display = "none";
    };
};
removeIfSigned();

function signWithName() {
    let myHeading = document.querySelector(".my-heading");
    let mySpan = document.querySelector("#signWith");
    let inputField = document.getElementById("signInput");
    let dataInput = document.querySelector(".sign-pop-up");
    let closePopup = document.querySelector("#closePopUp");
    let submitData = document.querySelector("#joinUs");
    
    if (window.localStorage.getItem("name")) {
        myHeading.innerHTML = `Hello ${window.localStorage.getItem("name")}`;
    };
    mySpan.addEventListener("click", () => {
        dataInput.style.display = "block";
        inputField.focus();
    });
    closePopup.addEventListener("click", () => {
        dataInput.style.display = "none";
    });
    submitData.addEventListener("click", () => {
        if (inputField.value === "" || /(\W+|\d+)/.test(inputField.value)) {
            dataInput.style.display = "block";
        } else {
            dataInput.style.display = "none";
            window.localStorage.setItem("name", inputField.value);
            myHeading.innerHTML = `Hello ${window.localStorage.getItem("name")}`;
            window.location.reload();
        };
    });
    signOut.addEventListener('click', () => {
        window.localStorage.clear();
        window.location.reload();
    })
};
signWithName();

function soonAv() {
    let moreFun = document.querySelectorAll('.w-js');
    console.log(moreFun);
    let soon = document.querySelector('.soon');
    let myWork = document.querySelector('.explore');
    moreFun.forEach((ele) => {
        function myEvent(e) {
            e.preventDefault();
            soon.style.setProperty('display', 'block', 'important');
            soon.style.opacity = '1';
            setTimeout(() => {
                soon.style.opacity = '0';
            }, 5000);
            setTimeout(() => {
                soon.style.display = "none";
            }, 5500);
        }
        ele.addEventListener('click', myEvent);
    })
    myWork.addEventListener('click', () => {
        window.open('./portfolio.html');
    });
};
soonAv();