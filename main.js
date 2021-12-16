/* Creating the search funcionality */

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keydown", function(event){
    /* 13 is the keyCode for 'Enter' key. */
    if(event.keyCode === 13){
        search();
    }
});

/* Declaring the search function */
function search(){
    const input= searchInput.value;

    /* window.location.href returns the href (URL) of the current page */

    window.location.href= "https://www.google.com/search?q="+ input +"&oq="+ input +"&aqs=chrome.0.69i59j46i433i512j69i59j0i131i433i512j0i433i512j46i512j0i433i512l2j0i512j0i433i512.1196j0j7&sourceid=chrome&ie=UTF-8";
}

