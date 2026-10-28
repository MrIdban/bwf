/**
 * BioWatch India - Interactive Biodiversity Platform
 * Features:
 * 1. Live Search & Multi-Criteria Filtering
 * 2. Interactive Map with Dynamic Regional Surveillance
 * 3. Citizen Science Observation Log with LocalStorage
 * 4. Synthesized Wildlife Vocalization Audio (Web Audio API)
 * 5. Night Patrol / Dark Theme Toggle
 * 6. Dataset CSV Export
 */

// --- 1. SPECIES DATASET ---
const speciesData = [
  {
    id: "bengal-tiger",
    name: "Bengal Tiger",
    scientific: "Panthera tigris tigris",
    type: "mammal",
    status: "Endangered",
    statusClass: "danger",
    emoji: "🐅",
    imageClass: "tiger",
    habitat: "Mangroves, Terai & Deciduous Forests",
    reserves: "Corbett, Sundarbans, Bandipur, Ranthambore",
    population: "~3,167 - 3,925 (2022 Census)",
    tech: "Camera Traps, AI Stripe Recognition & eDNA",
    soundType: "tiger",
    soundLabel: "Territorial Roar & Chuff",
    description: "The apex predator of India's forests. Camera-trap arrays combined with deep-learning stripe pattern matching allow conservationists to distinguish individual tigers and monitor territorial density."
  },
  {
    id: "asian-elephant",
    name: "Asian Elephant",
    scientific: "Elephas maximus indicus",
    type: "mammal",
    status: "Endangered",
    statusClass: "danger",
    emoji: "🐘",
    imageClass: "elephant",
    habitat: "Tropical Evergreen & Deciduous Forests",
    reserves: "Rajaji, Kaziranga, Nagarhole, Nilgiris",
    population: "~27,000 - 30,000",
    tech: "Satellite GPS Collars & Rail Acoustic Alert",
    soundType: "elephant",
    soundLabel: "Low Rumble & Trumpet",
    description: "Keystone landscape architect requiring vast contiguous corridors. Satellite collars provide real-time herd telemetry to preempt human-wildlife encounters and train collisions."
  },
  {
    id: "indian-rhino",
    name: "Indian Rhinoceros",
    scientific: "Rhinoceros unicornis",
    type: "mammal",
    status: "Vulnerable",
    statusClass: "warning",
    emoji: "🦏",
    imageClass: "rhino",
    habitat: "Alluvial Riverine Grasslands & Swamps",
    reserves: "Kaziranga, Manas, Pobitora, Jaldapara",
    population: "~3,200+ in India",
    tech: "Thermal UAV Patrols & Ground Sensors",
    soundType: "rhino",
    soundLabel: "Grunt & Resonant Snort",
    description: "Remarkable conservation recovery in northeast river valleys. Thermal drone surveillance and electronic eye towers detect poaching threats along remote oxbow lake perimeters."
  },
  {
    id: "indian-peafowl",
    name: "Indian Peafowl",
    scientific: "Pavo cristatus",
    type: "bird",
    status: "Least Concern",
    statusClass: "info",
    emoji: "🦚",
    imageClass: "bird",
    habitat: "Open Scrub, Cultivated Edges & Moist Forest",
    reserves: "Keoladeo, Sariska, Gir, Devalia",
    population: "Widespread & Protected under Schedule I",
    tech: "Bioacoustic Sensor Arrays & Soundscape AI",
    soundType: "peafowl",
    soundLabel: "High-Pitched 'May-Awe' Call",
    description: "India's national bird serves as a sentinel species. Automated bioacoustic microphones capture dawn choruses to benchmark biodiversity health across rural-forest ecotones."
  },
  {
    id: "mugger-crocodile",
    name: "Mugger Crocodile",
    scientific: "Crocodylus palustris",
    type: "reptile",
    status: "Vulnerable",
    statusClass: "warning",
    emoji: "🐊",
    imageClass: "reptile",
    habitat: "Freshwater Lakes, Marshes & Slow Rivers",
    reserves: "Chambal, Gir, Kaveri River, Ranganathittu",
    population: "~3,500 - 5,000",
    tech: "eDNA Water Sampling & Drone Bathymetry",
    soundType: "crocodile",
    soundLabel: "Sub-Bass Hiss & Water Vibrate",
    description: "Freshwater reptile adapted to reservoirs and riparian channels. Environmental DNA (eDNA) sampling permits non-invasive presence detection in murky waterways."
  },
  {
    id: "forest-flora",
    name: "Native Forest Flora",
    scientific: "Shorea robusta & Tectona grandis Canopy",
    type: "plant",
    status: "Threatened",
    statusClass: "warning",
    emoji: "🌳",
    imageClass: "plant",
    habitat: "Western Ghats, Central Indian Sal Belts",
    reserves: "Silent Valley, Kanha Buffer, Agasthyamalai",
    population: "Monitored across 713,000+ sq km",
    tech: "Sentinel-2 Multispectral & LiDAR Canopy Mapping",
    soundType: "forest",
    soundLabel: "Canopy Wind & Cricket Chorus",
    description: "Ancient primary canopy systems providing habitat structure. Satellite multispectral indices (NDVI) track seasonal canopy moisture, deforestation edges, and invasive weed spreads."
  },
  {
    id: "snow-leopard",
    name: "Snow Leopard",
    scientific: "Panthera uncia",
    type: "mammal",
    status: "Vulnerable",
    statusClass: "warning",
    emoji: "🐆",
    imageClass: "leopard",
    habitat: "High Altitude Alpine Steppes (>3,000m)",
    reserves: "Hemis, Spiti Valley, Gangotri, Great Himalayan NP",
    population: "~718 (All-India SPAI 2024)",
    tech: "Sub-Zero Rugged Camera Traps & Genetic Scat",
    soundType: "leopard",
    soundLabel: "Alpine Chuff & Mountain Call",
    description: "The 'Ghost of the Mountains' navigating jagged Himalayan peaks. Cold-resistant automated cameras stationed at extreme altitudes monitor elusive high-altitude predator corridors."
  },
  {
    id: "great-indian-bustard",
    name: "Great Indian Bustard",
    scientific: "Ardeotis nigriceps",
    type: "bird",
    status: "Critically Endangered",
    statusClass: "crit-danger",
    emoji: "🦤",
    imageClass: "bustard",
    habitat: "Arid & Semi-Arid Short Grasslands",
    reserves: "Desert National Park (Jaisalmer), Kutch",
    population: "< 150 individuals remaining",
    tech: "Satellite PTT Solar Tags & Powerline Bird Diverters",
    soundType: "bustard",
    soundLabel: "Deep Resonant Infrasound Boom",
    description: "One of the heaviest flying birds on Earth, teetering on the brink of extinction. Solar satellite tags monitor low-altitude flight paths to map underground power-cable priorities."
  }
];

