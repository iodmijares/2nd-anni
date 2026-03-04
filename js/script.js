// Removed unused Lara pixel art logic

// ══════════════════════════════
//  LO-FI AUDIO
// ══════════════════════════════
let audioCtx = null, musicNodes = [], musicPlaying = false;
function initAudio() {
    if (audioCtx) return;
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    playLofi();
}
function playLofi() {
    if (!audioCtx) return;
    musicPlaying = true;
    document.getElementById('music-btn').textContent = '♪ ON';
    const chords = [[261.63, 329.63, 392.00, 493.88], [220.00, 261.63, 329.63, 415.30], [174.61, 220.00, 261.63, 349.23], [196.00, 246.94, 293.66, 392.00]];
    const melody = [523.25, 587.33, 659.25, 698.46, 587.33, 523.25, 493.88, 523.25];
    const beatLen = 1.8, loops = 30;
    const now = audioCtx.currentTime + 0.05;
    const master = audioCtx.createGain();
    master.gain.setValueAtTime(0, now);
    master.gain.linearRampToValueAtTime(0.16, now + 1.5);
    master.connect(audioCtx.destination);
    musicNodes.push(master);
    const conv = audioCtx.createConvolver();
    const irLen = audioCtx.sampleRate * 2;
    const ir = audioCtx.createBuffer(2, irLen, audioCtx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < irLen; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / irLen, 2.5); }
    conv.buffer = ir;
    const revG = audioCtx.createGain(); revG.gain.value = 0.22;
    conv.connect(revG); revG.connect(master); musicNodes.push(conv, revG);
    for (let loop = 0; loop < loops; loop++) {
        chords.forEach((chord, ci) => {
            const t = now + (loop * 4 + ci) * beatLen;
            chord.forEach(freq => {
                const o = audioCtx.createOscillator(), g = audioCtx.createGain();
                o.type = 'triangle'; o.frequency.value = freq; o.detune.value = (Math.random() - .5) * 7;
                g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.052, t + 0.09);
                g.gain.setValueAtTime(0.052, t + beatLen * .72); g.gain.linearRampToValueAtTime(0, t + beatLen * .96);
                o.connect(g); g.connect(master); g.connect(conv);
                o.start(t); o.stop(t + beatLen); musicNodes.push(o, g);
            });
            if (loop < loops - 1) {
                const mf = melody[(loop * 4 + ci) % melody.length];
                const mo = audioCtx.createOscillator(), mg = audioCtx.createGain();
                mo.type = 'sine'; mo.frequency.value = mf;
                mg.gain.setValueAtTime(0, t + .1); mg.gain.linearRampToValueAtTime(0.065, t + .22);
                mg.gain.linearRampToValueAtTime(0, t + beatLen * .88);
                mo.connect(mg); mg.connect(master); mg.connect(conv);
                mo.start(t + .1); mo.stop(t + beatLen); musicNodes.push(mo, mg);
            }
            if (ci % 2 === 0) {
                const ko = audioCtx.createOscillator(), kg = audioCtx.createGain();
                ko.type = 'sine'; ko.frequency.setValueAtTime(80, t); ko.frequency.exponentialRampToValueAtTime(30, t + .18);
                kg.gain.setValueAtTime(.12, t); kg.gain.exponentialRampToValueAtTime(.001, t + .22);
                ko.connect(kg); kg.connect(master); ko.start(t); ko.stop(t + .25); musicNodes.push(ko, kg);
            }
            const hh = audioCtx.createOscillator(), hhg = audioCtx.createGain(), hhf = audioCtx.createBiquadFilter();
            hh.type = 'square'; hh.frequency.value = 800; hhf.type = 'highpass'; hhf.frequency.value = 7000;
            hhg.gain.setValueAtTime(.016, t + beatLen * .5); hhg.gain.exponentialRampToValueAtTime(.001, t + beatLen * .5 + .08);
            hh.connect(hhf); hhf.connect(hhg); hhg.connect(master);
            hh.start(t + beatLen * .5); hh.stop(t + beatLen * .5 + .1); musicNodes.push(hh, hhg, hhf);
        });
    }
    setTimeout(() => { if (musicPlaying) { stopMusic(false); playLofi(); } }, loops * 4 * beatLen * 1000 - 500);
}
function stopMusic(full = true) {
    musicNodes.forEach(n => { try { n.stop && n.stop(); n.disconnect && n.disconnect(); } catch (e) { } });
    musicNodes = [];
    if (full) { musicPlaying = false; document.getElementById('music-btn').textContent = '♪ OFF'; }
}
function toggleMusic() { if (musicPlaying) stopMusic(true); else { initAudio(); } }

