document.addEventListener("DOMContentLoaded", () => {

    const namerepository=document.getElementById("update")
    const btnupdate=document.getElementById("btn")

    
    const btnchangecat = document.getElementById("changecat");
    const btnreturndog = document.getElementById("returndog");

    
    const imagen1 = document.getElementById("imag1");
    const imagen2 = document.getElementById("imag2");
    const imagen3 = document.getElementById("imag3");
    
    const name1= document.getElementById("name1");
    const name2= document.getElementById("name2");
    const name3= document.getElementById("name3");

    const p1= document.getElementById("p1");
    const p2= document.getElementById("p2");
    const p3= document.getElementById("p3");
  
    // const imagecat = [
    //     "/Image/cat1.png",
    //     "/Image/cat2.png",
    //     "/Image/cat3.png"
    // ];
    // const imagedog= [
    //     "/Image/dogboxer.png",
    //     "/Image/dogdoberman.png",
    //     "/Image/dogpastor.png"

    // ];
    const imagecat = [
        "/Image/cat1.png",
        "/Image/cat2.png",
        "/Image/cat3.png"
    ];
    const imagedog = [
        "/Image/dogboxer.png",
        "/Image/dogdoberman.png",
        "/Image/dogpastor.png"
    ];

    if (btnupdate && namerepository){   

        btnupdate.addEventListener("click",()=>{
            namerepository.textContent="WELCOME TO MY REPOSITORY";
            namerepository.classList.add("activejs");
        });
    }
    if (btnchangecat){
        btnchangecat.addEventListener("click", () => {
            baground=document.body;
            baground.style.backgroundImage = "url('/Image/fontcat.png')";
            baground.classList.add("fontpets");
            imagen1.src = imagecat[0];
            imagen2.src = imagecat[1];
            imagen3.src = imagecat[2];

            name1.textContent = "GATO PERSA";
            name2.textContent = "GATO SIAMES";
            name3.textContent = "GATO";

            p1.textContent = "The Persian cat is known for its long, luxurious fur and calm temperament.";
            p2.textContent = "The Siamese cat is recognized for its striking blue eyes and vocal nature.";
            p3.textContent = "Cats are small, carnivorous mammals that are often kept as pets for their companionship and hunting skills.";

        });
    }
    if (btnreturndog){
        btnreturndog.addEventListener("click", () => {
            baground=document.body;
            baground.style.backgroundImage="url('/Image/fontdog.png')";
            baground.classList.add("fontpets");
            imagen1.src = imagedog[0];
            imagen2.src = imagedog[1];
            imagen3.src = imagedog[2];

            name1.textContent = "DOG BOXER";
            name2.textContent = "DOG DOBERMAN";
            name3.textContent = "DOG PASTORAL";

            p1.textContent = "Boxer dogs are medium-to-large...";
            p2.textContent = "The Doberman Pinscher is sleek...";
            p3.textContent = "The pastoral group encompasses...";

        });
    }

});
