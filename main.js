var Delete = document.querySelectorAll("p");
var deleteLigne = document.querySelectorAll("hr")
var heart = document.querySelectorAll("h5")
var plus = document.querySelectorAll(".plusb")
var minus = document.querySelectorAll(".minusb")
var total = document.querySelector("h2")



Array.from(Delete).map((el, i) => {
    ;
    el.addEventListener("click", () => {
        ;
        el.parentElement.remove();
        deleteLigne[i].remove();
    });
});





Array.from(heart).map((el) => {
    el.addEventListener("click", () => {
        el.classList.toggle("red")
    })

})

Array.from(plus).map((el) => {
    el.addEventListener("click", () => {
        el.nextElementSibling.value = parseInt(el.nextElementSibling.value) + 1;
        var price = el.parentElement.lastElementChild.innerHTML.replace("$", "");
        total.innerHTML = parseInt(total.innerHTML) + parseInt(price) + "$";
    });
});


Array.from(minus).map((el) => {
    el.addEventListener("click", () => {
        if (el.previousElementSibling.value > 0) {
            el.previousElementSibling.value = parseInt(el.previousElementSibling.value) - 1;
            var prices = el.nextElementSibling.innerHTML.replace("$", "");
            total.innerHTML = parseInt(total.innerHTML) - parseInt(prices) + "$";
        }
    });
});