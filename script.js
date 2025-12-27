// Liste complète des pays et de leurs capitales reconnus par l'ONU (environ 195 entrées)
const allCountriesAndCapitals = [
    { country: "Afghanistan", capital: "Kaboul", englishNames: ["Kabul"] },
    { country: "Afrique du Sud", capital: "Pretoria", englishNames: ["Pretoria", "Cape Town", "Bloemfontein"] },
    { country: "Albanie", capital: "Tirana", englishNames: ["Tirana"] },
    { country: "Algérie", capital: "Alger", englishNames: ["Algiers"] },
    { country: "Allemagne", capital: "Berlin", englishNames: ["Berlin"] },
    { country: "Andorre", capital: "Andorre-la-Vieille", englishNames: ["Andorra la Vella"] },
    { country: "Angola", capital: "Luanda", englishNames: ["Luanda"] },
    { country: "Antigua-et-Barbuda", capital: "Saint John's", englishNames: ["Saint Johns", "Saint John's"] },
    { country: "Arabie saoudite", capital: "Riyad", englishNames: ["Riyadh"] },
    { country: "Argentine", capital: "Buenos Aires", englishNames: ["Buenos Aires"] },
    { country: "Arménie", capital: "Erevan", englishNames: ["Yerevan"] },
    { country: "Australie", capital: "Canberra", englishNames: ["Canberra"] },
    { country: "Autriche", capital: "Vienne", englishNames: ["Vienna"] },
    { country: "Azerbaïdjan", capital: "Bakou", englishNames: ["Baku"] },
    { country: "Bahamas", capital: "Nassau", englishNames: ["Nassau"] },
    { country: "Bahreïn", capital: "Manama", englishNames: ["Manama"] },
    { country: "Bangladesh", capital: "Dacca", englishNames: ["Dhaka"] },
    { country: "Barbade", capital: "Bridgetown", englishNames: ["Bridgetown"] },
    { country: "Belgique", capital: "Bruxelles", englishNames: ["Brussels"] },
    { country: "Belize", capital: "Belmopan", englishNames: ["Belmopan"] },
    { country: "Bénin", capital: "Porto-Novo", englishNames: ["Porto-Novo"] },
    { country: "Bhoutan", capital: "Thimphou", englishNames: ["Thimphu"] },
    { country: "Biélorussie", capital: "Minsk", englishNames: ["Minsk"] },
    { country: "Birmanie", capital: "Naypyidaw", englishNames: ["Naypyidaw"] },
    { country: "Bolivie", capital: "Sucre", englishNames: ["Sucre"] },
    { country: "Bosnie-Herzégovine", capital: "Sarajevo", englishNames: ["Sarajevo"] },
    { country: "Botswana", capital: "Gaborone", englishNames: ["Gaborone"] },
    { country: "Brésil", capital: "Brasília", englishNames: ["Brasilia"] },
    { country: "Brunei", capital: "Bandar Seri Begawan", englishNames: ["Bandar Seri Begawan"] },
    { country: "Bulgarie", capital: "Sofia", englishNames: ["Sofia"] },
    { country: "Burkina Faso", capital: "Ouagadougou", englishNames: ["Ouagadougou"] },
    { country: "Burundi", capital: "Gitega", englishNames: ["Gitega"] },
    { country: "Cambodge", capital: "Phnom Penh", englishNames: ["Phnom Penh"] },
    { country: "Cameroun", capital: "Yaoundé", englishNames: ["Yaounde"] },
    { country: "Canada", capital: "Ottawa", englishNames: ["Ottawa"] },
    { country: "Cap-Vert", capital: "Praia", englishNames: ["Praia"] },
    { country: "Chili", capital: "Santiago", englishNames: ["Santiago"] },
    { country: "Chine", capital: "Pékin", englishNames: ["Beijing"] },
    { country: "Chypre", capital: "Nicosie", englishNames: ["Nicosia"] },
    { country: "Colombie", capital: "Bogota", englishNames: ["Bogota"] },
    { country: "Comores", capital: "Moroni", englishNames: ["Moroni"] },
    { country: "Congo", capital: "Brazzaville", englishNames: ["Brazzaville"] },
    { country: "République démocratique du Congo", capital: "Kinshasa", englishNames: ["Kinshasa"] },
    { country: "Corée du Nord", capital: "Pyongyang", englishNames: ["Pyongyang"] },
    { country: "Corée du Sud", capital: "Séoul", englishNames: ["Seoul"] },
    { country: "Costa Rica", capital: "San José", englishNames: ["San Jose"] },
    { country: "Côte d'Ivoire", capital: "Yamoussoukro", englishNames: ["Yamoussoukro"] },
    { country: "Croatie", capital: "Zagreb", englishNames: ["Zagreb"] },
    { country: "Cuba", capital: "La Havane", englishNames: ["Havana"] },
    { country: "Danemark", capital: "Copenhague", englishNames: ["Copenhagen"] },
    { country: "Djibouti", capital: "Djibouti", englishNames: ["Djibouti"] },
    { country: "Dominique", capital: "Roseau", englishNames: ["Roseau"] },
    { country: "Égypte", capital: "Le Caire", englishNames: ["Cairo"] },
    { country: "Émirats arabes unis", capital: "Abou Dabi", englishNames: ["Abu Dhabi"] },
    { country: "Équateur", capital: "Quito", englishNames: ["Quito"] },
    { country: "Érythrée", capital: "Asmara", englishNames: ["Asmara"] },
    { country: "Espagne", capital: "Madrid", englishNames: ["Madrid"] },
    { country: "Eswatini", capital: "Mbabane", englishNames: ["Mbabane"] },
    { country: "États-Unis", capital: "Washington", englishNames: ["Washington"] },
    { country: "Éthiopie", capital: "Addis-Abeba", englishNames: ["Addis Ababa"] },
    { country: "Fidji", capital: "Suva", englishNames: ["Suva"] },
    { country: "Finlande", capital: "Helsinki", englishNames: ["Helsinki"] },
    { country: "France", capital: "Paris", englishNames: ["Paris"] },
    { country: "Gabon", capital: "Libreville", englishNames: ["Libreville"] },
    { country: "Gambie", capital: "Banjul", englishNames: ["Banjul"] },
    { country: "Géorgie", capital: "Tbilissi", englishNames: ["Tbilisi"] },
    { country: "Ghana", capital: "Accra", englishNames: ["Accra"] },
    { country: "Grèce", capital: "Athènes", englishNames: ["Athens"] },
    { country: "Grenade", capital: "Saint-Georges", englishNames: ["Saint Georges"] },
    { country: "Guatemala", capital: "Guatemala", englishNames: ["Guatemala City"] },
    { country: "Guinée", capital: "Conakry", englishNames: ["Conakry"] },
    { country: "Guinée-Bissau", capital: "Bissau", englishNames: ["Bissau"] },
    { country: "Guinée équatoriale", capital: "Malabo", englishNames: ["Malabo"] },
    { country: "Guyana", capital: "Georgetown", englishNames: ["Georgetown"] },
    { country: "Haïti", capital: "Port-au-Prince", englishNames: ["Port-au-Prince"] },
    { country: "Honduras", capital: "Tegucigalpa", englishNames: ["Tegucigalpa"] },
    { country: "Hongrie", capital: "Budapest", englishNames: ["Budapest"] },
    { country: "Îles Marshall", capital: "Majuro", englishNames: ["Majuro"] },
    { country: "Îles Salomon", capital: "Honiara", englishNames: ["Honiara"] },
    { country: "Inde", capital: "New Delhi", englishNames: ["New Delhi"] },
    { country: "Indonésie", capital: "Jakarta", englishNames: ["Jakarta"] },
    { country: "Irak", capital: "Bagdad", englishNames: ["Baghdad"] },
    { country: "Iran", capital: "Téhéran", englishNames: ["Tehran"] },
    { country: "Irlande", capital: "Dublin", englishNames: ["Dublin"] },
    { country: "Islande", capital: "Reykjavik", englishNames: ["Reykjavik"] },
    { country: "Israël", capital: "Jérusalem", englishNames: ["Jerusalem"] },
    { country: "Italie", capital: "Rome", englishNames: ["Rome"] },
    { country: "Jamaïque", capital: "Kingston", englishNames: ["Kingston"] },
    { country: "Japon", capital: "Tokyo", englishNames: ["Tokyo"] },
    { country: "Jordanie", capital: "Amman", englishNames: ["Amman"] },
    { country: "Kazakhstan", capital: "Noursoultan", englishNames: ["Nur-Sultan"] },
    { country: "Kenya", capital: "Nairobi", englishNames: ["Nairobi"] },
    { country: "Kirghizistan", capital: "Bichkek", englishNames: ["Bishkek"] },
    { country: "Kiribati", capital: "Tarawa-Sud", englishNames: ["South Tarawa"] },
    { country: "Koweït", capital: "Koweït", englishNames: ["Kuwait City"] },
    { country: "Laos", capital: "Vientiane", englishNames: ["Vientiane"] },
    { country: "Lesotho", capital: "Maseru", englishNames: ["Maseru"] },
    { country: "Lettonie", capital: "Riga", englishNames: ["Riga"] },
    { country: "Liban", capital: "Beyrouth", englishNames: ["Beirut"] },
    { country: "Liberia", capital: "Monrovia", englishNames: ["Monrovia"] },
    { country: "Libye", capital: "Tripoli", englishNames: ["Tripoli"] },
    { country: "Liechtenstein", capital: "Vaduz", englishNames: ["Vaduz"] },
    { country: "Lituanie", capital: "Vilnius", englishNames: ["Vilnius"] },
    { country: "Luxembourg", capital: "Luxembourg", englishNames: ["Luxembourg City"] },
    { country: "Macédoine du Nord", capital: "Skopje", englishNames: ["Skopje"] },
    { country: "Madagascar", capital: "Antananarivo", englishNames: ["Antananarivo"] },
    { country: "Malaisie", capital: "Kuala Lumpur", englishNames: ["Kuala Lumpur"] },
    { country: "Malawi", capital: "Lilongwe", englishNames: ["Lilongwe"] },
    { country: "Maldives", capital: "Malé", englishNames: ["Male"] },
    { country: "Mali", capital: "Bamako", englishNames: ["Bamako"] },
    { country: "Malte", capital: "La Valette", englishNames: ["Valletta"] },
    { country: "Maroc", capital: "Rabat", englishNames: ["Rabat"] },
    { country: "Maurice", capital: "Port-Louis", englishNames: ["Port Louis"] },
    { country: "Mauritanie", capital: "Nouakchott", englishNames: ["Nouakchott"] },
    { country: "Mexique", capital: "Mexico", englishNames: ["Mexico City"] },
    { country: "Micronésie", capital: "Palikir", englishNames: ["Palikir"] },
    { country: "Moldavie", capital: "Chisinau", englishNames: ["Chisinau"] },
    { country: "Monaco", capital: "Monaco", englishNames: ["Monaco"] },
    { country: "Mongolie", capital: "Oulan-Bator", englishNames: ["Ulaanbaatar"] },
    { country: "Monténégro", capital: "Podgorica", englishNames: ["Podgorica"] },
    { country: "Mozambique", capital: "Maputo", englishNames: ["Maputo"] },
    { country: "Namibie", capital: "Windhoek", englishNames: ["Windhoek"] },
    { country: "Nauru", capital: "Yaren", englishNames: ["Yaren"] },
    { country: "Népal", capital: "Katmandou", englishNames: ["Kathmandu"] },
    { country: "Nicaragua", capital: "Managua", englishNames: ["Managua"] },
    { country: "Niger", capital: "Niamey", englishNames: ["Niamey"] },
    { country: "Nigéria", capital: "Abuja", englishNames: ["Abuja"] },
    { country: "Norvège", capital: "Oslo", englishNames: ["Oslo"] },
    { country: "Nouvelle-Zélande", capital: "Wellington", englishNames: ["Wellington"] },
    { country: "Oman", capital: "Mascate", englishNames: ["Muscat"] },
    { country: "Ouganda", capital: "Kampala", englishNames: ["Kampala"] },
    { country: "Ouzbékistan", capital: "Tachkent", englishNames: ["Tashkent"] },
    { country: "Pakistan", capital: "Islamabad", englishNames: ["Islamabad"] },
    { country: "Palaos", capital: "Ngerulmud", englishNames: ["Ngerulmud"] },
    { country: "Palestine", capital: "Ramallah", englishNames: ["Ramallah"] },
    { country: "Panama", capital: "Panama", englishNames: ["Panama City"] },
    { country: "Papouasie-Nouvelle-Guinée", capital: "Port Moresby", englishNames: ["Port Moresby"] },
    { country: "Paraguay", capital: "Asuncion", englishNames: ["Asuncion"] },
    { country: "Pays-Bas", capital: "Amsterdam", englishNames: ["Amsterdam"] },
    { country: "Pérou", capital: "Lima", englishNames: ["Lima"] },
    { country: "Philippines", capital: "Manille", englishNames: ["Manila"] },
    { country: "Pologne", capital: "Varsovie", englishNames: ["Warsaw"] },
    { country: "Portugal", capital: "Lisbonne", englishNames: ["Lisbon"] },
    { country: "Qatar", capital: "Doha", englishNames: ["Doha"] },
    { country: "République centrafricaine", capital: "Bangui", englishNames: ["Bangui"] },
    { country: "République dominicaine", capital: "Saint-Domingue", englishNames: ["Santo Domingo"] },
    { country: "République tchèque", capital: "Prague", englishNames: ["Prague"] },
    { country: "Roumanie", capital: "Bucarest", englishNames: ["Bucharest"] },
    { country: "Royaume-Uni", capital: "Londres", englishNames: ["London"] },
    { country: "Russie", capital: "Moscou", englishNames: ["Moscow"] },
    { country: "Rwanda", capital: "Kigali", englishNames: ["Kigali"] },
    { country: "Saint-Christophe-et-Niévès", capital: "Basseterre", englishNames: ["Basseterre"] },
    { country: "Saint-Marin", capital: "Saint-Marin", englishNames: ["San Marino"] },
    { country: "Saint-Vincent-et-les-Grenadines", capital: "Kingstown", englishNames: ["Kingstown"] },
    { country: "Sainte-Lucie", capital: "Castries", englishNames: ["Castries"] },
    { country: "Salvador", capital: "San Salvador", englishNames: ["San Salvador"] },
    { country: "Samoa", capital: "Apia", englishNames: ["Apia"] },
    { country: "Sao Tomé-et-Principe", capital: "Sao Tomé", englishNames: ["Sao Tome"] },
    { country: "Sénégal", capital: "Dakar", englishNames: ["Dakar"] },
    { country: "Serbie", capital: "Belgrade", englishNames: ["Belgrade"] },
    { country: "Seychelles", capital: "Victoria", englishNames: ["Victoria"] },
    { country: "Sierra Leone", capital: "Freetown", englishNames: ["Freetown"] },
    { country: "Singapour", capital: "Singapour", englishNames: ["Singapore"] },
    { country: "Slovaquie", capital: "Bratislava", englishNames: ["Bratislava"] },
    { country: "Slovénie", capital: "Ljubljana", englishNames: ["Ljubljana"] },
    { country: "Somalie", capital: "Mogadiscio", englishNames: ["Mogadishu"] },
    { country: "Soudan", capital: "Khartoum", englishNames: ["Khartoum"] },
    { country: "Soudan du Sud", capital: "Juba", englishNames: ["Juba"] },
    { country: "Sri Lanka", capital: "Sri Jayawardenapura Kotte", englishNames: ["Sri Jayawardenepura Kotte"] },
    { country: "Suède", capital: "Stockholm", englishNames: ["Stockholm"] },
    { country: "Suisse", capital: "Berne", englishNames: ["Bern"] },
    { country: "Suriname", capital: "Paramaribo", englishNames: ["Paramaribo"] },
    { country: "Syrie", capital: "Damas", englishNames: ["Damascus"] },
    { country: "Tadjikistan", capital: "Douchanbé", englishNames: ["Dushanbe"] },
    { country: "Tanzanie", capital: "Dodoma", englishNames: ["Dodoma"] },
    { country: "Tchad", capital: "N'Djaména", englishNames: ["NDjamena"] },
    { country: "Thaïlande", capital: "Bangkok", englishNames: ["Bangkok"] },
    { country: "Timor oriental", capital: "Dili", englishNames: ["Dili"] },
    { country: "Togo", capital: "Lomé", englishNames: ["Lome"] },
    { country: "Tonga", capital: "Nuku'alofa", englishNames: ["Nukualofa"] },
    { country: "Trinité-et-Tobago", capital: "Port d'Espagne", englishNames: ["Port of Spain", "Port d'Espagne"] },
    { country: "Tunisie", capital: "Tunis", englishNames: ["Tunis"] },
    { country: "Turkménistan", capital: "Achgabat", englishNames: ["Ashgabat"] },
    { country: "Turquie", capital: "Ankara", englishNames: ["Ankara"] },
    { country: "Tuvalu", capital: "Funafuti", englishNames: ["Funafuti"] },
    { country: "Ukraine", capital: "Kiev", englishNames: ["Kyiv"] },
    { country: "Uruguay", capital: "Montevideo", englishNames: ["Montevideo"] },
    { country: "Vanuatu", capital: "Port-Vila", englishNames: ["Port Vila"] },
    { country: "Vatican", capital: "Vatican", englishNames: ["Vatican"] },
    { country: "Venezuela", capital: "Caracas", englishNames: ["Caracas"] },
    { country: "Vietnam", capital: "Hanoï", englishNames: ["Hanoi"] },
    { country: "Yémen", capital: "Sanaa", englishNames: ["Sana'a"] },
    { country: "Zambie", capital: "Lusaka", englishNames: ["Lusaka"] },
    { country: "Zimbabwe", capital: "Harare", englishNames: ["Harare"] },
];

