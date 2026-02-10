
// Configuración de formaciones con posiciones (coordenadas % del campo)
const formations = {
            '4-3-3': {
                name: '4-3-3',
                positions: [
                    { id: 'GK', name: 'POR', x: 50, y: 90 },
                    { id: 'LB', name: 'LI', x: 15, y: 75 },
                    { id: 'CB1', name: 'DFC', x: 38, y: 78 },
                    { id: 'CB2', name: 'DFC', x: 62, y: 78 },
                    { id: 'RB', name: 'LD', x: 85, y: 75 },
                    { id: 'CM1', name: 'MCD', x: 35, y: 55 },
                    { id: 'CM2', name: 'MC', x: 50, y: 50 },
                    { id: 'CM3', name: 'MCD', x: 65, y: 55 },
                    { id: 'LW', name: 'EI', x: 20, y: 30 },
                    { id: 'ST', name: 'DEL', x: 50, y: 20 },
                    { id: 'RW', name: 'ED', x: 80, y: 30 }
                ]
            },
            '4-4-2': {
                name: '4-4-2',
                positions: [
                    { id: 'GK', name: 'POR', x: 50, y: 90 },
                    { id: 'LB', name: 'LI', x: 15, y: 75 },
                    { id: 'CB1', name: 'DFC', x: 38, y: 78 },
                    { id: 'CB2', name: 'DFC', x: 62, y: 78 },
                    { id: 'RB', name: 'LD', x: 85, y: 75 },
                    { id: 'LM', name: 'MI', x: 20, y: 50 },
                    { id: 'CM1', name: 'MC', x: 38, y: 50 },
                    { id: 'CM2', name: 'MC', x: 62, y: 50 },
                    { id: 'RM', name: 'MD', x: 80, y: 50 },
                    { id: 'ST1', name: 'DEL', x: 40, y: 22 },
                    { id: 'ST2', name: 'DEL', x: 60, y: 22 }
                ]
            },
            '5-3-2': {
                name: '5-3-2',
                positions: [
                    { id: 'GK', name: 'POR', x: 50, y: 90 },
                    { id: 'LB', name: 'LI', x: 10, y: 72 },
                    { id: 'CB1', name: 'DFC', x: 28, y: 76 },
                    { id: 'CB2', name: 'DFC', x: 50, y: 78 },
                    { id: 'CB3', name: 'DFC', x: 72, y: 76 },
                    { id: 'RB', name: 'LD', x: 90, y: 72 },
                    { id: 'CM1', name: 'MCD', x: 35, y: 52 },
                    { id: 'CM2', name: 'MCO', x: 50, y: 43 },
                    { id: 'CM3', name: 'MCD', x: 65, y: 52 },
                    { id: 'ST1', name: 'DEL', x: 38, y: 25 },
                    { id: 'ST2', name: 'DEL', x: 62, y: 25 }
                ]
            },
            '5-4-1': {
                name: '5-4-1',
                positions: [
                    { id: 'GK', name: 'POR', x: 50, y: 90 },
                    { id: 'LB', name: 'LD', x: 10, y: 72 },
                    { id: 'CB1', name: 'DFC', x: 28, y: 76 },
                    { id: 'CB2', name: 'DFC', x: 50, y: 78 },
                    { id: 'CB3', name: 'DFC', x: 72, y: 76 },
                    { id: 'RB', name: 'LI', x: 90, y: 72 },
                    { id: 'LM', name: 'MI', x: 18, y: 50 },
                    { id: 'CM1', name: 'MC', x: 38, y: 48 },
                    { id: 'CM2', name: 'MC', x: 62, y: 48 },
                    { id: 'RM', name: 'MD', x: 82, y: 50 },
                    { id: 'ST', name: 'DEL', x: 50, y: 20 }
                ]
            }
        };

        // Jugadores asignados (se cargará desde Jugadores.js)
        const assignedPlayers = {};

        // Jugadores disponibles (ejemplo - se reemplazará con Jugadores.js)
        const availablePlayers = [
            { id: 1, name: 'Courtois', position: 'POR', rating: 90 },
            { id: 2, name: 'Ter Stegen', position: 'POR', rating: 89 },
            { id: 3, name: 'Vinicius Jr', position: 'EI', rating: 91 },
            { id: 4, name: 'Bellingham', position: 'MCO', rating: 91 },
            { id: 5, name: 'Mbappé', position: 'DEL', rating: 91 },
            { id: 6, name: 'Rodri', position: 'MCD', rating: 89 },
            { id: 7, name: 'Dani Carvajal', position: 'LD', rating: 87 },
            { id: 8, name: 'Virgil van Dijk', position: 'DFC', rating: 90 }
        ];

        let currentFormation = null;
        let selectedPosition = null;

        function selectFormation(formationKey) {
            currentFormation = formationKey;
            const formation = formations[formationKey];
            
            // Ocultar selector y mostrar campo
            document.getElementById('formationSelector').style.display = 'none';
            document.getElementById('fieldView').style.display = 'block';
            document.getElementById('formationNameDisplay').textContent = formation.name;
            
            // Generar posiciones en el campo
            renderPositions(formation);
        }

        function renderPositions(formation) {
            const container = document.getElementById('positionsContainer');
            container.innerHTML = '';
            
            formation.positions.forEach(pos => {
                const positionDiv = document.createElement('div');
                positionDiv.className = 'position';
                positionDiv.style.left = pos.x + '%';
                positionDiv.style.top = pos.y + '%';
                positionDiv.dataset.positionId = pos.id;
                positionDiv.dataset.positionName = pos.name;
                positionDiv.onclick = () => openPlayerSelector(pos);
                
                // Verificar si hay jugador asignado
                if (assignedPlayers[pos.id]) {
                    positionDiv.classList.add('occupied');
                    positionDiv.innerHTML = `<span class="pos-label">${pos.name}</span><span class="player-name">${assignedPlayers[pos.id].name}</span>`;
                } else {
                    positionDiv.innerHTML = `<span class="pos-label">${pos.name}</span>`;
                }
                
                container.appendChild(positionDiv);
            });
        }

        function openPlayerSelector(position) {
            selectedPosition = position;
            const panel = document.getElementById('playerSelectorPanel');
            const playerList = document.getElementById('playerList');
            
            // Mostrar panel
            panel.style.display = 'block';
            
            // Filtrar jugadores por posición (simplificado - muestra todos)
            playerList.innerHTML = '';
            availablePlayers.forEach(player => {
                const playerDiv = document.createElement('div');
                playerDiv.className = 'player-option';
                playerDiv.innerHTML = `<strong>${player.name}</strong> (${player.position}) - ${player.rating}`;
                playerDiv.onclick = () => assignPlayer(player);
                playerList.appendChild(playerDiv);
            });
        }

        function assignPlayer(player) {
            if (selectedPosition) {
                assignedPlayers[selectedPosition.id] = player;
                // Actualizar visualización
                renderPositions(formations[currentFormation]);
                // Cerrar panel
                closePlayerPanel();
            }
        }

        function closePlayerPanel() {
            document.getElementById('playerSelectorPanel').style.display = 'none';
            selectedPosition = null;
        }

        function goBackToFormations() {
            document.getElementById('fieldView').style.display = 'none';
            document.getElementById('formationSelector').style.display = 'block';
            currentFormation = null;
        }