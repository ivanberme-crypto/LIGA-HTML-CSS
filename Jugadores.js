//FORMACIONES

const formations = {
    '4-3-3': {
        name: '4-3-3',
        positions: [
            { id: 'GK', name: 'POR', x: 50, y: 92, type: 'GK' },
            { id: 'LB', name: 'LI', x: 12, y: 75, type: 'LB' },
            { id: 'CB1', name: 'DFC', x: 35, y: 78, type: 'CB' },
            { id: 'CB2', name: 'DFC', x: 65, y: 78, type: 'CB' },
            { id: 'RB', name: 'LD', x: 88, y: 75, type: 'RB' },
            { id: 'CM1', name: 'MCD', x: 35, y: 55, type: 'CM' },
            { id: 'CM2', name: 'MC', x: 50, y: 50, type: 'CM' },
            { id: 'CM3', name: 'MCD', x: 65, y: 55, type: 'CM' },
            { id: 'LW', name: 'EI', x: 18, y: 28, type: 'LW' },
            { id: 'ST', name: 'DEL', x: 50, y: 18, type: 'ST' },
            { id: 'RW', name: 'ED', x: 82, y: 28, type: 'RW' }
        ]
    },
    '4-4-2': {
        name: '4-4-2',
        positions: [
            { id: 'GK', name: 'POR', x: 50, y: 92, type: 'GK' },
            { id: 'LB', name: 'LI', x: 12, y: 75, type: 'LB' },
            { id: 'CB1', name: 'DFC', x: 35, y: 78, type: 'CB' },
            { id: 'CB2', name: 'DFC', x: 65, y: 78, type: 'CB' },
            { id: 'RB', name: 'LD', x: 88, y: 75, type: 'RB' },
            { id: 'LM', name: 'MI', x: 15, y: 50, type: 'LM' },
            { id: 'CM1', name: 'MC', x: 38, y: 55, type: 'CM' },
            { id: 'CM2', name: 'MC', x: 62, y: 55, type: 'CM' },
            { id: 'RM', name: 'MD', x: 85, y: 50, type: 'RM' },
            { id: 'ST1', name: 'DEL', x: 38, y: 30, type: 'ST' },
            { id: 'ST2', name: 'DEL', x: 62, y: 30, type: 'ST' }
        ]
    },
    '5-3-2': {
        name: '5-3-2',
        positions: [
            { id: 'GK', name: 'POR', x: 50, y: 92, type: 'GK' },
            { id: 'LB', name: 'LI', x: 8, y: 72, type: 'LB' },
            { id: 'CB1', name: 'DFC', x: 28, y: 76, type: 'CB' },
            { id: 'CB2', name: 'DFC', x: 50, y: 78, type: 'CB' },
            { id: 'CB3', name: 'DFC', x: 72, y: 76, type: 'CB' },
            { id: 'RB', name: 'LD', x: 92, y: 72, type: 'RB' },
            { id: 'CM1', name: 'MCD', x: 32, y: 52, type: 'CM' },
            { id: 'CM2', name: 'MCO', x: 50, y: 42, type: 'CM' },
            { id: 'CM3', name: 'MCD', x: 68, y: 52, type: 'CM' },
            { id: 'ST1', name: 'DEL', x: 38, y: 22, type: 'ST' },
            { id: 'ST2', name: 'DEL', x: 62, y: 22, type: 'ST' }
        ]
    },
    '5-4-1': {
        name: '5-4-1',
        positions: [
            { id: 'GK', name: 'POR', x: 50, y: 92, type: 'GK' },
            { id: 'LB', name: 'LI', x: 8, y: 72, type: 'LB' },
            { id: 'CB1', name: 'DFC', x: 28, y: 76, type: 'CB' },
            { id: 'CB2', name: 'DFC', x: 50, y: 78, type: 'CB' },
            { id: 'CB3', name: 'DFC', x: 72, y: 76, type: 'CB' },
            { id: 'RB', name: 'LD', x: 92, y: 72, type: 'RB' },
            { id: 'LM', name: 'MI', x: 15, y: 48, type: 'LM' },
            { id: 'CM1', name: 'MC', x: 38, y: 46, type: 'CM' },
            { id: 'CM2', name: 'MC', x: 62, y: 46, type: 'CM' },
            { id: 'RM', name: 'MD', x: 85, y: 48, type: 'RM' },
            { id: 'ST', name: 'DEL', x: 50, y: 18, type: 'ST' }
        ]
    }
};