let score = 0;
let shuffledCountries = [];
let currentCountryIndex = 0;
let passedCountries = []; // { country: string, capital: string, status: 'correct' | 'incorrect' }
let timerInterval;
let timeElapsed = 0;
let gameState = 'waiting';

// Éléments du DOM
const timerDisplay = document.getElementById('timerDisplay');
const questionText = document.getElementById('questionText');
const capitalInput = document.getElementById('capitalInput');
const submitButton = document.getElementById('submitButton');
const passButton = document.getElementById('passButton');
const feedback = document.getElementById('feedback');
const passedCountriesTableBody = document.getElementById('passedCountriesTableBody');
const quizContent = document.getElementById('quizContent');
const gameOverScreen = document.getElementById('gameOverScreen');
const restartButton = document.getElementById('restartButton');
const emptyRow = document.getElementById('emptyRow');
// Nouveaux éléments pour l'affichage de la progression
const progressDisplay = document.getElementById('progressDisplay');
const remainingDisplay = document.getElementById('remainingDisplay');

/**
 * Normalise une chaîne de caractères pour la comparaison.
 * @param {string} str
 * @returns {string} Chaîne normalisée
 */
function normalizeString(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
        .replace(/[-]/g, "") // Supprime les tirets uniquement
        .replace(/\s+/g, "") // Supprime TOUS les espaces
        .trim();
}

