const imagens = document.querySelectorAll("img");
const botaoImagens = document.getElementById("Imagens");

let trocou = false;

// Lista com os novos caminhos das imagens
const novasImagens = {
    "alan1.jpeg": "1.jpeg",
    "alan2.jpeg": "2.jpeg",
    "alan3.jpeg": "3.jpeg",
    "alan4.jpeg": "4.jpeg",
    "alan5.jpeg": "5.jpeg",
    "alan6.jpeg": "6.jpeg",
    "alanlogo.jpeg": "1logo.jpeg",
    "alancima.jpeg": "2cima.jpeg"
};

botaoImagens.addEventListener("click", () => {
    if (!trocou) {
        imagens.forEach(img => {
            img.dataset.original = img.src; // salva o original
            const arquivo = img.src.split("/").pop(); // pega só o nome do arquivo
            if (novasImagens[arquivo]) {
                img.src = novasImagens[arquivo];
            }
        });
        trocou = true;
    } else {
        imagens.forEach(img => {
            if (img.dataset.original) {
                img.src = img.dataset.original; // volta ao original
            }
        });
        trocou = false;
    }
});
