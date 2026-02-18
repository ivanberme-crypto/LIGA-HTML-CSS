//FORMACIONES

const formations = {
    '4-3-3': {
        name: '4-3-3',
        positions: [
            { id: 'GK', name: 'POR', x: 50, y: 90, type: 'GK' },
            { id: 'LB', name: 'LI', x: 10, y: 70, type: 'LB' },
            { id: 'CB1', name: 'DFC', x: 35, y: 75, type: 'CB' },
            { id: 'CB2', name: 'DFC', x: 65, y: 75, type: 'CB' },
            { id: 'RB', name: 'LD', x: 90, y: 70, type: 'RB' },
            { id: 'CM1', name: 'MCD', x: 35, y: 50, type: 'CM' },
            { id: 'CM2', name: 'MC', x: 50, y: 40, type: 'CM' },
            { id: 'CM3', name: 'MCD', x: 65, y: 50, type: 'CM' },
            { id: 'LW', name: 'EI', x: 10, y: 28, type: 'LW' },
            { id: 'ST', name: 'DEL', x: 50, y: 18, type: 'ST' },
            { id: 'RW', name: 'ED', x: 90, y: 28, type: 'RW' }
        ]
    },
    '4-4-2': {
        name: '4-4-2',
        positions: [
            { id: 'GK', name: 'POR', x: 50, y: 90, type: 'GK' },
            { id: 'LB', name: 'LI', x: 13, y: 65, type: 'LB' },
            { id: 'CB1', name: 'DFC', x: 31, y: 75, type: 'CB' },
            { id: 'CB2', name: 'DFC', x: 68, y: 75, type: 'CB' },
            { id: 'RB', name: 'LD', x: 87, y: 65, type: 'RB' },
            { id: 'LM', name: 'MI', x: 10, y: 40, type: 'LM' },
            { id: 'CM1', name: 'MC', x: 35, y: 50, type: 'CM' },
            { id: 'CM2', name: 'MC', x: 65, y: 50, type: 'CM' },
            { id: 'RM', name: 'MD', x: 90, y: 40, type: 'RM' },
            { id: 'ST1', name: 'DEL', x: 35, y: 25, type: 'ST' },
            { id: 'ST2', name: 'DEL', x: 65, y: 25, type: 'ST' }
        ]
    },
    '5-3-2': {
        name: '5-3-2',
        positions: [
            { id: 'GK', name: 'POR', x: 50, y: 90, type: 'GK' },
            { id: 'LB', name: 'LI', x: 8, y: 56, type: 'LB' },
            { id: 'CB1', name: 'DFC', x: 30, y: 70, type: 'CB' },
            { id: 'CB2', name: 'DFC', x: 50, y: 70, type: 'CB' },
            { id: 'CB3', name: 'DFC', x: 70, y: 70, type: 'CB' },
            { id: 'RB', name: 'LD', x: 92, y: 56, type: 'RB' },
            { id: 'CM1', name: 'MC', x: 25, y: 42, type: 'CM' },
            { id: 'CM2', name: 'MC', x: 50, y: 42, type: 'CM' },
            { id: 'CM3', name: 'MC', x: 75, y: 42, type: 'CM' },
            { id: 'ST1', name: 'DEL', x: 38, y: 20, type: 'ST' },
            { id: 'ST2', name: 'DEL', x: 62, y: 20, type: 'ST' }
        ]
    },
    '5-4-1': {
        name: '5-4-1',
        positions: [
            { id: 'GK', name: 'POR', x: 50, y: 90, type: 'GK' },
            { id: 'LB', name: 'LI', x: 8, y: 65, type: 'LB' },
            { id: 'CB1', name: 'DFC', x: 28, y: 70, type: 'CB' },
            { id: 'CB2', name: 'DFC', x: 50, y: 70, type: 'CB' },
            { id: 'CB3', name: 'DFC', x: 72, y: 70, type: 'CB' },
            { id: 'RB', name: 'LD', x: 92, y: 65, type: 'RB' },
            { id: 'LM', name: 'MI', x: 13, y: 40, type: 'LM' },
            { id: 'CM1', name: 'MC', x: 35, y: 45, type: 'CM' },
            { id: 'CM2', name: 'MC', x: 65, y: 45, type: 'CM' },
            { id: 'RM', name: 'MD', x: 87, y: 40, type: 'RM' },
            { id: 'ST', name: 'DEL', x: 50, y: 25, type: 'ST' }
        ]
    }
};

