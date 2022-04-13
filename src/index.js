// write your code here
window.addEventListener('DOMContentLoaded', (event) => {
    //grab div for menu
    const menuItem = document.getElementById("ramen-menu");

    fetch('http://localhost:3000/ramens')
        .then(res => res.json())
        .then(json =>json.forEach(item => {
            let image = document.createElement('img');
            image.src = item.image;
            //assign id to later pull info from the server
            image.id = item.id;
            menuItem.append(image);
        }));

    //add listener for click on the images
    menuItem.addEventListener("click", function(event){
        console.log(event);
        let mainImage = document.getElementById('ramen-detail');
        fetch(`http://localhost:3000/ramens/${event.target.id}`)
        .then(res => res.json())
        .then(json => mainImage.src = json.image)
    });

    const wholeForm = document.getElementById("new-ramen");

    wholeForm.addEventListener("submit", function(event){
        event.preventDefault();
        //filler to append the new ramen
        console.log(event);
        menuItem.append(event);
    });
});