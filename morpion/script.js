// alert ("Morpion en JavaScript");


class Morpion {

    constructor() {
        this.box = document.querySelectorAll(".box");
        this.status = document.querySelector("#status");
        this.signe = ["X", "O"];
        this.tour = 0;
    }

    winner() {
        // condition de win ligne
        if (this.box[0].textContent === "X" &&
            this.box[1].textContent === "X" &&
            this.box[2].textContent === "X") {
            this.status.innerHTML = " ' X ' winner";
            alert('  X  winner');
        }


        else if (this.box[0].textContent === "O" &&
            this.box[1].textContent === "O" &&
            this.box[2].textContent === "O") {
            this.status.innerHTML = "  ' O ' winner";
            alert('  O  winner');
        }


        else if (this.box[3].textContent === "X" &&
            this.box[4].textContent === "X" &&
            this.box[5].textContent === "X") {
            this.status.innerHTML = " ' X ' winner";
            alert('  X  winner');
        }


        else if (this.box[3].textContent === "O" &&
            this.box[4].textContent === "O" &&
            this.box[5].textContent === "O") {
            this.status.innerHTML = "  ' O ' winner";
            alert('  O  winner');
        }


        else if (this.box[6].textContent === "X" &&
            this.box[7].textContent === "X" &&
            this.box[8].textContent === "X") {
            this.status.innerHTML = " ' X ' winner";
            alert('  X  winner');
        }

        else if (this.box[6].textContent === "O" &&
            this.box[7].textContent === "O" &&
            this.box[8].textContent === "O") {
            this.status.innerHTML = "  ' O ' winner";
            alert('  O  winner');
        }

        // condition de win colones
        else if (this.box[0].textContent === "X" &&
            this.box[3].textContent === "X" &&
            this.box[6].textContent === "X") {
            this.status.innerHTML = " ' X ' winner";
            alert('  X  winner');
        }

        else if (this.box[0].textContent === "O" &&
            this.box[3].textContent === "O" &&
            this.box[6].textContent === "O") {
            this.status.innerHTML = "  ' O ' winner";
            alert('  O  winner');
        }

        else if (this.box[1].textContent === "X" &&
            this.box[4].textContent === "X" &&
            this.box[7].textContent === "X") {
            this.status.innerHTML = " ' X ' winner";
            alert('  X  winner');
        }

        else if (this.box[1].textContent === "O" &&
            this.box[4].textContent === "O" &&
            this.box[7].textContent === "O") {
            this.status.innerHTML = "  ' O ' winner";
            alert('  O  winner');
        }

        else if (this.box[2].textContent === "X" &&
            this.box[5].textContent === "X" &&
            this.box[8].textContent === "X") {
            this.status.innerHTML = " ' X ' winner";
            alert('  X  winner');
        }
        else if (this.box[2].textContent === "O" &&
            this.box[5].textContent === "O" &&
            this.box[8].textContent === "O") {
            this.status.innerHTML = "  ' O ' winner";
            alert('  O  winner');
        }

        // condition de win en diagonale
        else if (this.box[0].textContent === "X" &&
            this.box[4].textContent === "X" &&
            this.box[8].textContent === "X") {
            this.status.innerHTML = " ' X ' winner";
            alert('  X  winner');
        }
        else if (this.box[0].textContent === "O" &&
            this.box[4].textContent === "O" &&
            this.box[8].textContent === "O") {
            this.status.innerHTML = "  ' O ' winner";
            alert('  O  winner');
        }
        else if (this.box[2].textContent === "X" &&
            this.box[4].textContent === "X" &&
            this.box[6].textContent === "X") {
            this.status.innerHTML = " ' X ' winner";
            alert('  X  winner');
        }
        else if (this.box[2].textContent === "O" &&
            this.box[4].textContent === "O" &&
            this.box[6].textContent === "O") {
            this.status.innerHTML = "  ' O ' winner";
            alert('  O  winner');
        }
    }

    // boucle forEach sur l'element box affiche un signe selon le tour de jeu 1 ou 0 
    // execute les fonction afficheur() et winner()

    jeu() {
        this.box.forEach(element => {
            element.addEventListener("click", event => {
                if (this.tour == 1) {
                    this.tour = 0;

                } else {
                    this.tour = 1;
                }
                this.afficheur();
                this.winner();

                element.innerHTML = this.signe[this.tour];  
            })
        });
    }

    /* creation d'un btn appuyer pour commencer 
     cette fonction est sur le bouton commencer
     et execute la fonction jeu()
    start() {
        this.jeu();
    }*/

    //appuyer pour recommencer 
    effacer() {
        document.location.reload(true);
    }

    // Pour  afficher le statue en haut à droite 
    // c'est le tour de qui ?
    afficheur() {
        if (this.signe[this.tour] == "O") {

            this.status.innerHTML = "<u> C'est à vous <strong>" + this.signe[0] +"</strong> de jouer !</u>";
        } else {

            this.status.innerHTML = "<u> C'est à vous <strong>" + this.signe[1] +"</strong> de jouer !</u>";
        }
    }

}

var morpion = new Morpion();
morpion.jeu();