// JUGADORES

const availablePlayers = [
    // Porteros
    { id: 1, name: 'Courtois', position: 'POR', rating: 90, image: '../Imagenes/Jugadores/Courtois.png' },
    { id: 2, name: 'Ter Stegen', position: 'POR', rating: 89, image: '../Imagenes/Jugadores/ter Stegen.png' },
    { id: 3, name: 'Alisson', position: 'POR', rating: 89, image: '../Imagenes/Jugadores/Alisson.png' },
    { id: 4, name: 'Ederson', position: 'POR', rating: 87, image: '../Imagenes/Jugadores/Ederson.png' },
    { id: 5, name: 'Donnarumma', position: 'POR', rating: 89, image: '../Imagenes/Jugadores/Donnarumma.png' },
    
    // Defensas
    { id: 6, name: 'Van Dijk', position: 'DFC', rating: 90, image: '../Imagenes/Jugadores/van Dijk.png' },
    { id: 7, name: 'Ruben Dias', position: 'DFC', rating: 86, image: '../Imagenes/Jugadores/Ruben Dias.png' },
    { id: 8, name: 'Rudiger', position: 'DFC', rating: 86, image: '../Imagenes/Jugadores/Rudiger.png' },
    { id: 9, name: 'Stones', position: 'DFC', rating: 82, image: '../Imagenes/Jugadores/Stones.png' },
    { id: 10, name: 'Dani Carvajal', position: 'LD', rating: 89, image: '../Imagenes/Jugadores/Carvajal.png' },
    { id: 11, name: 'Walker', position: 'LD', rating: 89, image: '../Imagenes/Jugadores/Walker.png' },
    { id: 12, name: 'Theo Hernandez', position: 'LI', rating: 84, image: '../Imagenes/Jugadores/Hernandez.png' },
    { id: 13, name: 'Davies', position: 'LI', rating: 84, image: '../Imagenes/Jugadores/Davies.png' },
    { id: 14, name: 'Saliba', position: 'DFC', rating: 90, image: '../Imagenes/Jugadores/Saliba.png' },
    { id: 15, name: 'Gvardiol', position: 'LI', rating: 84, image: '../Imagenes/Jugadores/Gvardiol.png' },
    
    // Centrocampistas
    { id: 16, name: 'Rodri', position: 'MCD', rating: 91, image: '../Imagenes/Jugadores/Rodri.png' },
    { id: 17, name: 'De Bruyne', position: 'MCD', rating: 89, image: '../Imagenes/Jugadores/De Bruyne.png' },
    { id: 18, name: 'Bellingham', position: 'MCO', rating: 92, image: '../Imagenes/Jugadores/Bellingham.png' },
    { id: 19, name: 'Modric', position: 'MC', rating: 83, image: '../Imagenes/Jugadores/Modric.png' },
    { id: 20, name: 'Kroos', position: 'MC', rating: 90, image: '../Imagenes/Jugadores/Kroos.png' },
    { id: 21, name: 'Valverde', position: 'MC', rating: 89, image: '../Imagenes/Jugadores/Valverde.png' },
    { id: 22, name: 'Pedri', position: 'MC', rating: 95, image: '../Imagenes/Jugadores/Pedri.png' },
    { id: 23, name: 'Gavi', position: 'MC', rating: 83, image: '../Imagenes/Jugadores/Gavi.png' },
    { id: 24, name: 'Fernandes', position: 'MCO', rating: 87, image: '../Imagenes/Jugadores/Bruno Fernandes.png' },
    { id: 25, name: 'Rice', position: 'MCD', rating: 94, image: '../Imagenes/Jugadores/Rice.png' },
    { id: 26, name: 'Musiala', position: 'MCO', rating: 88, image: '../Imagenes/Jugadores/Musiala.png' },
    { id: 27, name: 'Ruben Garcia', position: 'MD', rating: 78, image: '../Imagenes/Jugadores/Ruben Garcia.png' },
    { id: 28, name: 'Baku', position: 'MD', rating: 78, image: '../Imagenes/Jugadores/Baku.png' },
    { id: 29, name: 'Antman', position: 'MD', rating: 75, image: '../Imagenes/Jugadores/Antman.png' },
    { id: 30, name: 'McGinn', position: 'MI', rating: 81, image: '../Imagenes/Jugadores/McGinn.png' },
    { id: 31, name: 'Sergio Gomez', position: 'MI', rating: 79, image: '../Imagenes/Jugadores/Sergio Gomez.png' },
    { id: 32, name: 'Ruggeri', position: 'MI', rating: 75, image: '../Imagenes/Jugadores/Ruggeri.png' },
    { id: 33, name: 'Salah', position: 'MD', rating: 91, image: '../Imagenes/Jugadores/Salah.png' },
    { id: 34, name: 'Raphinha', position: 'MI', rating: 95, image: '../Imagenes/Jugadores/Raphinha.png' },
    
    // Delanteros
    { id: 35, name: 'Haaland', position: 'DEL', rating: 90, image: '../Imagenes/Jugadores/Haaland.png' },
    { id: 36, name: 'Mbappé', position: 'DEL', rating: 96, image: '../Imagenes/Jugadores/Mbappe.png' },
    { id: 37, name: 'Vinicius Jr', position: 'EI', rating: 89, image: '../Imagenes/Jugadores/Vini Jr..png' },
    { id: 38, name: 'Lewandowski', position: 'DEL', rating: 88, image: '../Imagenes/Jugadores/Lewandowski.png' },
    { id: 39, name: 'Kane', position: 'DEL', rating: 89, image: '../Imagenes/Jugadores/Kane.png' },
    { id: 40, name: 'Saka', position: 'ED', rating: 88, image: '../Imagenes/Jugadores/Saka.png' },
    { id: 41, name: 'Foden', position: 'ED', rating: 85, image: '../Imagenes/Jugadores/Foden.png' }
];

