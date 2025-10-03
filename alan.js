const imagens = document.querySelectorAll("img");
const botaoImagens = document.getElementById("Imagens");

let trocou = false;

// Lista com os novos caminhos das imagens
const novasImagens = {
    "alan1.png": "d1.jpeg",
    "alan2.png": "d2.jpeg",
    "alan3.png": "d3.jpeg",
    "alan4.png": "d4.jpeg",
    "alan5.png": "d5.jpeg",
    "alan6.png": "d6.jpeg",
    "alanlogo.png": "d1logo.jpeg",
    "alancima.png": "d2cima.jpeg"
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
