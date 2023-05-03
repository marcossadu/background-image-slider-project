let indexPhoto = 1
const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4",
  
];

// buena suerte



document.querySelector(".img-container").style.backgroundImage = `url(../img/${pictures[indexPhoto]}.jpeg)`;

document.querySelector(".btn-left").addEventListener("click",() => {
  indexPhoto = (indexPhoto - 1 + pictures.length) % pictures.length;
  document.querySelector(".img-container").style.backgroundImage = `url(../img/${pictures[indexPhoto]}.jpeg)`;


})

  document.querySelector(".btn-right").addEventListener("click", () => {
    indexPhoto = (indexPhoto + 1 ) % pictures.length;
    document.querySelector(".img-container").style.backgroundImage = `url(../img/${pictures[indexPhoto]}.jpeg)`;
  });