function playBlip() {
    if (!audioCtx || !musicPlaying) return;
    try {
        const t = audioCtx.currentTime;
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.type = 'triangle';
        o.frequency.setValueAtTime(600, t);
        o.frequency.exponentialRampToValueAtTime(300, t + 0.04);
        g.gain.setValueAtTime(0.012, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
        o.connect(g);
        g.connect(audioCtx.destination);
        o.start(t);
        o.stop(t + 0.04);
    } catch (e) { }
}

// ══════════════════════════════
//  STATE
// ══════════════════════════════
let clearedLevels = new Set();
let currentLevel = null;
let dialogueIndex = 0, dialogueLines = [];
let isTyping = false, typeTimer = null;
let currentBoss = null;

// ══════════════════════════════
//  UTILS
// ══════════════════════════════
function show(id) { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); document.getElementById(id).classList.add('active'); }
function buildStars(id, n) { const c = document.getElementById(id); if (!c) return; c.innerHTML = ''; for (let i = 0; i < n; i++) { const s = document.createElement('div'); s.className = 'star'; const sz = Math.random() * 2.5 + 1; s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random() * 100}%;left:${Math.random() * 100}%;--d:${Math.random() * 3 + 2}s;--delay:${Math.random() * 3}s;`; c.appendChild(s); } }
function spawnParticles(n, emojis) { for (let i = 0; i < n; i++) { setTimeout(() => { const p = document.createElement('div'); p.className = 'particle'; p.textContent = emojis[Math.floor(Math.random() * emojis.length)]; p.style.cssText = `left:${Math.random() * 100}vw;top:-30px;font-size:${Math.random() * 16 + 14}px;animation-duration:${Math.random() * 2 + 2}s;animation-delay:${Math.random() * .4}s;`; document.body.appendChild(p); setTimeout(() => p.remove(), 5000); }, i * 40); } }
function burst() {
    spawnParticles(70, ['💚', '❤️', '💛', '⭐', '🐾', '✨', '💝', '🎉', '🎊', '🃏', '💧']);

    // Anniversary Popup
    const msg = document.createElement('div');
    msg.innerHTML = 'HAPPY 2ND<br>ANNIVERSARY! 💚';
    msg.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-family:"Press Start 2P",monospace;font-size:clamp(1.5rem, 5vw, 3.5rem);color:var(--white);text-shadow:0 0 20px var(--yellow), 4px 4px 0 var(--red);z-index:9999;text-align:center;width:100%;pointer-events:none;line-height:1.5;';
    document.body.appendChild(msg);
    msg.animate([
        { transform: 'translate(-50%, -50%) scale(0.5)', opacity: 0 },
        { transform: 'translate(-50%, -50%) scale(1.1)', opacity: 1, offset: 0.2 },
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1, offset: 0.8 },
        { transform: 'translate(-50%, -50%) scale(1.5)', opacity: 0 }
    ], { duration: 4500, easing: 'ease-in-out' });
    setTimeout(() => msg.remove(), 4500);
}

// ══════════════════════════════
//  FLOW
// ══════════════════════════════
function startLoad() {
    show('s-load');
    const msgs = ['LOADING D\' BLUE ARC...', 'IMPORTING UNO MEMORIES...', 'SPAWNING BARKADA...', 'WARMING UP THE SMALL STORE...', 'ALMOST READY...'];
    let p = 0, mi = 0;
    const bar = document.getElementById('load-bar'), pct = document.getElementById('load-pct'), msg = document.getElementById('load-msg');
    const iv = setInterval(() => {
        p += Math.random() * 7 + 2; if (p > 100) p = 100;
        bar.style.width = p + '%'; pct.textContent = Math.floor(p) + '%';
        if (p > mi * 22 + 14 && mi < msgs.length) msg.textContent = msgs[mi++];
        if (p >= 100) { clearInterval(iv); setTimeout(() => { initAudio(); buildStars('cs-stars', 60); show('s-charselect'); }, 400); }
    }, 70);
}

function goToMap() {
    buildMap(); show('s-map'); startTimer();
    document.getElementById('music-bar').style.display = 'flex';
}

function startTimer() {
    function tick() {
        const diff = Date.now() - new Date('2023-03-05').getTime();
        const d = Math.floor(diff / 86400000), h = Math.floor((diff % 86400000) / 3600000), m = Math.floor((diff % 3600000) / 60000), s = Math.floor((diff % 60000) / 1000);
        document.getElementById('t-days').textContent = d.toLocaleString();
        document.getElementById('t-hrs').textContent = String(h).padStart(2, '0');
        document.getElementById('t-min').textContent = String(m).padStart(2, '0');
        document.getElementById('t-sec').textContent = String(s).padStart(2, '0');
    }
    tick(); setInterval(tick, 1000);
}

// ══════════════════════════════
//  MAP
// ══════════════════════════════
function buildMap() {
    const list = document.getElementById('level-list'); list.innerHTML = '';
    const cleared = LEVELS.filter((_, i) => clearedLevels.has(i)).length;
    document.getElementById('sp-fill').style.width = (cleared / LEVELS.length * 100) + '%';
    LEVELS.forEach((lv, i) => {
        const isCleared = clearedLevels.has(i);
        const locked = i > 0 && !clearedLevels.has(i - 1);
        const isBoss = !!lv.isBoss, isConflict = !!(lv.name && lv.name.includes("CONFLICT"));
        const div = document.createElement('div');
        div.className = 'lv-row' + (locked ? ' locked' : '') + (isCleared ? ' cleared' : '') + (isBoss ? ' boss-row' : '') + (isConflict ? ' conflict-row' : '');
        div.innerHTML = `
      <div class="lv-icon">${lv.icon}</div>
      <div class="lv-info">
        <div class="lv-num">${isBoss ? '⚔ BOSS FIGHT' : 'LEVEL ' + String(i + 1).padStart(2, '0')}</div>
        <div class="lv-name" style="color:${lv.color}">${lv.name.replace('\n', '<br>')}</div>
        <div class="lv-status">${isCleared ? '✅ CLEARED' : locked ? '🔒 LOCKED' : isBoss ? '⚔ FIGHT!' : '▶ PLAY'}</div>
      </div>
      <div class="lv-lock">${locked ? '🔒' : isCleared ? '⭐' : '▶'}</div>`;
        if (!locked) div.onclick = () => enterLevel(i);
        list.appendChild(div);
    });
}

// ══════════════════════════════
//  ENTER LEVEL
// ══════════════════════════════
function enterLevel(i) {
    currentLevel = i; const lv = LEVELS[i];
    const rows = document.querySelectorAll('.lv-row');
    if (rows[i]) { rows[i].classList.add('unlocking'); setTimeout(() => rows[i].classList.remove('unlocking'), 900); }
    if (lv.isBoss) startBoss(lv); else startDialogue(lv);
}

// ══════════════════════════════
//  SCENE BACKGROUNDS
// ══════════════════════════════
function buildSceneBg(type) {
    const scene = document.getElementById('dial-scene');
    scene.querySelectorAll('.scene-bg').forEach(e => e.remove());
    const bg = document.createElement('div'); bg.className = 'scene-bg';

    if (type === 'party') {
        bg.classList.add('bg-party');
        bg.innerHTML = `<div class="party-lights"></div><div class="disco"></div><div class="table"></div><div class="uno-cards">🃏🃏🃏🃏🃏</div><div class="floor-p"></div>`;
    } else if (type === 'phone') {
        bg.classList.add('bg-phone');
        bg.innerHTML = `<div class="phone-frame"></div><div class="phone-screen"><div class="fb-header">💬 Messenger</div><div class="fb-chat"><div class="bubble bubble-them">Kuya Ivan naa naka blue arc?</div><div class="bubble bubble-them">HAHAHAHAHAH</div><div class="bubble bubble-me">Here na! Naa na ko.</div></div></div>`;
    } else if (type === 'hallway') {
        bg.classList.add('bg-hallway');
        bg.innerHTML = `<div class="hall-wall"></div><div class="hall-light"></div><div class="door door-103"><div class="door-num">103</div></div><div class="door door-105"><div class="door-num">105</div></div><div class="floor-h"></div>`;
    } else if (type === 'store') {
        bg.classList.add('bg-store');
        bg.innerHTML = `<div class="store-sky"></div><div class="store-sign">★ MINUTE BURGER ★</div><div class="stall-roof"></div><div class="stall-counter"></div><div class="plastic-chairs">🪑🪑</div><div class="tree tree-l">🌿</div><div class="tree tree-r">🌿</div><div class="street"></div>`;
    } else if (type === 'street') {
        bg.classList.add('bg-street');
        const stDiv = document.createElement('div'); stDiv.className = 'st-sky';
        for (let i = 0; i < 45; i++) { const s = document.createElement('div'); s.className = 'star'; const sz = Math.random() * 2 + 1; s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random() * 100}%;left:${Math.random() * 100}%;--d:${Math.random() * 3 + 2}s;--delay:${Math.random() * 2}s;`; stDiv.appendChild(s); }
        bg.appendChild(stDiv);
        bg.innerHTML += `<div class="st-moon"></div><div class="st-road"></div><div class="st-line"></div><div class="lamppost" style="left:20%"></div><div class="lamppost" style="right:20%"></div>`;
    } else if (type === 'room') {
        bg.classList.add('bg-room');
        bg.innerHTML = `<div class="window"></div><div class="tv"></div><div class="tv-label">▶ Walking Dead</div><div class="bed"></div><div class="floor-r"></div>`;
    } else if (type === 'clinic') {
        bg.classList.add('bg-clinic');
        bg.innerHTML = `<div class="cwall"></div><div class="clight"></div><div class="ccross">✚</div><div class="cbed"></div><div class="needle-anim">💉</div><div class="cfloor"></div>`;
    } else if (type === 'conflict') {
        bg.classList.add('bg-conflict');
        bg.innerHTML = `<div class="storm"></div><div class="lightning">⚡</div>`;
    } else if (type === 'art') {
        bg.classList.add('bg-art');
        bg.innerHTML = `<div class="awall"></div><div class="tablet"></div><div class="tablet-screen" style="position:absolute;top:calc(12% + 8px);left:50%;transform:translateX(-50%);width:calc(55% - 16px);background:#0d0a20;display:flex;align-items:center;justify-content:center;font-size:1.4rem;">🎨</div><div class="desk"></div><div class="art-tools">✏️🖌️</div>`;
    } else if (type === 'mountain') {
        bg.classList.add('bg-mountain');
        const ms = document.createElement('div'); ms.className = 'msky';
        for (let i = 0; i < 55; i++) { const s = document.createElement('div'); s.className = 'star'; const sz = Math.random() * 2 + 1; s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random() * 100}%;left:${Math.random() * 100}%;--d:${Math.random() * 3 + 2}s;--delay:${Math.random() * 2}s;`; ms.appendChild(s); }
        bg.appendChild(ms);
        [[55, '10%', '85px'], [75, '32%', '115px'], [62, '58%', '95px']].forEach(([bw, l, bh]) => {
            const pk = document.createElement('div'); pk.className = 'peak'; pk.style.cssText = `bottom:30%;left:${l};border-left:${bw / 2}px solid transparent;border-right:${bw / 2}px solid transparent;border-bottom:${bh} solid #0d1830;position:absolute;`; bg.appendChild(pk);
        });
        bg.innerHTML += `<div class="mground"></div><div class="mpath"></div>`;
    }

    scene.insertBefore(bg, scene.firstChild);
}