// --- 2. REGIONAL SURVEILLANCE STATIONS FOR MAP ---
const regionalData = {
  "Uttarakhand": {
    name: "Uttarakhand Station",
    zone: "Western Himalayan Foothills & Terai Arc",
    reserves: "Jim Corbett NP, Rajaji TR, Nandhaur Wildlife Sanctuary",
    cameraTraps: 382,
    activeCollars: 48,
    threatLevel: "High Corridor Friction",
    species: ["Bengal Tiger", "Asian Elephant", "Snow Leopard", "Himalayan Monal"],
    summary: "Continuous monitoring along the Shivalik foothills. Automated acoustic sensors and camera networks track tiger movement through critical interstate migratory corridors."
  },
  "Assam": {
    name: "Assam Station",
    zone: "Brahmaputra Floodplains & Eastern Himalayas",
    reserves: "Kaziranga NP, Manas TR, Pobitora, Orang NP",
    cameraTraps: 410,
    activeCollars: 35,
    threatLevel: "Flood Displacement & Encroachment",
    species: ["Indian Rhinoceros", "Asian Elephant", "Wild Water Buffalo", "Bengal Florican"],
    summary: "Surveillance stations monitor seasonal highland migration routes during annual monsoon floods, utilizing thermal UAVs and high-ground corridor sentinels."
  },
  "West Bengal": {
    name: "West Bengal Station",
    zone: "Ganga-Brahmaputra Delta & Dooars Foothills",
    reserves: "Sundarbans Tiger Reserve, Buxa TR, Gorumara",
    cameraTraps: 290,
    activeCollars: 22,
    threatLevel: "Mangrove Salinity & Tidal Inundation",
    species: ["Royal Bengal Tiger", "Estuarine Crocodile", "Irrawaddy Dolphin", "Fishing Cat"],
    summary: "Specialized amphibious surveillance covering tidal mudflats and mangrove estuaries. Acoustic sonar hydrophones complement camera trap grids on remote forest islands."
  },
  "Karnataka": {
    name: "Karnataka Station",
    zone: "Central Western Ghats Global Biodiversity Hotspot",
    reserves: "Nagarhole, Bandipur, BRT Tiger Reserve, Anshi-Dandeli",
    cameraTraps: 540,
    activeCollars: 76,
    threatLevel: "Highway Traffic & Plantation Borders",
    species: ["Asian Elephant", "Bengal Tiger", "Black Panther / Leopard", "Lion-tailed Macaque"],
    summary: "One of the densest populations of wild elephants and tigers in Asia. RFID vehicle trackers and thermal fences mitigate encounters across sprawling agricultural borders."
  },
  "Gujarat": {
    name: "Gujarat Station",
    zone: "Kathiawar Peninsula Dry Deciduous & Gulf of Kutch",
    reserves: "Gir National Park, Marine Sanctuary, Velavadar Blackbuck NP",
    cameraTraps: 340,
    activeCollars: 29,
    threatLevel: "Open Wells & Linear Infrastructure",
    species: ["Asiatic Lion", "Mugger Crocodile", "Indian Leopard", "Great Indian Bustard"],
    summary: "Dry teak ecosystems and coastal wetlands. Real-time GPS geofencing alerts forest teams when pride movements approach railway tracks and open irrigation wells."
  }
};

