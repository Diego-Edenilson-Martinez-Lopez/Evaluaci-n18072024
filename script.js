document.addEventListener('DOMContentLoaded', function() {
    const DEMLclientes = [
        { nombre: 'Lolsito', apellido: 'Lopez', categoria: 'Bros' },
        { nombre: 'Nigga', apellido: 'Nigga', categoria: 'Bros' }
    ];

    function DEMLrenderClientes() {
        const tbody = document.getElementById('clientesTableBody');
        tbody.innerHTML = '';
        
        let currentCategory = '';
        let categoryRowspan = 0;
        
        DEMLclientes.forEach((cliente, index) => {
            const row = document.createElement('tr');
            
            if (cliente.categoria !== currentCategory) {
                currentCategory = cliente.categoria;
                categoryRowspan = DEMLclientes.filter(c => c.categoria === currentCategory).length;
                
                row.innerHTML = `
                    <td>${cliente.nombre}</td>
                    <td>${cliente.apellido}</td>
                    <td rowspan="${categoryRowspan}">${cliente.categoria}</td>
                    <td>
                        <span class="DEML-action-button DEML-edit">E</span>
                        <span class="DEML-action-button DEML-delete">D</span>
                    </td>
                `;
            } else {
                row.innerHTML = `
                    <td>${cliente.nombre}</td>
                    <td>${cliente.apellido}</td>
                    <td>
                        <span class="DEML-action-button DEML-edit">E</span>
                        <span class="DEML-action-button DEML-delete">D</span>
                    </td>
                `;
            }
            
            tbody.appendChild(row);
        });

        document.getElementById('buscarBtn').addEventListener('click', function() {
            const nombre = document.getElementById('nombre').value;
            alert(`Su Nombre es: ${nombre}`);
        });
    }
    document.getElementById('buscarBtn').addEventListener('click', function() {
        const nombre = document.getElementById('nombre').value.toLowerCase();
        const apellido = document.getElementById('apellido').value.toLowerCase();
        
        const filteredClientes = DEMLclientes.filter(cliente => 
            cliente.nombre.toLowerCase().includes(nombre) &&
            cliente.apellido.toLowerCase().includes(apellido)
        );
        
        const tbody = document.getElementById('clientesTableBody');
        tbody.innerHTML = '';
        filteredClientes.forEach(cliente => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cliente.nombre}</td>
                <td>${cliente.apellido}</td>
                <td>${cliente.categoria}</td>
                <td>
                    <span class="DEML-action-button DEML-edit">E</span>
                    <span class="DEML-action-button DEML-delete">D</span>
                </td>
            `;
            tbody.appendChild(row);
        });
    });

    DEMLrenderClientes();
});