/**
 * Vérifie si la réponse correspond à la capitale (version française ou anglaise).
 * @param {string} guess
 * @param {object} current
 * @returns {boolean}
 */
function isCorrectAnswer(guess, current) {
    const normalizedGuess = normalizeString(guess);
    const normalizedCapital = normalizeString(current.capital);
    
    // Vérifier la réponse en français
    if (normalizedGuess === normalizedCapital) {
        return true;
    }
    
    // Vérifier les variantes anglaises
    if (current.englishNames) {
        for (let englishName of current.englishNames) {
            if (normalizedGuess === normalizeString(englishName)) {
                return true;
            }
        }
    }
    
    return false;
}

/**
 * Mélange un tableau de manière aléatoire (Algorithme de Fisher-Yates).
 * @param {Array} array
 * @returns {Array} Tableau mélangé.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Formate le temps écoulé en MM:SS.
 * @param {number} totalSeconds
 * @returns {string} Temps formaté.
 */
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * Démarre ou continue le chronomètre.
 */
function startTimer() {
    if (timerInterval) return; // Empêche de démarrer plusieurs fois
    timerInterval = setInterval(() => {
        timeElapsed++;
        timerDisplay.textContent = formatTime(timeElapsed);
    }, 1000);
}

/**
 * Arrête le chronomètre.
 */
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