// ══════════════════════════════
//  DIALOGUE
// ══════════════════════════════
function startDialogue(lv) {
    dialogueLines = lv.dialogues; dialogueIndex = 0;
    document.getElementById('scene-label').textContent = lv.sceneLabel || '';
    buildSceneBg(lv.sceneBg || 'room');
    // reset all sprites
    ['dspr-ivan', 'dspr-lara', 'dspr-barkada', 'dspr-kenneth', 'dspr-laragroup'].forEach(id => {
        const el = document.getElementById(id);
        el.classList.remove('talking', 'idle', 'hidden');
        el.classList.add('hidden');
    });
    show('s-dialogue');
    showDialogueLine();
}

function showDialogueLine() {
    if (dialogueIndex >= dialogueLines.length) { showClear(LEVELS[currentLevel]); return; }
    const line = dialogueLines[dialogueIndex];
    document.getElementById('dial-speaker').style.color = line.color;
    document.getElementById('dial-speaker').textContent = '▸ ' + line.speaker;

    // figure out which sprites to show
    const ivan = document.getElementById('dspr-ivan');
    const lara = document.getElementById('dspr-lara');
    const barkada = document.getElementById('dspr-barkada');
    const kenneth = document.getElementById('dspr-kenneth');
    const laragroup = document.getElementById('dspr-laragroup');
    [ivan, lara, barkada, kenneth, laragroup].forEach(e => e.classList.add('hidden'));

    const npc = line.npc || 'none';
    // always show ivan and lara if relevant
    if (line.side === 'ivan' || line.side === 'kenneth' || line.side === 'barkada' || line.side === 'none') {
        ivan.classList.remove('hidden');
        lara.classList.remove('hidden');
    }
    if (line.side === 'lara' || line.side === 'laragroup' || line.side === 'none') {
        lara.classList.remove('hidden');
        ivan.classList.remove('hidden');
    }
    if (npc === 'kenneth') { ivan.classList.remove('hidden'); kenneth.classList.remove('hidden'); }
    if (npc === 'barkada') { ivan.classList.remove('hidden'); barkada.classList.remove('hidden'); }
    if (npc === 'laragroup') { lara.classList.remove('hidden'); laragroup.classList.remove('hidden'); }

    // talking/idle
    [ivan, lara, barkada, kenneth, laragroup].forEach(e => { if (!e.classList.contains('hidden')) e.classList.add('idle'); });
    const talkMap = { 'ivan': ivan, 'lara': lara, 'barkada': barkada, 'kenneth': kenneth, 'laragroup': laragroup };
    if (talkMap[line.side]) { talkMap[line.side].classList.remove('idle'); talkMap[line.side].classList.add('talking'); }

    // emotion
    document.querySelectorAll('.emotion-bubble').forEach(e => e.remove());
    if (line.emotion && talkMap[line.side]) {
        const s = talkMap[line.side];
        s.style.position = 'relative';
        const bub = document.createElement('div'); bub.className = 'emotion-bubble'; bub.textContent = line.emotion;
        s.appendChild(bub); setTimeout(() => bub.remove(), 1800);
    }

    // typewriter
    const textEl = document.getElementById('dial-text'), nextEl = document.getElementById('dial-next');
    textEl.textContent = ''; nextEl.style.display = 'none';
    const oldChoices = document.getElementById('dial-choices');
    if (oldChoices) oldChoices.remove();
    isTyping = true; let i = 0; clearInterval(typeTimer);
    typeTimer = setInterval(() => {
        if (i < line.text.length) {
            const char = line.text[i];
            textEl.textContent += char === '\n' ? '\n' : char;
            if (char.trim() !== '' && i % 2 === 0) playBlip();
            i++;
        }
        else {
            clearInterval(typeTimer); isTyping = false;
            textEl.innerHTML = textEl.textContent.replace(/\n/g, '<br>') + '<span class="dial-cursor">▌</span>';
            if (line.choices) {
                renderDialChoices(line);
            } else {
                nextEl.style.display = 'block';
            }
        }
    }, 28);
}

