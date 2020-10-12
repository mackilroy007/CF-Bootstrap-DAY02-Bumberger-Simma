var actors = JSON.parse(content)
console.table(actors);



// fill json data into html
$(document).ready(function(){


    for (let i = 0; i < actors.length; i++){
        $(".actorCard").append(`
        <div id="${i}" class="col card">
            <h5 class="card-title">${actors[i].name}</h5>
            <img src="${actors[i].image}" class="card-img-top w-50 rounded mx-auto d-block " alt="...">
            <div class="card-body">
                <p class="card-text"> Born: ${actors[i].birthday}</p>
                <a href="${actors[i].imdb}" class="btn btn-primary">IMDB</a>
            </div>
        </div>
        `);
    };

    
});

    

//create eventlistener for navbar


/*$(".fa-thumbs-up").on('click', function(){
    let index = $(this).attr("id");
    let newLikes = movieData[index].likes += 1;
    $(this).siblings().last().html(`${newLikes}`);
});*/