let currentFormation = null;
let selectedPosition = null;
let assignedPlayers = {};

// FUNCIONES FORMACION

function selectFormation(formationKey) {
    currentFormation = formationKey;
    const formation = formations[formationKey];
    document.getElementById('formationSelector').style.display = 'none';
    document.getElementById('fieldView').style.display = 'block';
    document.getElementById('formationNameDisplay').textContent = formation.name;
    renderPositions(formation);
}

function renderPositions(formation) {
    const container = document.getElementById('positionsContainer');
    if (!container) return;    
    container.innerHTML = '';   
    formation.positions.forEach(pos => {
        const positionDiv = document.createElement('div');
        positionDiv.className = 'position';
        positionDiv.style.left = pos.x + '%';
        positionDiv.style.top = pos.y + '%';
        positionDiv.dataset.positionId = pos.id;
        positionDiv.dataset.positionName = pos.name;
        positionDiv.dataset.positionType = pos.type;
        positionDiv.onclick = () => openPlayerSelector(pos);
        if (assignedPlayers[pos.id]) {
            const player = assignedPlayers[pos.id];
            positionDiv.classList.add('__occupied');
            positionDiv.innerHTML = `
            <img src="${player.image}" class="player__card-field">
            `;
        } else {
            positionDiv.innerHTML = '<span class="pos-label">' + pos.name + '</span>';
        }
        container.appendChild(positionDiv);
    });
}

// FUNCIONES DE SELECCIÓN