// --- 3. DEFAULT CITIZEN SCIENCE SIGHTINGS ---
const defaultSightings = [
  {
    id: "obs-1",
    species: "Bengal Tiger",
    category: "mammal",
    region: "Corbett Tiger Reserve, Uttarakhand",
    date: "2026-10-02",
    observer: "Ranger S. Rawat (Field Patrol 4)",
    count: 2,
    notes: "Tigress with sub-adult cub spotted near Ramganga riverbed. Healthy condition, moving eastward toward buffer zone."
  },
  {
    id: "obs-2",
    species: "Asian Elephant",
    category: "mammal",
    region: "Nagarhole-Bandipur Corridor, Karnataka",
    date: "2026-10-01",
    observer: "Dr. K. Nair (Telemetry Biologist)",
    count: 14,
    notes: "Breeding herd recorded crossing Kabini backwaters. Automated acoustic tripwire triggered warning to nearby farm clusters."
  },
  {
    id: "obs-3",
    species: "Indian Rhinoceros",
    category: "mammal",
    region: "Kaziranga Central Range, Assam",
    date: "2026-09-29",
    observer: "Ananya Bora (Wetlands Research Fellow)",
    count: 3,
    notes: "Adult pair and calf grazing in short elephant grass. No physical snare marks observed on drone video survey."
  },
  {
    id: "obs-4",
    species: "Indian Peafowl",
    category: "bird",
    region: "Sariska National Park, Rajasthan",
    date: "2026-09-27",
    observer: "V. Sharma (Citizen Naturalist)",
    count: 8,
    notes: "Flock foraging near water catchment point. Active alarm calls observed alerting spotted deer to nearby leopard presence."
  }
];

