function renderMovie(movie){
    document.querySelector(".pic").setAttribute("src",movie.img);
    document.getElementById("info").innerText=movie.info;
    document.getElementsByTagName("h3")[0].innerText=movie.title;
    // document.getElementById("theList").innerText=movie.actors;
    
    let actors = "";

    for(let i=0; i<movie.actors.length; i++){
  
      actors += "<li>" + movie.actors[i] + "</li>";
  
    }
  
    document.querySelector("#theList").innerHTML = actors;

}
    renderMovie(movieData);