function renderDialChoices(line) {
    const box = document.getElementById('dial-box');
    const cDiv = document.createElement('div');
    cDiv.id = 'dial-choices';
    cDiv.style.cssText = 'display:flex; flex-direction:column; gap:8px; margin-top:12px; z-index:10; pointer-events:auto;';
    line.choices.forEach(c => {
        const btn = document.createElement('button');
        btn.className = 'boss-btn';
        btn.textContent = '▶ ' + c.text;
        btn.onclick = (e) => {
            e.stopPropagation();
            if (c.nextText && dialogueLines[dialogueIndex + 1]) {
                dialogueLines[dialogueIndex + 1].text = c.nextText;
            }
            cDiv.remove();
            dialogueIndex++;
            showDialogueLine();
        };
        cDiv.appendChild(btn);
    });
    box.appendChild(cDiv);
}

function advanceDialogue() {
    if (isTyping) {
        clearInterval(typeTimer); isTyping = false;
        const line = dialogueLines[dialogueIndex];
        document.getElementById('dial-text').innerHTML = line.text.replace(/\n/g, '<br>') + '<span class="dial-cursor">▌</span>';
        if (line.choices) {
            renderDialChoices(line);
        } else {
            document.getElementById('dial-next').style.display = 'block';
        }
        return;
    }
    const currLine = dialogueLines[dialogueIndex];
    if (currLine && currLine.choices && document.getElementById('dial-choices')) {
        return; // wait for user choice
    }
    dialogueIndex++; showDialogueLine();
}

