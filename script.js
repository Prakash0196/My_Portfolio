
function myFunction() {
    var element = document.body;
    var toggleSwitch = document.getElementById("flexSwitchCheckChecked");
    var newTheme = toggleSwitch.checked ? "light" : "dark";
    element.dataset.bsTheme = newTheme;
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
    updateSwitchStyle(newTheme);
}

function updateSwitchStyle(theme) {
    var toggleSwitch = document.getElementById("flexSwitchCheckChecked");
    if (theme === "light") {
        toggleSwitch.classList.add("light-mode");
        toggleSwitch.classList.remove("dark-mode");
    } else {
        toggleSwitch.classList.add("dark-mode");
        toggleSwitch.classList.remove("light-mode");
    }
}
window.onload = function() {
    var savedTheme = localStorage.getItem("theme") || "light";
    var toggleSwitch = document.getElementById("flexSwitchCheckChecked");
    document.body.dataset.bsTheme = savedTheme;
    document.documentElement.dataset.theme = savedTheme;
    toggleSwitch.checked = savedTheme === "light";
    updateSwitchStyle(savedTheme);
};


document.addEventListener("DOMContentLoaded", function () {
    if (sessionStorage.getItem("formSubmitted")) {
        document.querySelector("form").reset(); 
        sessionStorage.removeItem("formSubmitted");
    }
});

function handleSubmit() {
    sessionStorage.setItem("formSubmitted", "true");
}

const toggleBlur1 = () => {
    const blurEl = document.getElementById("blur");
    blurEl.classList.toggle("active");

    const popupEl = document.getElementById("popup1");
    popupEl.classList.toggle("active");
};

const toggleBlur2 = () => {
    const blurEl = document.getElementById("blur");
    blurEl.classList.toggle("active");

    const popupEl = document.getElementById("popup2");
    popupEl.classList.toggle("active");
};
const toggleBlur3 = () => {
    const blurEl = document.getElementById("blur");
    blurEl.classList.toggle("active");

    const popupEl = document.getElementById("popup3");
    popupEl.classList.toggle("active");
};