/**
 * Met à jour les affichages du score (Correctes/Passées) et du nombre de pays restants.
 */
function updateDisplays() {
    const totalPassed = currentCountryIndex;
    const totalRemaining = shuffledCountries.length - currentCountryIndex;

    // Affichage de la progression : Bonnes réponses / Pays passés
    progressDisplay.textContent = `${score}/${totalPassed}`;

    // Affichage des pays restants
    remainingDisplay.textContent = totalRemaining.toString();

    // Couleur du compteur restant
    if (totalRemaining === 0) {
        remainingDisplay.classList.add('text-soft-green');
        remainingDisplay.classList.remove('text-yellow-400');
    } else {
        remainingDisplay.classList.remove('text-soft-green');
        remainingDisplay.classList.add('text-yellow-400');
    }
}

/**
 * Affiche le pays actuel et prépare l'entrée.
 */
function displayCurrentCountry() {
    updateDisplays(); // Met à jour les compteurs avant d'afficher la question suivante

    if (currentCountryIndex < shuffledCountries.length) {
        const country = shuffledCountries[currentCountryIndex].country;
        questionText.innerHTML = `Quelle est la capitale de <span class="text-soft-indigo font-bold">${country}</span> ?`;
        capitalInput.value = '';
        capitalInput.style.backgroundColor = ''; // Réinitialiser la couleur de fond
        capitalInput.style.borderColor = ''; // Réinitialiser la couleur de bordure
        capitalInput.disabled = false;
        submitButton.disabled = false;
        passButton.disabled = false;
        capitalInput.focus();
        feedback.textContent = '';
        gameState = 'playing';
    } else {
        endQuiz();
    }
}