// --- 4. WEB AUDIO API SYNTHESIZER ---
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playWildlifeVocalization(soundType, buttonEl, statusEl) {
  const ctx = getAudioContext();
  if (!ctx) {
    showToast("Audio synthesis not supported in this browser.");
    return;
  }

  if (buttonEl) {
    buttonEl.classList.add("playing");
    buttonEl.disabled = true;
  }
  if (statusEl) statusEl.textContent = "🔊 Emitting acoustic call...";

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);

  let duration = 2.2;

  switch (soundType) {
    case "tiger": {
      // Tiger guttural roar: low resonant oscillator with descending pitch and harmonic noise
      duration = 2.4;
      const osc = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();

      osc.type = "sawtooth";
      osc2.type = "triangle";

      osc.frequency.setValueAtTime(110, now);
      osc.frequency.exponentialRampToValueAtTime(55, now + 1.8);
      osc2.frequency.setValueAtTime(80, now);
      osc2.frequency.exponentialRampToValueAtTime(42, now + 2.0);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(450, now);
      filter.frequency.exponentialRampToValueAtTime(160, now + 2.0);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.5, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 2.3);

      osc.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);

      osc.start(now);
      osc2.start(now);
      osc.stop(now + 2.4);
      osc2.stop(now + 2.4);
      break;
    }

    case "elephant": {
      // Elephant trumpet: bright modulated brass with pitch bend and vibrato
      duration = 2.0;
      const osc = ctx.createOscillator();
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.linearRampToValueAtTime(520, now + 0.4);
      osc.frequency.linearRampToValueAtTime(390, now + 1.2);
      osc.frequency.exponentialRampToValueAtTime(180, now + 1.9);

      // Vibrato
      lfo.frequency.setValueAtTime(16, now);
      lfoGain.gain.setValueAtTime(18, now);
      lfo.connect(osc.frequency);

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(900, now);
      filter.Q.value = 3.0;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.02, now);
      gain.gain.linearRampToValueAtTime(0.4, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 1.9);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);

      lfo.start(now);
      osc.start(now);
      lfo.stop(now + 2.0);
      osc.stop(now + 2.0);
      break;
    }

    case "peafowl": {
      // Peacock 'may-awe': rising sine whistle followed by slide down
      duration = 1.8;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(750, now);
      osc.frequency.exponentialRampToValueAtTime(1450, now + 0.5);
      osc.frequency.linearRampToValueAtTime(980, now + 1.5);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.35, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 1.7);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start(now);
      osc.stop(now + 1.8);
      break;
    }

    case "rhino": {
      // Rhino snort / chuff: rhythmic low-pass puffs
      duration = 1.6;
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(95, now);
      osc.frequency.linearRampToValueAtTime(70, now + 1.2);

      filter.type = "lowpass";
      filter.frequency.value = 280;

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.45, now + 0.2);
      gain.gain.linearRampToValueAtTime(0.1, now + 0.6);
      gain.gain.linearRampToValueAtTime(0.4, now + 0.8);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 1.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);

      osc.start(now);
      osc.stop(now + 1.6);
      break;
    }

    case "crocodile": {
      // Crocodile sub-bass vibration & water rumble
      duration = 2.0;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(48, now);
      osc.frequency.linearRampToValueAtTime(58, now + 0.8);
      osc.frequency.linearRampToValueAtTime(40, now + 1.9);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.linearRampToValueAtTime(0.6, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 1.9);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start(now);
      osc.stop(now + 2.0);
      break;
    }

    case "forest": {
      // Canopy wind and high ambient cricket frequencies
      duration = 2.5;
      const osc = ctx.createOscillator();
      const oscCricket = ctx.createOscillator();
      const gain = ctx.createGain();
      const cricketGain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.linearRampToValueAtTime(180, now + 1.2);
      osc.frequency.linearRampToValueAtTime(130, now + 2.3);

      gain.gain.setValueAtTime(0.02, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 1.0);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 2.4);

      oscCricket.type = "triangle";
      oscCricket.frequency.setValueAtTime(4200, now);

      cricketGain.gain.setValueAtTime(0.01, now);
      cricketGain.gain.linearRampToValueAtTime(0.04, now + 0.6);
      cricketGain.gain.exponentialRampToValueAtTime(0.005, now + 2.2);

      osc.connect(gain);
      gain.connect(masterGain);
      oscCricket.connect(cricketGain);
      cricketGain.connect(masterGain);

      osc.start(now);
      oscCricket.start(now);
      osc.stop(now + 2.5);
      oscCricket.stop(now + 2.5);
      break;
    }

    default: {
      // Generic bird/animal chirp
      duration = 1.2;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(500, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.4);
      osc.frequency.exponentialRampToValueAtTime(400, now + 1.1);

      gain.gain.setValueAtTime(0.02, now);
      gain.gain.linearRampToValueAtTime(0.3, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 1.1);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start(now);
      osc.stop(now + 1.2);
    }
  }

  setTimeout(() => {
    if (buttonEl) {
      buttonEl.classList.remove("playing");
      buttonEl.disabled = false;
    }
    if (statusEl) statusEl.textContent = "Playback completed";
  }, duration * 1000);
}

