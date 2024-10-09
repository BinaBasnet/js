
        function createTable() {
            const rows = document.getElementById('rows').value;
            const columns = document.getElementById('columns').value;
            const tableContainer = document.getElementById('tableContainer');

            tableContainer.innerHTML = '';
            

            if (rows > 0 && columns > 0) {
               
                const table = document.createElement('table');
                table.style.borderCollapse = 'collapse';

                
                for (let i = 0; i < rows; i++) {
                    const tr = document.createElement('tr');
                    for (let j = 0; j < columns; j++) {
                       
                        td.style.border = '1px solid black';
                        td.style.padding = '8px';
                        td.innerText = `Row ${i + 1} Col ${j + 1}`;
                        tr.appendChild(td);
                    }
                    table.appendChild(tr);
                }

                
                tableContainer.appendChild(table);
            } else {
                alert('Please enter valid numbers for rows and columns.');
            }
        }
