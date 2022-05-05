let borderFavorite = document.querySelector("#borderFavorite");

document.querySelectorAll("#borderFavorite").forEach(function (element) {
    console.log(element)
    element.addEventListener('click', () => {
        if (element.src.match("border")) {
            element.src = "./favorite/favorite_2x.png";
            console.log(element.closest("#list-song"))
        } else {
            element.src = "./favorite/border_favorite_2x.png";
        }
    })
})