// Global variable tracking currently inspected species in modal
let activeModalSpecies = null;

function playCurrentModalSound() {
  if (activeModalSpecies) {
    const btn = document.getElementById("modalAudioBtn");
    const status = document.getElementById("modalAudioStatus");
    playWildlifeVocalization(activeModalSpecies.soundType, btn, status);
  }
}

// --- 5. RENDER SPECIES GRID WITH ADVANCED FILTERS ---
const speciesGrid = document.getElementById("speciesGrid");
const speciesSearch = document.getElementById("speciesSearch");
const statusFilter = document.getElementById("statusFilter");
const resultsCount = document.getElementById("resultsCount");
let activeCategory = "all";

function renderSpeciesCards(items) {
  if (!speciesGrid) return;
  speciesGrid.innerHTML = "";

  if (items.length === 0) {
    speciesGrid.innerHTML = `
      <div class="no-results">
        <h3>🔍 No matching species found</h3>
        <p>Try searching with another keyword or resetting the category/status filters.</p>
      </div>
    `;
    if (resultsCount) resultsCount.textContent = "No species matched your criteria";
    return;
  }

  items.forEach(sp => {
    const card = document.createElement("article");
    card.className = "card species-card";
    card.dataset.type = sp.type;
    card.dataset.status = sp.status;

    card.innerHTML = `
      <div class="card-image ${sp.imageClass}">${sp.emoji}</div>
      <div class="card-body">
        <div class="card-meta-top">
          <span class="tag ${sp.statusClass}">${sp.status}</span>
          <button class="card-audio-btn" title="Listen to ${sp.soundLabel}" onclick="event.stopPropagation(); playWildlifeVocalization('${sp.soundType}', this)">
            🔊 Call
          </button>
        </div>
        <h3>${sp.name}</h3>
        <p class="scientific">${sp.scientific}</p>
        <p>${sp.description}</p>
        <div class="card-footer">
          <button class="text-btn" onclick="openSpeciesModal('${sp.id}')">View dossier →</button>
          <span class="scientific" style="font-size:11px;">📍 ${sp.habitat.split(',')[0]}</span>
        </div>
      </div>
    `;
    speciesGrid.appendChild(card);
  });

  if (resultsCount) {
    resultsCount.textContent = `Showing ${items.length} of ${speciesData.length} monitored species`;
  }
}

function filterSpecies() {
  const searchTerm = (speciesSearch?.value || "").toLowerCase().trim();
  const selectedStatus = statusFilter?.value || "all";

  const filtered = speciesData.filter(sp => {
    // 1. Category check
    const matchesCategory = activeCategory === "all" || sp.type === activeCategory;

    // 2. Status check
    const matchesStatus = selectedStatus === "all" || sp.status.toLowerCase() === selectedStatus.toLowerCase();

    // 3. Search query check
    const matchesSearch = !searchTerm ||
      sp.name.toLowerCase().includes(searchTerm) ||
      sp.scientific.toLowerCase().includes(searchTerm) ||
      sp.habitat.toLowerCase().includes(searchTerm) ||
      sp.description.toLowerCase().includes(searchTerm) ||
      sp.reserves.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesStatus && matchesSearch;
  });

  renderSpeciesCards(filtered);
}

// Category filter button listeners
const typeFilterButtons = document.querySelectorAll("#typeFilters .filter");
typeFilterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    typeFilterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.filter;
    filterSpecies();
  });
});

if (speciesSearch) speciesSearch.addEventListener("input", filterSpecies);
if (statusFilter) statusFilter.addEventListener("change", filterSpecies);