/**
 * Met à jour le tableau des pays passés, trié par ordre alphabétique.
 */
function updatePassedTable() {
    // Supprimer la ligne d'information "Aucun pays passé" si elle existe
    const rowToRemove = document.getElementById('emptyRow');
    if (rowToRemove) rowToRemove.remove();

    // Tri par nom de pays
    passedCountries.sort((a, b) => a.country.localeCompare(b.country, 'fr'));

    passedCountriesTableBody.innerHTML = passedCountries.map((item, index) => {
        const isEven = index % 2 === 0;
        const rowClass = isEven ? 'table-row-even' : 'table-row-odd';
        const statusColor = item.status === 'correct' ? 'text-green-400' : 'text-red-400';
        const statusText = item.status === 'correct' ? '✓ Correcte' : '✗ Incorrecte';

        return `
            <tr class="${rowClass} text-sm">
                <td class="px-4 py-2">${item.country}</td>
                <td class="px-4 py-2">${item.capital}</td>
                <td class="px-4 py-2 font-semibold ${statusColor}">${statusText}</td>
            </tr>
        `;
    }).join('');
}

/**
 * Ajoute le pays actuel à la liste des pays passés avec son statut.
 * @param {string} status 'correct' ou 'incorrect'.
 */
function registerPassedCountry(status) {
    const current = shuffledCountries[currentCountryIndex];
    passedCountries.push({
        country: current.country,
        capital: current.capital,
        status: status
    });
    updatePassedTable();
}