// ══════════════════════════════
//  BOSS
// ══════════════════════════════
function startBoss(lv) {
    currentBoss = lv; show('s-boss');
    document.getElementById('boss-title').textContent = lv.isFinalBoss ? '💀 FINAL BOSS!' : '⚔ BOSS BATTLE!';
    document.getElementById('boss-sprite').textContent = lv.bossSprite;
    updateBossHp(100);
    document.getElementById('boss-q').textContent = lv.question;
    document.getElementById('boss-result').style.display = 'none';
    const ch = document.getElementById('boss-choices'); ch.innerHTML = '';
    lv.choices.forEach((c, ci) => {
        const btn = document.createElement('button'); btn.className = 'boss-btn';
        btn.innerHTML = c.text.replace(/\n/g, '<br>');
        btn.onclick = () => answerBoss(ci, btn);
        ch.appendChild(btn);
    });
}
function updateBossHp(pct) { document.getElementById('boss-hp').style.width = pct + '%'; document.getElementById('boss-hp-lbl').textContent = 'BOSS HP: ' + pct + '%'; }
function answerBoss(ci, btn) {
    const choice = currentBoss.choices[ci];
    document.querySelectorAll('.boss-btn').forEach(b => { b.onclick = null; b.style.opacity = '.55'; });
    const result = document.getElementById('boss-result');
    if (choice.correct) {
        btn.classList.add('correct'); updateBossHp(0);
        result.style.color = 'var(--green)';
        result.innerHTML = '🎉 ' + choice.sweet.replace(/\n/g, '<br>') + '<br>BOSS DEFEATED!';
        result.style.display = 'block';
        spawnParticles(22, ['💚', '⭐', '✨', '💛']);
        setTimeout(() => showClear(currentBoss), 1800);
    } else {
        btn.classList.add('wrong');
        document.getElementById('game').classList.add('shaking');
        setTimeout(() => document.getElementById('game').classList.remove('shaking'), 400);
        result.style.color = 'var(--red)';
        result.innerHTML = '💀 ' + choice.roast.replace(/\n/g, '<br>');
        result.style.display = 'block';
        setTimeout(() => {
            document.getElementById('go-msg').innerHTML = choice.roast.replace(/\n/g, '<br>') + '<br><br>TRY AGAIN, DADA! 😤';
            document.getElementById('go-retry').onclick = () => startBoss(currentBoss);
            show('s-gameover');
        }, 1300);
    }
}

