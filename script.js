let search = document.querySelector(".search-box input");
let imgs = document.querySelectorAll(".img-box");

search.addEventListener("keyup", e =>{
    if(e.key == "Enter"){
        let searchValue = search.value,
        value = searchValue.toLowerCase();
        imgs.forEach(img => {
            if(value === img.dataset.name){
                return img.style.display = "block";
            }
            img.style.display = "none";
        });
    }
});

search.addEventListener("keyup", () =>{
    if(search.value != "") return;
    imgs.forEach(img => {
        img.style.display = "block";
    })
})