// JUGADORES

const availablePlayers = [
    // Porteros
    { id: 1, name: 'Courtois', position: 'POR', rating: 91, image: 'Imagenes/Jugadores/courtois.png' },
    { id: 2, name: 'Ter Stegen', position: 'POR', rating: 89, image: 'Imagenes/Jugadores/ter Stegen.png' },
    { id: 3, name: 'Alisson', position: 'POR', rating: 89, image: 'Imagenes/Jugadores/Alisson.png' },
    { id: 4, name: 'Ederson', position: 'POR', rating: 87, image: 'Imagenes/Jugadores/Ederson.png' },
    { id: 5, name: 'Donnarumma', position: 'POR', rating: 89, image: 'Imagenes/Jugadores/Donnarumma.png' },
    
    // Defensas
    { id: 6, name: 'Van Dijk', position: 'DFC', rating: 90, image: 'Imagenes/Jugadores/van Dijk.png' },
    { id: 7, name: 'Ruben Dias', position: 'DFC', rating: 86, image: 'Imagenes/Jugadores/Ruben Dias.png' },
    { id: 8, name: 'Rudiger', position: 'DFC', rating: 86, image: 'Imagenes/Jugadores/Rudiger.png' },
    { id: 9, name: 'Stones', position: 'DFC', rating: 82, image: 'Imagenes/Jugadores/Stones.png' },
    { id: 10, name: 'Dani Carvajal', position: 'LD', rating: 89, image: 'Imagenes/Jugadores/Carvajal.png' },
    { id: 11, name: 'Walker', position: 'LD', rating: 89, image: 'Imagenes/Jugadores/Walker.png' },
    { id: 12, name: 'Theo Hernandez', position: 'LI', rating: 84, image: 'Imagenes/Jugadores/Hernandez.png' },
    { id: 13, name: 'Davies', position: 'LI', rating: 84, image: 'Imagenes/Jugadores/Davies.png' },
    { id: 14, name: 'Saliba', position: 'DFC', rating: 90, image: 'Imagenes/Jugadores/Saliba.png' },
    { id: 15, name: 'Gvardiol', position: 'DFC', rating: 84, image: 'Imagenes/Jugadores/Gvardiol.png' },
    
    // Centrocampistas
    { id: 16, name: 'Rodri', position: 'MCD', rating: 91, image: 'Imagenes/Jugadores/Rodri.png' },
    { id: 17, name: 'De Bruyne', position: 'MCO', rating: 89, image: 'Imagenes/Jugadores/De Bruyne.png' },
    { id: 18, name: 'Bellingham', position: 'MCO', rating: 92, image: 'Imagenes/Jugadores/Bellingham.png' },
    { id: 19, name: 'Modric', position: 'MC', rating: 83, image: 'Imagenes/Jugadores/Modric.png' },
    { id: 20, name: 'Kroos', position: 'MC', rating: 90, image: 'Imagenes/Jugadores/Kroos.png' },
    { id: 21, name: 'Valverde', position: 'MC', rating: 89, image: 'Imagenes/Jugadores/Valverde.png' },
    { id: 22, name: 'Pedri', position: 'MC', rating: 95, image: 'Imagenes/Jugadores/Pedri.png' },
    { id: 23, name: 'Gavi', position: 'MC', rating: 83, image: 'Imagenes/Jugadores/Gavi.png' },
    { id: 24, name: 'Fernandes', position: 'MCO', rating: 87, image: 'Imagenes/Jugadores/Bruno Fernandes.png' },
    { id: 25, name: 'Rice', position: 'MCD', rating: 94, image: 'Imagenes/Jugadores/Rice.png' },
    { id: 35, name: 'Musiala', position: 'MCO', rating: 88, image: 'Imagenes/Jugadores/Musiala.png' },
    
    // Delanteros
    { id: 26, name: 'Haaland', position: 'DEL', rating: 90, image: 'Imagenes/Jugadores/Haaland.png' },
    { id: 27, name: 'Mbappé', position: 'DEL', rating: 96, image: 'Imagenes/Jugadores/Mbappe.png' },
    { id: 28, name: 'Vinicius Jr', position: 'EI', rating: 89, image: 'Imagenes/Jugadores/Vini Jr..png' },
    { id: 29, name: 'Salah', position: 'ED', rating: 91, image: 'Imagenes/Jugadores/Salah.png' },
    { id: 30, name: 'Lewandowski', position: 'DEL', rating: 88, image: 'Imagenes/Jugadores/Lewandowski.png' },
    { id: 31, name: 'Kane', position: 'DEL', rating: 89, image: 'Imagenes/Jugadores/Kane.png' },
    { id: 32, name: 'Saka', position: 'ED', rating: 88, image: 'Imagenes/Jugadores/Saka.png' },
    { id: 33, name: 'Raphinha', position: 'EI', rating: 95, image: 'Imagenes/Jugadores/Raphinha.png' },
    { id: 34, name: 'Foden', position: 'EI', rating: 85, image: 'Imagenes/Jugadores/Foden.png' }
];

