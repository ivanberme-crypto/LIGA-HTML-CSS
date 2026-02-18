const POSITION_CONFIG = {
    GK: {
        order: 0,
        display: 'Porteros',
        aliases: ['POR']
    },
    CB: {
        order: 1,
        display: 'Defensas Centrales',
        aliases: ['DFC']
    },
    LB: {
        order: 2,
        display: 'Laterales Izquierdos',
        aliases: ['LI']
    },
    RB: {
        order: 3,
        display: 'Laterales Derechos',
        aliases: ['LD']
    },
    LM: {
        order: 4,
        display: 'Medios Izquierdos',
        aliases: ['MI']
    },  
    CM: {
        order: 5,
        display: 'Centrocampistas',
        aliases: ['MC', 'MCD', 'MCO']
    },
    RM: {
        order: 6,
        display: 'Medios Derechos',
        aliases: ['MD']
    },
    LW: {
        order: 7,
        display: 'Extremos Izquierdos',
        aliases: ['EI']
    },
    RW: {
        order: 8,
        display: 'Extremos Derechos',
        aliases: ['ED']
    },
    ST: {
        order: 9,
        display: 'Delanteros',
        aliases: ['DEL', 'ST']
    }
};

function getPositionType(playerPosition) {
    for (const [type, config] of Object.entries(POSITION_CONFIG)) {
        if (config.aliases.includes(playerPosition)) {
            return type;
        }
    }
    return 'ST';
}

function getPositionDisplayName(type) {
    return POSITION_CONFIG[type]?.display || type;
}


function sortCardsByPositionAndRating(players) {
    if (!Array.isArray(players)) return [];

    return [...players].sort((a, b) => {
        const typeA = getPositionType(a.position);
        const typeB = getPositionType(b.position);

        const orderA = POSITION_CONFIG[typeA]?.order ?? 99;
        const orderB = POSITION_CONFIG[typeB]?.order ?? 99;

        if (orderA !== orderB) {
            return orderA - orderB;
        }

        return b.rating - a.rating;
    });
}


function renderSortedCards(container, players) {
    if (!container || !Array.isArray(players)) return;

    const sortedPlayers = sortCardsByPositionAndRating(players);

    const groups = sortedPlayers.reduce((acc, player) => {
        const type = getPositionType(player.position);

        if (!acc[type]) acc[type] = [];
        acc[type].push(player);

        return acc;
    }, {});

    container.innerHTML = '';

    Object.entries(POSITION_CONFIG)
        .sort((a, b) => a[1].order - b[1].order)
        .forEach(([type, config]) => {

            if (!groups[type]) return;

            const groupDiv = document.createElement('div');
            groupDiv.className = 'fd__jugadores__group';

            groupDiv.innerHTML = `
                <div class="fd__jugadores__group-header">
                    <h3 class="fd__jugadores__group-title">${config.display}</h3>
                    <span class="fd__jugadores__group-count">${groups[type].length}</span>
                </div>
                <div class="fd__jugadores__grid">
                    ${groups[type].map((player, index)=> `
                        <div class="fd__card">
                            <div class="fd__card__image-container">
                                <img src="${player.image}" alt="" class="fd__card__image">
                                ${index === 0 ? '<span class="fd__card__badge">★ TOP</span>' : ''}
                            </div>
                            <div class="fd__card__info">
                                <h4 class="fd__card__name">${player.name}</h4>
                                <div class="fd__card__details">
                                    <span class="fd__card__position">${player.position}</span>
                                    <span class="fd__card__rating fd__card__rating--${getRatingClass(player.rating)}">
                                        ${player.rating}
                                    </span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;

            container.appendChild(groupDiv);
        });
}

function getRatingClass(rating) {
    if (rating >= 95) return 'diamond';
    if (rating >= 92) return 'platinum';
    if (rating >= 90) return 'gold';
    if (rating >= 85) return 'silver';
    if (rating >= 80) return 'bronze';
    return 'iron';
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('jugadoresContainer');
    renderSortedCards(container, availablePlayers);
});