// ══════════════════════════════
//  LEVEL CLEAR
// ══════════════════════════════
function showClear(lv) {
    clearedLevels.add(currentLevel);
    try { localStorage.setItem('ivanLaraProg', JSON.stringify([...clearedLevels])); } catch (e) { }
    buildMap();

    // Gallery Unlocker for "Ugly Drawing"
    if (lv.id === 11) {
        const gDiv = document.createElement('div');
        gDiv.className = 'gallery-overlay';
        gDiv.style.cssText = 'position:absolute;inset:0;background:rgba(0,0,0,0.85);z-index:999;display:flex;align-items:center;justify-content:center;animation:fadeIn 0.5s;backdrop-filter:blur(5px);';
        gDiv.innerHTML = `<div style="padding:15px;text-align:center;color:white;font-family:'Press Start 2P';font-size:0.6rem;line-height:1.6;"><span style="color:var(--pink)">THE LEGENDARY ART INCIDENT</span><br><br><img src="img/ugly_drawing.png" style="width:100%;max-width:300px;background:white;border-radius:10px;border:3px solid var(--pink);margin-bottom:15px;filter:grayscale(1) contrast(1.3) brightness(1.1);"><br><button class="boss-btn correct" onclick="this.parentElement.parentElement.remove()">CLOSE GALLERY</button></div>`;
        document.getElementById('game').appendChild(gDiv);
    }

    const title = document.getElementById('clear-title'), icon = document.getElementById('clear-icon'), reward = document.getElementById('clear-reward');
    if (lv.isFinalBoss) { title.textContent = '🏆 ALL DONE!'; icon.textContent = '👑'; reward.textContent = '🎊 YEAR 2: S+ RANK!\n2ND ANNIVERSARY UNLOCKED!'; }
    else if (lv.isBoss) { title.textContent = '⚔ BOSS DEFEATED!'; icon.textContent = '💀✅'; reward.textContent = '💥 BOSS HP: 0\nNEXT CHAPTER UNLOCKED!'; }
    else { title.textContent = 'CHAPTER CLEAR!'; icon.textContent = '⭐'; reward.textContent = lv.reward || 'LEVEL COMPLETE!'; }
    show('s-clear'); spawnParticles(28, ['⭐', '💚', '✨', '💛', '❤️']);
}
function afterClear() { if (clearedLevels.size >= LEVELS.length) showFinale(); else show('s-map'); }

// ══════════════════════════════
//  FINALE
// ══════════════════════════════
function showFinale() { buildStars('finale-stars', 90); show('s-finale'); spawnParticles(55, ['💚', '❤️', '💛', '⭐', '🐾', '✨', '💝']); }
function backToMap() { show('s-map'); }

// ══════════════════════════════
//  INIT
// ══════════════════════════════
window.onload = () => {
    buildStars('title-stars', 100);
    try {
        const saved = localStorage.getItem('ivanLaraProg');
        if (saved) clearedLevels = new Set(JSON.parse(saved));
    } catch (e) { }
};
