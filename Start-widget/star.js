function updateStarRating(rating) {
    console.log(rating);
    var totalRatings = 5;



    if(rating > 0) {
        document.getElementsByClassName("reset")[0].style.display = 'block'; 
    } else {
        document.getElementsByClassName("reset")[0].style.display = 'none'; 
    }

    for(var i=1 ; i<=rating ; i++) {
        document.getElementById(`star${i}`).innerHTML = "★"
    }

    for(var i=rating+1 ; i<=totalRatings ; i++) {
        document.getElementById(`star${i}`).innerHTML = "☆"
    }

    document.getElementsByClassName("ratingText")[0].innerText = `${rating} / ${totalRatings}`

}