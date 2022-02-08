const ratingStars = document.getElementsByClassName("rating-star");
for (let i = 0;i < ratingStars.length;i++){
    ratingStars[i].addEventListener("click",(e) => {
        const id = ratingStars[i].id;
        const idValue = id.slice(id.length-1);
        for (let j = 4;j >= 5-idValue;j--){
            ratingStars[j].classList.add("rated")
        }
        for (let j = 4 - idValue;j >= 0;j--){
            ratingStars[j].classList.remove("rated")
        }
    })
}