// --- 6. SPECIES DOSSIER MODAL ---
const speciesModal = document.getElementById("speciesModal");
const modalTitle = document.getElementById("modalTitle");
const modalScientific = document.getElementById("modalScientific");
const modalStatusTag = document.getElementById("modalStatusTag");
const modalCategory = document.getElementById("modalCategory");
const modalEmoji = document.getElementById("modalEmoji");
const modalDescription = document.getElementById("modalDescription");
const modalHabitat = document.getElementById("modalHabitat");
const modalReserves = document.getElementById("modalReserves");
const modalPopulation = document.getElementById("modalPopulation");
const modalTech = document.getElementById("modalTech");
const modalAudioStatus = document.getElementById("modalAudioStatus");

function openSpeciesModal(speciesId) {
  const sp = speciesData.find(s => s.id === speciesId || s.name === speciesId);
  if (!sp || !speciesModal) return;

  activeModalSpecies = sp;
  modalTitle.textContent = sp.name;
  modalScientific.textContent = sp.scientific;
  modalCategory.textContent = `${sp.type.toUpperCase()} DOSSIER`;
  modalStatusTag.textContent = sp.status;
  modalStatusTag.className = `tag ${sp.statusClass}`;
  modalEmoji.textContent = sp.emoji;
  modalDescription.textContent = sp.description;
  modalHabitat.textContent = sp.habitat;
  modalReserves.textContent = sp.reserves;
  modalPopulation.textContent = sp.population;
  modalTech.textContent = sp.tech;
  if (modalAudioStatus) {
    modalAudioStatus.textContent = `Acoustic Profile: ${sp.soundLabel}`;
  }

  speciesModal.classList.add("show");
  speciesModal.setAttribute("aria-hidden", "false");
}

function closeSpeciesModal() {
  if (speciesModal) {
    speciesModal.classList.remove("show");
    speciesModal.setAttribute("aria-hidden", "true");
  }
}

// Compatibility wrapper for old onclick calls if any
function showSpecies(name) {
  const match = speciesData.find(s => s.name === name);
  if (match) {
    openSpeciesModal(match.id);
  }
}

// --- 7. DYNAMIC INTERACTIVE MAP ---
const mapPins = document.querySelectorAll("#indiaMapContainer .pin");
const mapDetailPanel = document.getElementById("mapDetailPanel");

function selectMapRegion(regionName) {
  const data = regionalData[regionName];
  if (!data || !mapDetailPanel) return;

  // Highlight selected pin
  mapPins.forEach(p => {
    p.classList.toggle("active", p.dataset.region === regionName);
  });

  const speciesChips = data.species.map(s => `<span class="species-chip">${s}</span>`).join("");

  mapDetailPanel.innerHTML = `
    <div>
      <p class="eyebrow dark">REGIONAL SURVEILLANCE DESK</p>
      <h3>${data.name}</h3>
      <p class="map-panel-desc">${data.summary}</p>

      <div class="map-telemetry-box">
        <div class="telemetry-row">
          <span>Biogeographic Zone</span>
          <b>${data.zone}</b>
        </div>
        <div class="telemetry-row">
          <span>Key Protected Reserves</span>
          <b>${data.reserves}</b>
        </div>
        <div class="telemetry-row">
          <span>Active Camera Traps</span>
          <b>${data.cameraTraps} sensors online</b>
        </div>
        <div class="telemetry-row">
          <span>GPS Telemetry Collars</span>
          <b>${data.activeCollars} animals transmitting</b>
        </div>
        <div class="telemetry-row">
          <span>Primary Threat Vector</span>
          <b style="color:#d97706;">${data.threatLevel}</b>
        </div>
      </div>

      <p class="eyebrow dark" style="margin-bottom:6px;">Priority Species In Focus</p>
      <div class="regional-species-tags">
        ${speciesChips}
      </div>
    </div>

    <div class="map-panel-actions">
      <button class="btn primary" onclick="filterByRegionKeywords('${data.species[0]}')">
        Filter ${data.species[0]} in Explorer
      </button>
      <button class="btn secondary-dark" onclick="openSightingWithLocation('${data.reserves.split(',')[0]}, ${regionName}')">
        + Log Sighting Here
      </button>
    </div>
  `;
}

function filterByRegionKeywords(speciesName) {
  if (speciesSearch) {
    speciesSearch.value = speciesName;
    filterSpecies();
  }
  document.getElementById("species")?.scrollIntoView({ behavior: "smooth" });
  showToast(`Filtered explorer to: ${speciesName}`);
}