/**
 * Gère la soumission de la réponse par le joueur.
 */
function handleGuess() {
    if (gameState !== 'playing') return;

    const current = shuffledCountries[currentCountryIndex];
    const guess = capitalInput.value.trim();

    if (!guess) {
        feedback.innerHTML = `<span class="text-yellow-400">Veuillez entrer une capitale.</span>`;
        return;
    }

    // Désactiver les contrôles immédiatement pour éviter les double-clics
    if (submitButton.disabled || passButton.disabled) return;
    
    capitalInput.disabled = true;
    submitButton.disabled = true;
    passButton.disabled = true;
    capitalInput.blur(); // Fermer le clavier mobile

    if (isCorrectAnswer(guess, current)) {
        // Bonne réponse
        score++;
        feedback.innerHTML = `<span class="text-green-400 font-bold text-lg">✓ Bravo ! ${current.capital} est la bonne capitale.</span>`;
        registerPassedCountry('correct');

        // Passer au pays suivant quasi immédiatement
        currentCountryIndex++;
        setTimeout(displayCurrentCountry, 100);
    } else {
        // Mauvaise réponse
        feedback.innerHTML = `<span class="text-red-400 font-bold text-lg">✗ Faux. La bonne réponse est : <span class="font-bold text-red-300">${current.capital}</span>.</span>`;
        registerPassedCountry('incorrect');

        // Passer au pays suivant après un délai plus long pour une mauvaise réponse
        currentCountryIndex++;
        setTimeout(displayCurrentCountry, 2500);
    }
}

