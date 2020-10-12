var actors = JSON.parse(content)
console.table(actors);



// fill json data into html
$(document).ready(function(){

    for (let i = 0; i < actors.length; i++){
        $(".navBar").append(`
            <a class="nav-link actorLink text-info" id="${i}"{href="#"> ${actors[i].name}</a>
        `)

    };

    // event & display actor
    $(".actorLink").on('click', function(){
        // create a variable that refers to the index of the navbar
        let index = $(this).attr("id");
        // create card with the index from json (same index number)
        $(".actorCard").html(`
        <div class="col card">
            <h5 class="card-title text-info">${actors[index].name}</h5>
            <img src="${actors[index].image}" class="card-img-top w-50 rounded mx-auto d-block " alt="...">
            <div class="card-body">
                <p class="card-text text-info"> Born: ${actors[index].birthday}</p>
                <a href="${actors[index].imdb}" class="btn btn-warning bg-warning text-dark font-weight-bold">IMDB</a>
            </div>
        </div>
        `);
    });
});
