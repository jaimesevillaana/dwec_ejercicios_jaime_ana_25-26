
console.log("T05 - Ejercicio 01");


document.addEventListener('DOMContentLoaded', () => {

    const BG_CLASES = ['bg-primary', 'bg-success', 'bg-danger', 'bg-white'];

    const $mainContainer = document.getElementById('mainContainer');

    function cambiarColorFondo(newColorClass) {

        //eliminar clases anteriores 
        $mainContainer.classList.remove(...BG_CLASES);

        //añadir nueva clase
        $mainContainer.classList.add(newColorClass);
    }

    //seleccionamos todos los botones que estan dentro de main
    const $buttons = $mainContainer.querySelectorAll('button');

    $buttons.forEach(button => {
        const targetColor = button.dataset.color;
    })

});