function openSightingWithLocation(loc) {
  openSightingModal();
  const locInput = document.getElementById("formRegion");
  if (locInput) locInput.value = loc;
}

mapPins.forEach(pin => {
  pin.addEventListener("click", () => {
    const region = pin.dataset.region;
    if (region) selectMapRegion(region);
  });
});

// Legacy helper for old buttons
function mapMessage(region) {
  if (regionalData[region]) {
    selectMapRegion(region);
  } else {
    selectMapRegion("Uttarakhand");
  }
}

// --- 8. CITIZEN SCIENCE OBSERVATION LOG (LocalStorage) ---
const sightingsFeed = document.getElementById("sightingsFeed");
const sightingTotalCount = document.getElementById("sightingTotalCount");
const sightingModal = document.getElementById("sightingModal");
const sightingForm = document.getElementById("sightingForm");
const resetSightingsBtn = document.getElementById("resetSightingsBtn");

function getStoredSightings() {
  try {
    const saved = localStorage.getItem("biowatch_sightings");
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error("Error reading localStorage", e);
  }
  return [...defaultSightings];
}

function saveSightings(list) {
  try {
    localStorage.setItem("biowatch_sightings", JSON.stringify(list));
  } catch (e) {
    console.error("Error writing localStorage", e);
  }
}

function renderSightings() {
  if (!sightingsFeed) return;
  const list = getStoredSightings();

  sightingsFeed.innerHTML = "";
  if (list.length === 0) {
    sightingsFeed.innerHTML = `<p class="no-results">No observations recorded yet. Be the first to submit!</p>`;
    if (sightingTotalCount) sightingTotalCount.textContent = "0 Observations Logged";
    return;
  }

  if (sightingTotalCount) {
    sightingTotalCount.textContent = `${list.length} Observation${list.length === 1 ? '' : 's'} Logged`;
  }

  list.forEach(obs => {
    const card = document.createElement("article");
    card.className = "sighting-card";
    card.innerHTML = `
      <div class="sighting-card-top">
        <h4 class="sighting-species-name">${obs.species}</h4>
        <span class="sighting-verified">✓ Field Verified</span>
      </div>
      <div class="sighting-details">
        <span>📍 ${obs.region}</span>
        <span>📅 ${obs.date}</span>
        <span>🔢 Count: ${obs.count || 1}</span>
      </div>
      <p class="sighting-notes">${obs.notes || "Field sighting verified by surveillance station."}</p>
      <p class="sighting-observer">Submitted by: ${obs.observer}</p>
    `;
    sightingsFeed.appendChild(card);
  });
}

function openSightingModal() {
  if (sightingModal) {
    const dateInput = document.getElementById("formDate");
    if (dateInput && !dateInput.value) {
      dateInput.value = new Date().toISOString().split("T")[0];
    }
    sightingModal.classList.add("show");
    sightingModal.setAttribute("aria-hidden", "false");
  }
}

function closeSightingModal() {
  if (sightingModal) {
    sightingModal.classList.remove("show");
    sightingModal.setAttribute("aria-hidden", "true");
  }
}

function handleSightingSubmit(event) {
  event.preventDefault();

  const species = document.getElementById("formSpecies").value.trim();
  const category = document.getElementById("formCategory").value;
  const region = document.getElementById("formRegion").value.trim();
  const date = document.getElementById("formDate").value;
  const observer = document.getElementById("formObserver").value.trim();
  const count = parseInt(document.getElementById("formCount").value, 10) || 1;
  const notes = document.getElementById("formNotes").value.trim();

  if (!species || !region || !observer) {
    showToast("Please fill in all required fields.");
    return;
  }

  const newObs = {
    id: "obs-" + Date.now(),
    species,
    category,
    region,
    date,
    observer,
    count,
    notes
  };

  const list = getStoredSightings();
  list.unshift(newObs);
  saveSightings(list);
  renderSightings();

  sightingForm?.reset();
  closeSightingModal();
  showToast(`Observation for "${species}" successfully logged!`);

  // Smooth scroll to sightings
  document.getElementById("sightings")?.scrollIntoView({ behavior: "smooth" });
}