function openPlayerSelector(position) {
    selectedPosition = position;
    const panel = document.getElementById('playerSelectorPanel');
    const playerList = document.getElementById('playerList');
    
    if (!panel || !playerList) return;
    panel.style.display = 'block';
    const positionFilter = position.type;
    const filteredPlayers = availablePlayers.filter(p => 
        p.position === positionFilter || 
        getSimilarPositions(positionFilter).includes(p.position)
    );
    const randomPlayers = filteredPlayers
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    playerList.innerHTML = '';
    randomPlayers.forEach(player => {
    const playerDiv = document.createElement('div');
    playerDiv.className = 'player-option card-option';

    playerDiv.innerHTML = `
        <img src="${player.image}" class="player-card-img" alt="${player.name}">
    `;

    playerDiv.onclick = () => assignPlayer(player);
    playerList.appendChild(playerDiv);
});
}

function assignPlayer(player) {
    if (!selectedPosition || !currentFormation) return;
    assignedPlayers[selectedPosition.id] = player;
    renderPositions(formations[currentFormation]);
    closePlayerPanel();
}

function removePlayer(positionId) {
    if (assignedPlayers[positionId]) {
        delete assignedPlayers[positionId];
        renderPositions(formations[currentFormation]);
    }
}

function goBackToFormations() {
    const fieldView = document.getElementById('fieldView');
    const selector = document.getElementById('formationSelector');
    
    if (fieldView) fieldView.style.display = 'none';
    if (selector) selector.style.display = 'block';
    
    currentFormation = null;
    selectedPosition = null;
}

function getSimilarPositions(position) {
    const similar = {
        'GK': ['POR'],
        'POR': ['GK'],
        'DFC': ['CB', 'LB', 'LD', 'RB', 'LI'],
        'CB': ['DFC', 'LB', 'LD', 'RB', 'LI'],
        'LB': ['LI', 'DFC', 'CB'],
        'LD': ['RB', 'DFC', 'CB'],
        'RB': ['LD', 'DFC', 'CB'],
        'LI': ['LB', 'DFC', 'CB'],
        'MCD': ['MC', 'CM', 'MCO'],
        'MC': ['CM', 'MCD', 'MCO'],
        'CM': ['MC', 'MCD', 'MCO'],
        'MCO': ['MC', 'CM', 'MCD'],
        'LM': ['MI', 'MC', 'CM'],
        'MI': ['LM', 'MC', 'CM'],
        'RM': ['MD', 'MC', 'CM'],
        'MD': ['RM', 'MC', 'CM'],
        'DEL': ['ST'],
        'ST': ['DEL'],
        'EI': ['DEL', 'LW'],
        'ED': ['DEL', 'RW'],
        'LW': ['EI', 'DEL'],
        'RW': ['ED', 'DEL']
    };
    
    return similar[position] || [];
}

// FUNCIONES DE BÚSQUEDA Y FILTRO

function searchPlayers(query) {
    if (!query || query.length < 2) return availablePlayers;
    
    const lowerQuery = query.toLowerCase();
    return availablePlayers.filter(player =>
        player.position.toLowerCase().includes(lowerQuery)
    );
}

function getPlayersByRating(minRating, maxRating) {
    return availablePlayers.filter(player =>
        player.rating >= minRating && player.rating <= maxRating
    );
}

function getPlayersByPosition(position) {
    return availablePlayers.filter(player =>
        player.position === position || 
        getSimilarPositions(position).includes(player.position)
    );
}

function sortPlayers(players, criteria = 'rating') {
    return [...players].sort((a, b) => {
        switch (criteria) {
            case 'rating':
                return b.rating - a.rating;
            case 'name':
                return a.name.localeCompare(b.name);
            case 'position':
                return a.position.localeCompare(b.position);
            default:
                return 0;
        }
    });
}

// INICIALIZACIÓN

document.addEventListener('DOMContentLoaded', function() {
    console.log('FutDraft');
    const searchInput = document.getElementById('playerSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const results = searchPlayers(e.target.value);
            console.log('Búsqueda:', results.length, 'jugadores encontrados');
        });
    }
});
window.FutDraft = {
    selectFormation,
    assignPlayer,
    removePlayer,
    searchPlayers,
    getPlayersByPosition,
    sortPlayers
};