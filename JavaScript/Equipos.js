const LIGUE_CONFIG = {
    'La Liga': {
        order: 0,
        display: 'La Liga',
        aliases: ['LL'],
        color: '#c41e3a'
    },
    'Serie A': {
        order: 1,
        display: 'Serie A',
        aliases: ['SA'],
        color: '#059669'
    },
    'Premier League': {
        order: 2,
        display: 'Premier League',
        aliases: ['PL'],
        color: '#6d28d9'
    },
    'Bundesliga': {
        order: 3,
        display: 'Bundesliga',
        aliases: ['BL'],
        color: '#b91c1c'
    },
    'Ligue 1': {
        order: 4,
        display: 'Ligue 1',
        aliases: ['L1'],
        color: '#1f3c88'
    }
};

function getRankStyle(rank) {
    if (rank === 1) return 'gold';
    if (rank === 2) return 'silver';
    if (rank === 3) return 'bronze';
    if (rank === 4) return 'iron';
    if (rank === 5) return 'wood';
    return 'default';
}

function getRankIcon(rank) {
    if (rank === 1) return '<img src="../Imagenes/1st.png" alt="1st">';
    if (rank === 2) return '<img src="../Imagenes/2nd.png" alt="2nd">';
    if (rank === 3) return '<img src="../Imagenes/3rd.png" alt="3rd">';
    if (rank === 4) return '<img src="../Imagenes/4th.png" alt="4th">';
    if (rank === 5) return '<img src="../Imagenes/5th.png" alt="5th">';
    return rank;
}

function filterByLeague(teams, league) {
    if (league === 'all') return teams;
    return teams.filter(t => t.ligue === league);
}

function renderLeaderboard(container, teams) {
    if (!container || !Array.isArray(teams)) return;
    
    const sortedTeams = teams.slice().sort((a, b) => b.titles - a.titles);
    
    container.innerHTML = '';
    
    const leaderboard = document.createElement('div');
    leaderboard.className = 'fd__leaderboard';
    
    const title = document.createElement('div');
    title.className = 'fd__leaderboard__header';
    title.innerHTML = `
        <span class="fd__leaderboard__pos">#</span>
        <span class="fd__leaderboard__team">Equipo</span>
        <span class="fd__leaderboard__liga">Liga</span>
        <span class="fd__leaderboard__titles">Títulos</span>
    `;
    leaderboard.appendChild(title);
    
    sortedTeams.forEach((team, index) => {
        const rank = index + 1;
        const rankStyle = getRankStyle(rank);
        const leagueConfig = LIGUE_CONFIG[team.ligue] || { display: team.ligue, color: '#888' };
        const teamImage = team.image || '../Imagenes/logo.png';
        
        const row = document.createElement('div');
        row.style.animationDelay = `${index * 0.07}s`;
        row.className = `fd__leaderboard__row fd__leaderboard__row--${rankStyle}`;
        row.innerHTML = `
            <span class="fd__leaderboard__pos fd__leaderboard__pos--${rankStyle}">${getRankIcon(rank)}</span>
            <span class="fd__leaderboard__team">
                <img src="${teamImage}" alt="${team.name}" class="fd__leaderboard__logo">
                <span class="fd__leaderboard__name">${team.name}</span>
            </span>
            <span class="fd__leaderboard__liga">
                <span class="fd__leaderboard__liga-badge" style="background: ${leagueConfig.color}">${leagueConfig.display}</span>
            </span>
            <span class="fd__leaderboard__titles">
                <span class="fd__leaderboard__trophy-count">${team.titles}</span>
            </span>
        `;
        leaderboard.appendChild(row);
    });
    
    container.appendChild(leaderboard);
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('equiposContainer');
    renderLeaderboard(container, availableTeams);
});