if (resetSightingsBtn) {
  resetSightingsBtn.addEventListener("click", () => {
    if (confirm("Reset observations feed back to default demonstrations?")) {
      saveSightings([...defaultSightings]);
      renderSightings();
      showToast("Sightings restored to defaults.");
    }
  });
}

// --- 9. DATASET CSV EXPORT ---
const exportCsvBtn = document.getElementById("exportCsvBtn");
if (exportCsvBtn) {
  exportCsvBtn.addEventListener("click", () => {
    const headers = [
      "Common Name",
      "Scientific Name",
      "Taxonomic Category",
      "IUCN Red List Status",
      "Estimated Population",
      "Key Protected Reserves",
      "Primary Habitat",
      "Monitoring Technology"
    ];

    const rows = speciesData.map(s => [
      `"${s.name}"`,
      `"${s.scientific}"`,
      `"${s.type}"`,
      `"${s.status}"`,
      `"${s.population}"`,
      `"${s.reserves}"`,
      `"${s.habitat}"`,
      `"${s.tech}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);

    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `BioWatch_India_Species_Inventory_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("Species inventory downloaded as CSV.");
  });
}

// --- 10. NIGHT PATROL / DARK THEME TOGGLE ---
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = themeToggleBtn?.querySelector(".theme-icon");
const themeLabel = themeToggleBtn?.querySelector(".theme-label");

function applyTheme(isNight) {
  if (isNight) {
    document.body.classList.add("night-mode");
    if (themeIcon) themeIcon.textContent = "☀️";
    if (themeLabel) themeLabel.textContent = "Day Mode";
    localStorage.setItem("biowatch_theme", "night");
  } else {
    document.body.classList.remove("night-mode");
    if (themeIcon) themeIcon.textContent = "🌙";
    if (themeLabel) themeLabel.textContent = "Night Patrol";
    localStorage.setItem("biowatch_theme", "day");
  }
}

// Initialize theme from storage
const savedTheme = localStorage.getItem("biowatch_theme");
if (savedTheme === "night") {
  applyTheme(true);
} else {
  applyTheme(false);
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const isNight = document.body.classList.contains("night-mode");
    applyTheme(!isNight);
    showToast(!isNight ? "Night Patrol Mode active" : "Day Mode active");
  });
}

// --- 11. TOAST NOTIFICATIONS ---
const toastEl = document.getElementById("toast");
let toastTimeout = null;

function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 3200);
}

// --- 12. ANIMATED DASHBOARD COUNTERS ---
const counters = document.querySelectorAll(".stat strong");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const counter = entry.target;
    const target = Number(counter.dataset.target);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 45));

    const update = () => {
      current += step;
      if (current >= target) {
        counter.textContent = target.toLocaleString() + "+";
      } else {
        counter.textContent = current.toLocaleString();
        requestAnimationFrame(update);
      }
    };
    update();
    observer.unobserve(counter);
  });
}, { threshold: 0.4 });

counters.forEach(counter => observer.observe(counter));

// --- 13. NAVIGATION & MODAL CONTROLS ---
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks?.classList.remove("open"));
});

// Close modals on backdrop click or escape key
[speciesModal, sightingModal].forEach(m => {
  if (!m) return;
  m.addEventListener("click", (e) => {
    if (e.target === m) {
      closeSpeciesModal();
      closeSightingModal();
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSpeciesModal();
    closeSightingModal();
  }
});

// --- 14. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  renderSpeciesCards(speciesData);
  selectMapRegion("Uttarakhand");
  renderSightings();
});

// Expose necessary functions globally for HTML inline handlers
window.showSpecies = showSpecies;
window.openSpeciesModal = openSpeciesModal;
window.closeSpeciesModal = closeSpeciesModal;
window.playCurrentModalSound = playCurrentModalSound;
window.playWildlifeVocalization = playWildlifeVocalization;
window.selectMapRegion = selectMapRegion;
window.mapMessage = mapMessage;
window.filterByRegionKeywords = filterByRegionKeywords;
window.openSightingWithLocation = openSightingWithLocation;
window.openSightingModal = openSightingModal;
window.closeSightingModal = closeSightingModal;
window.handleSightingSubmit = handleSightingSubmit;
