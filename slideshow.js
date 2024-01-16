/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let slideIndex1 = 1;
let slideIndex2 = 1;
showSlides(1, 1);
showSlides(1, 2);
function plusSlides(n, no) {
    showSlides(window['slideIndex' + no] += n, no);
}

function currentSlide(n, no) {
    showSlides(window['slideIndex' + no] = n, no);
}