// ESTADO DE LA APLICACIÓN

let currentFormation = null;
let selectedPosition = null;
let assignedPlayers = {};

// FUNCIONES DE FORMACIÓN

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

// FUNCIONES DE SELECCIÓN DE JUGADORES

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

function closePlayerPanel() {
    const panel = document.getElementById('playerSelectorPanel');
    if (panel) {
        panel.style.display = 'none';
    }
    selectedPosition = null;
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
        'DFC': ['CB', 'LB', 'LD', 'RB', 'LI'],
        'CB': ['DFC', 'LB', 'LD', 'RB', 'LI'],
        'LB': ['LD', 'DFC', 'CB'],
        'LD': ['LB', 'DFC', 'CB'],
        'RB': ['LI', 'DFC', 'CB'],
        'LI': ['RB', 'DFC', 'CB'],
        'MCD': ['MC', 'CM', 'MCO'],
        'MC': ['CM', 'MCD', 'MCO'],
        'CM': ['MC', 'MCD', 'MCO'],
        'MCO': ['MC', 'CM', 'DEL'],
        'LM': ['MI', 'MC', 'CM'],
        'MI': ['LM', 'MC', 'CM'],
        'RM': ['MD', 'MC', 'CM'],
        'MD': ['RM', 'MC', 'CM'],
        'DEL': ['ST', 'MCO'],
        'ST': ['DEL', 'MCO'],
        'EI': ['ED', 'DEL', 'LW'],
        'ED': ['EI', 'DEL', 'RW'],
        'LW': ['EI', 'DEL', 'ED'],
        'RW': ['ED', 'DEL', 'EI'],
        'POR': ['GK']
    };
    
    return similar[position] || [];
}

// FUNCIONES DE BÚSQUEDA Y FILTRO

function searchPlayers(query) {
    if (!query || query.length < 2) return availablePlayers;
    
    const lowerQuery = query.toLowerCase();
    return availablePlayers.filter(player =>
        player.name.toLowerCase().includes(lowerQuery) ||
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
    console.log('FutDraft 2026 - Sistema de Formaciones cargado');
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
