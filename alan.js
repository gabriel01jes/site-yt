const imagens = document.querySelectorAll("img");
const botaoImagens = document.getElementById("Imagens");

let trocou = false;

// Lista com os novos caminhos das imagens
const novasImagens = {
    "yuri1.jpeg": "dona1.jpeg",
    "yuri2.jpeg": "dona2.jpeg",
    "yuri3.jpeg": "dona3.jpeg",
    "yuri4.jpeg": "dona4.jpeg",
    "yuri5.jpeg": "dona5.jpeg",
    "yuri6.jpeg": "dona6.jpeg",
    "yurilogo.jpeg": "donalogo.jpeg",
    "yuricima.jpeg": "donacima.jpeg"
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