/**
 * Gère le bouton "Passer".
 */
function handlePass() {
    if (gameState !== 'playing') return;

    // Désactiver les contrôles immédiatement pour éviter les double-clics
    if (submitButton.disabled || passButton.disabled) return;
    
    capitalInput.disabled = true;
    submitButton.disabled = true;
    passButton.disabled = true;
    capitalInput.blur(); // Fermer le clavier mobile

    const current = shuffledCountries[currentCountryIndex];
    feedback.innerHTML = `<span class="text-red-400 font-bold text-lg">✗ Passé. La bonne réponse est : <span class="font-bold text-red-300">${current.capital}</span>.</span>`;
    registerPassedCountry('incorrect'); // Compte comme une mauvaise réponse

    // Passer au pays suivant
    currentCountryIndex++;
    setTimeout(displayCurrentCountry, 2500);
}

/**
 * Termine le quiz et affiche les résultats.
 */
function endQuiz() {
    stopTimer();
    gameState = 'finished';

    // Affichage de l'écran de fin
    quizContent.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');

    // Mise à jour des résultats finaux
    document.getElementById('finalScore').textContent = `${score}/${shuffledCountries.length}`;
    document.getElementById('finalTime').textContent = formatTime(timeElapsed);
}

/**
 * Initialise et démarre le quiz.
 */
function startQuiz() {
    // Réinitialisation des variables
    score = 0;
    currentCountryIndex = 0;
    passedCountries = [];
    timeElapsed = 0;
    gameState = 'waiting';
    stopTimer();

    // Mise à jour de l'affichage initial
    timerDisplay.textContent = '00:00';
    passedCountriesTableBody.innerHTML = '<tr id="emptyRow"><td colspan="3" class="text-center py-4 text-gray-500">Aucun pays passé pour l\'instant.</td></tr>';
    feedback.textContent = '';

    // Préparation des pays
    shuffledCountries = shuffleArray([...allCountriesAndCapitals]);

    // Affichage des éléments du jeu
    gameOverScreen.classList.add('hidden');
    quizContent.classList.remove('hidden');

    // Démarrer le jeu
    updateDisplays(); // Mise à jour de la progression initiale (0/0 et Total Restant)
    displayCurrentCountry();
    startTimer();
}

// Événements
submitButton.addEventListener('click', handleGuess);
submitButton.addEventListener('touchstart', handleGuess);
passButton.addEventListener('click', handlePass);
passButton.addEventListener('touchstart', handlePass);
capitalInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleGuess();
    }
});
restartButton.addEventListener('click', startQuiz);

// Lancement du quiz au chargement de la page
window.onload = startQuiz;