

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. OBTENCIÓN DE ELEMENTOS (Ahora solo se ejecutan cuando el DOM está listo)
    const $input = document.getElementById('alimentoInput');
    const $lista = document.getElementById('listaAlimentos');
    const $addBtn = document.getElementById('addBtn');
    const $deleteBtn = document.getElementById('deleteBtn');
    const $sortBtn = document.getElementById('sortBtn');

    // Inicializar el estado del botón de ordenar al cargar la página
    // Ahora esta llamada es segura porque $lista ya ha sido definido.
    actualizarEstadoBotonOrdenar(); 

    $addBtn.addEventListener('click', agregarAlimento);
    $deleteBtn.addEventListener('click', borrarAlimento);
    $sortBtn.addEventListener('click', ordenarAlimentos);


    /**
     * Habilita o deshabilita el botón de ordenar.
     */
    function actualizarEstadoBotonOrdenar() {
        // $lista es accesible aquí porque estamos dentro del mismo ámbito (scope)
        const itemCount = $lista.children.length; 
        $sortBtn.disabled = itemCount <= 1;
    }

    //  MANEJADORES DE EVENTOS
    
    function agregarAlimento() {
        const alimento = $input.value.trim();
        if (alimento === '') {
            return; 
        }

        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = alimento; 
        nuevoLi.classList.add('list-group-item'); 

        $lista.appendChild(nuevoLi);

        $input.value = '';
        actualizarEstadoBotonOrdenar();
    }

    function borrarAlimento() {
        const alimentoABorrar = $input.value.trim();
        if (alimentoABorrar === '') {
            return;
        }

        const items = $lista.querySelectorAll('li'); 
        
        for (const item of items) {
            if (item.textContent.trim() === alimentoABorrar) {
                $lista.removeChild(item); 
                $input.value = ''; 
                actualizarEstadoBotonOrdenar();
                return;
            }
        }
    }

    function ordenarAlimentos() {
        const items = Array.from($lista.querySelectorAll('li'));
        const alimentosTexto = items.map(item => item.textContent.trim());

        alimentosTexto.sort((a, b) => a.localeCompare(b)); 

        $lista.innerHTML = ''; 

        alimentosTexto.forEach(alimento => {
            const nuevoLi = document.createElement('li');
            nuevoLi.textContent = alimento;
            nuevoLi.classList.add('list-group-item');
            $lista.appendChild(nuevoLi);
        });
    }

}); 