let $ = require("jQuery");
import {movieData} from './data';

function renderMovie(movie){
    // document.querySelector(".pic").setAttribute("src",movie.img);
    // document.getElementById("info").innerText=movie.info;
    // document.getElementsByTagName("h3")[0].innerText=movie.title;
    // document.getElementById("theList").innerText=movie.actors;
   $("#info").text(movie.info);
    $(".pic").attr("src",movie.img);
   $("h3").text(movie.title);
    let actors = "";

    for(let i=0; i<movie.actors.length; i++){
  
      actors += "<li>" + movie.actors[i] + "</li>";
  
    }
  
    document.querySelector("#theList").innerHTML = actors;

}
// function changeStarRating(grade){
//     for (let i = 1; i <= 5; i++) {
//        let star=document.getElementById("star"+i);
//        if   (i<=grade){
//            star.classList.add("filled");
//        }
//        else{
//            star.classList.remove("filled");

//        }
        
//     }

// }
function changeStarRating(grade){

    $(".filled").removeClass("filled");
  
    for(let i=1; i<=grade; i++){
  
      $("[data-grade-id=" + i + "]").addClass("filled");
  
    }
  
  }
  $(".stars").on("click", "span", function(e){

    let star = $(e.target);
  
    let grade = parseInt(star.attr("data-grade-id"));
  
    changeStarRating(grade);
  
  });
// for (let i = 1; i<=5; i++) {
//     let star=document.getElementById("star" +i);
//     star.addEventListener("click",function(){
//         changeStarRating(i);
//     });
    
// }
    
    renderMovie(movieData);
    console.log("hej");


 