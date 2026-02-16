const LIGUE_CONFIG = {
    'La Liga': {
        order: 0,
        display: 'La Liga',
        aliases: ['LL']
    },
    'Serie A': {
        order: 1,
        display: 'Serie A',
        aliases: ['SA']
    },
    'Premier League': {
        order: 2,
        display: 'Premier League',
        aliases: ['PL']
    },
    'Bundesliga': {
        order: 3,
        display: 'Bundesliga',
        aliases: ['BL']
    },
    'Ligue 1': {
        order: 4,
        display: 'Ligue 1',
        aliases: ['L1']
    }
};


function renderSortedTeams(container, teams) {
    if (!container || !Array.isArray(teams)) return;
    
    const sortedTeams = teams.slice().sort((a, b) => {
        const leagueA = LIGUE_CONFIG[a.ligue]?.order ?? 999;
        const leagueB = LIGUE_CONFIG[b.ligue]?.order ?? 999;
        if (leagueA !== leagueB) return leagueA - leagueB;
        return b.titles - a.titles;
    });
    container.innerHTML = '';

    let currentLeague = '';
    sortedTeams.forEach(team => {
        if (team.ligue !== currentLeague) {
            currentLeague = team.ligue;
            const leagueHeader = document.createElement('h2');
            leagueHeader.textContent = LIGUE_CONFIG[currentLeague]?.display || currentLeague;
            container.appendChild(leagueHeader);
        }
        const teamDiv = document.createElement('div');
        teamDiv.className = 'team';
        teamDiv.textContent = `${team.name} - Títulos: ${team.titles}`;
        container.appendChild(teamDiv);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('equiposContainer');
    renderSortedTeams(container, availableTeams);
});