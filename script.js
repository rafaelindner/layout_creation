document.addEventListener('DOMContentLoaded', function () {
    const btnAddDia = document.getElementById('btn-add-dia');
    const btnAddNoite = document.getElementById('btn-add-noite');
    const tableDia = document.getElementById('table-dia');
    const tableNoite = document.getElementById('table-noite');
    const btnRemove = document.getElementsByClassName('btn-remove');

    btnAddDia.addEventListener('click', function () {
        const inputTarefaDia = document.getElementById('input-tarefa-dia');
        const tarefaDia = inputTarefaDia.value;

        if (tarefaDia.trim() !== '') {
            const row = document.createElement('tr');
            const cellTarefa = document.createElement('td');
            const cellAcao = document.createElement('td');
            const btnRemove = document.createElement('button');

            cellTarefa.textContent = tarefaDia;
            btnRemove.textContent = 'Remover';
            btnRemove.classList.add('btn-remove');

            btnRemove.addEventListener('click', function () {
                row.remove();
            });

            cellAcao.appendChild(btnRemove);
            row.appendChild(cellTarefa);
            row.appendChild(cellAcao);
            tableDia.querySelector('tbody').appendChild(row);

            inputTarefaDia.value = '';
        }
    });

    btnAddNoite.addEventListener('click', function () {
        const inputTarefaNoite = document.getElementById('input-tarefa-noite');
        const tarefaNoite = inputTarefaNoite.value;

        if (tarefaNoite.trim() !== '') {
            const row = document.createElement('tr');
            const cellTarefa = document.createElement('td');
            const cellAcao = document.createElement('td');
            const btnRemove = document.createElement('button');

            cellTarefa.textContent = tarefaNoite;
            btnRemove.textContent = 'Remover';
            btnRemove.classList.add('btn-remove');

            btnRemove.addEventListener('click', function () {
                row.remove();
            });

            cellAcao.appendChild(btnRemove);
            row.appendChild(cellTarefa);
            row.appendChild(cellAcao);
            tableNoite.querySelector('tbody').appendChild(row);

            inputTarefaNoite.value = '';
        }
    });

    for (let i = 0; i < btnRemove.length; i++) {
        btnRemove[i].addEventListener('click', function () {
            const row = this.parentNode.parentNode;
            row.remove();
        });
    }
});
