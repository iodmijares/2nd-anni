// ══════════════════════════════
//  LEVELS DATA
// ══════════════════════════════
const LEVELS = [
  {
    id: 0, icon: '🎉', name: 'CH.1: THE UNO\nNIGHT AT DBA',
    color: 'var(--purple)',
    sceneLabel: "📍 D' BLUE ARC — YEAR-END PARTY",
    sceneBg: 'party',
    dialogues: [
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "It all started at a year-end\nparty. D' Blue Arc boarding house.\nEveryone was celebrating."
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "In one corner: Lara, Micah,\nAldrine, and Francis.\nQuietly playing UNO cards."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'kenneth', emotion: '👀',
        text: "Kenneth, look at that group\nin the corner.\nWe should invite them."
      },
      {
        speaker: 'KENNETH 🕹️', color: 'var(--blue)', side: 'kenneth', npc: 'kenneth', emotion: '😏',
        text: "I'm good, pre.\nYou go if you want.\nHahaha 😂"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'kenneth', emotion: '😤',
        text: "*walks over anyway*\nOy! Gusto ba ninyo mag-join?\nMay extra space pa kami!"
      },
      {
        speaker: 'LARA+FRIENDS 🃏', color: 'var(--pink)', side: 'laragroup', npc: 'laragroup', emotion: '😊',
        text: "Sure! *moves the tables together*\nLet's play!\n*shy smiles all around*"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "And just like that —\nsix strangers became\none rowdy UNO group."
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Ivan played.\nLaughed. Talked.\nAnd then he saw her smile."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '💚',
        text: "[internally, that night]\n...She has the most\nbeautiful smile I've ever seen."
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Later that night,\nIvan told his roommates:\nMC, Rodel, Wayne —"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😳',
        text: "Pre... crush ko siya.\nYung girl na nag-UNO.\nYung nag-smile. Niya. 😳"
      },
      {
        speaker: 'BARKADA 👥', color: 'var(--purple)', side: 'barkada', npc: 'barkada', emotion: '😂',
        text: "HAHAHA SERYOSO?!\nKuya Ivan has a crush!!\n*chaos erupts in Room 105*"
      },
    ],
    reward: "🎉 QUEST ITEM OBTAINED:\n\"UNO CARD\" — THE BEGINNING\nTITLE: INITIATED",
  },
  {
    id: 1, icon: '📱', name: 'CH.2: THE\nFACEBOOK ADD',
    color: 'var(--blue)',
    sceneLabel: '📍 FACEBOOK — AFTER THE PARTY',
    sceneBg: 'phone',
    dialogues: [
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "After the UNO night,\neveryone agreed to add\neach other on Facebook."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😅',
        text: "*scrolling through accounts*\n*finds everyone*\n*is definitely looking for one specific person*"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😌',
        text: "Found her.\nLara. Add friend.\n*sent* 😌"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Christmas vacation came.\nEveryone went home —\nMidsayap. New Corella. Everywhere."
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Then school resumed.\nIvan was back at DBA.\nHis phone buzzed. A message."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '😄',
        text: "Kuya Ivan naa naka\nblue arc?\nHAHAHAHAHAH"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😳',
        text: "[Sees message instantly]\n[Replies immediately]\nHere na! Naa na ko. 😅"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "He replied as fast\nas he could.\nAnd just like that — it started."
      },
    ],
    reward: "📱 ITEM UNLOCKED: \"FACEBOOK MUTUAL\"\nACHIEVEMENT: FIRST CHAT INITIATED!",
  },
  {
    id: 2, icon: '⚔️', name: 'BOSS: THE\nCHRISTMAS QUIZ',
    color: 'var(--red)', isBoss: true,
    bossSprite: '🎄', bossName: 'THE VACATION BOSS',
    question: "What was the first thing\nLara messaged Ivan\nafter Christmas break?",
    choices: [
      { text: 'A) "Hi Ivan! kamusta?"', correct: false, roast: 'Too formal! This is Lara! 😂' },
      { text: 'B) "Kuya Ivan naa naka\nblue arc? HAHAHAH" 💚', correct: true, sweet: 'YES!! The iconic first message! 💚\nPerfect score, Dada!' },
      { text: 'C) "Merry Christmas!"', correct: false, roast: 'That was during break!\nNot after! 🎄' },
      { text: 'D) She called him', correct: false, roast: 'No calls! Just a\nperfect chat message! 📱' },
    ],
  },
  {
    id: 3, icon: '💧', name: 'CH.3: 2AM &\nTHE WATER',
    color: 'var(--blue)',
    sceneLabel: '📍 D\' BLUE ARC — EXAM SEASON, 2AM',
    sceneBg: 'hallway',
    dialogues: [
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Exam season.\nStress. Coffee. Sleepless nights.\nRoom 103 and 105 — both awake."
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "It was already 2pm.\nIvan had fallen asleep\nfrom exhaustion."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '😬',
        text: "*sends message*\nKuya Ivan, do you have water?\nI really need to drink water. 😅"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Ivan's phone just sits there.\nOne minute. Five minutes.\nTwenty minutes..."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😴',
        text: "*wakes up*\n*checks phone*\nOH. Natulog diay ko. 😭"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😅',
        text: "Sorry, I fell asleep!\nI'll bring you water now!"
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '😊',
        text: "It's okay! No need anymore.\nI already have coffee. 😊"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😤',
        text: "Coffee is not water, Lara.\nYou need water.\nI'm bringing it. 😤"
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '🥺',
        text: "...Okay, fine.\nThank you, Kuya. 🥺"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Ivan brought the water.\nKnocked on Room 103.\nHanded it over."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '💚',
        text: "Thank you, Kuya Ivan.\n*both go back to studying*\n*separately. quietly.*"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Small favor.\nBig feeling.\nThis was their language."
      },
    ],
    reward: "💧 ACHIEVEMENT: \"WATER PROVIDER\"\nTHIS IS HOW IVAN LOVES.\nACTIONS > WORDS.",
  },
  {
    id: 4, icon: '🍔', name: 'CH.4: THE\nMINUTE BURGER DATE',
    color: 'var(--orange)',
    sceneLabel: '📍 SMALL STORE NEAR DBA — AFTERNOON',
    sceneBg: 'store',
    dialogues: [
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "First date(?).\nNot a fancy restaurant —\na small open store nearby."
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Plastic chairs. Open air.\nSmall menu. Just a stall.\nPerfect."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😅',
        text: "*internal panic*\nOkay. Just be normal.\nDon't be weird, Ivan."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '😄',
        text: "*already talking freely*\nOge so then he said —\nHAHAHA can you imagine?!"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😄',
        text: "Wait wait HAHAHA.\nBakit siya ganun?!\n*both laughing*"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "No awkward silences.\nNo nervous pauses.\nJust two people talking\nlike they'd known each other forever."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '🥵',
        text: "It is so HOT in here.\nLike actually. 🥵\nShould we just take it to go?"
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '😂',
        text: "YES IT IS SO HOT HAHA.\nLet's just grab the food\nand go back to DBA! 😂"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "They got their orders.\nWalked back to D' Blue Arc.\nAte in their own rooms.\nAnd smiled the whole way."
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Not perfect.\nNot fancy.\nJust them.\nAnd that was enough."
      },
    ],
    reward: "🍔 TITLE: \"THE GREAT STORE ESCAPE\"\n+999 COMFORT POINTS\nFIRST DATE: LEGENDARY",
  },
  {
    id: 5, icon: '⚔️', name: 'BOSS: THE\nDATE QUIZ',
    color: 'var(--red)', isBoss: true,
    bossSprite: '🌡️', bossName: 'THE HEAT MONSTER',
    question: "What happened during\ntheir first date at\nthe small store?",
    choices: [
      { text: 'A) They stayed and finished\ntheir food there', correct: false, roast: 'Too hot for that! 😂\nThey escaped!' },
      { text: 'B) It was too hot so they\ntook their food home 🍔', correct: true, sweet: 'CORRECT! The iconic\nhot store escape! 🏃💨' },
      { text: 'C) They ordered pasta', correct: false, roast: 'Lara loves pasta but\nnot on this date! 🍝' },
      { text: 'D) Kenneth was there too', correct: false, roast: 'Just the two of them!\nKenneth stayed behind! 😂' },
    ],
  },
  {
    id: 5.1, icon: '💬', name: 'CH.5: THE\nCOURTSHIP CHAT',
    color: 'var(--blue)',
    sceneLabel: '📍 FACEBOOK MESSENGER — LATE NIGHT',
    sceneBg: 'phone',
    dialogues: [
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "After the date, the walks,\nthe late night conversations —\nIvan knew he had to ask."
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Not in person.\nThrough a message.\nHonest. Terrified. Direct."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😰',
        text: "*types. deletes. types again.*\n*stares at the send button*\n*heart pounding*"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '💚',
        text: "Lara... is it okay\nif I court you?"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "He sent it.\nAnd then he waited.\nEvery second felt like forever."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '🥺',
        text: "*typing...*\n*typing...*\n..."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '💚',
        text: "Yes. 💚"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😭',
        text: "[the single greatest\none-word message\nhe has ever received in his life]"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "One word.\nOne answer.\nAnd everything changed."
      },
    ],
    reward: "💬 MILESTONE UNLOCKED:\n\"YES\" — THE BEST MESSAGE EVER\nCOURTSHIP: OFFICIALLY STARTED",
  },
  {
    id: 5.2, icon: '💒', name: 'CH.6: OFFICIAL\nUNDER THE BRIDGE',
    color: 'var(--yellow)',
    sceneLabel: '📍 KAABCAN HIGHWAY BRIDGE — MARCH 5, AFTERNOON',
    sceneBg: 'street',
    dialogues: [
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "One month after the\ncourtship message.\nMarch 5. Afternoon."
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "They were out walking again.\nKaabcan Highway.\nUnder a bridge.\nJust the two of them."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😊',
        text: "*walking side by side*\n*completely unaware\nwhat she is about to say*"
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '😊',
        text: "Ivan..."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😊',
        text: "Yeah?"
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '💚',
        text: "We\'re official now. 💚"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😭',
        text: "*the happiest moment\nof his entire life*\n...Really? 😭💚"
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '💚',
        text: "Really. 💚"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Under a bridge.\nOn a highway.\nMarch 5, 2023.\nThe most perfect place\nin the whole world."
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "That is why March 5\nwill always mean everything.\nNot just a date.\nTHE date."
      },
    ],
    reward: "💒 ACHIEVEMENT: OFFICIALLY OFFICIAL!\nLOCATION: KAABCAN BRIDGE\nDATE: MARCH 5, 2023 — FOREVER 💚",
  },
  {
    id: 6, icon: '🌙', name: 'CH.7: NIGHT\nWALKS ERA',
    color: 'var(--blue)',
    sceneLabel: '📍 STREETS NEAR DBA — EVERY NIGHT',
    sceneBg: 'street',
    dialogues: [
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "After the date,\nevery night became theirs.\nNo destination. Just walking."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '🌙',
        text: "Hey Dada. Where do you want to go\nfor a walk today?",
        choices: [
          { text: "To get snacks", nextText: "Yes, snacks! 🍫\n*both start walking to buy food*" },
          { text: "Just walk around", nextText: "Nowhere in particular.\nJust walk and talk. 💚\n*both start walking*" }
        ]
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '✨',
        text: "(User choice replaces this)"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "They walked every night.\nPast DBA. Through the streets.\nUnder the moon.\nJust them and the world."
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "These walks were where\nthey became themselves\naround each other.\nNo pretending. Just real."
      },
    ],
    reward: "🌙 +∞ PEACEFUL MOMENTS\nTITLE: \"NIGHT WALK VETERANS\"\nUNLOCKED: CHAPTER 6",
  },
  {
    id: 7, icon: '😅', name: 'CH.8: BOARDING\nHOUSE STEALTH',
    color: 'var(--yellow)',
    sceneLabel: "📍 D' BLUE ARC — ROOM 103 — LATE NIGHT",
    sceneBg: 'room',
    dialogues: [
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Room 103. Lara's room.\nThe new hangout spot.\nMovie nights. Conversations."
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Room 105 was literally\none room away.\nBut getting BACK to 105...\nthat was the challenge."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '😭',
        text: "Noooo why does it end like that!\nI can't take this episode! 😭"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😬',
        text: "Hey Dada... it's 11pm.\nI should head back.\n*doesn't move*"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '👀',
        text: "*opens door slowly*\n*peeks left*\n*peeks right*\n*sees the landlord's door closed*"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😰',
        text: "*still doesn't leave*\n*peeks again*\n..."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '😂',
        text: "Kuya Ivan.\nTakot ka ba sa\npanginoong bahay? HAHA 😂"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😤',
        text: "HINDI. Strategic lang.\nMay... tamang timing.\nHintayin ko lang. 😤"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "20 minutes later...\nIvan finally made it to Room 105.\nMC, Rodel, Wayne were waiting."
      },
      {
        speaker: 'BARKADA 👥', color: 'var(--purple)', side: 'barkada', npc: 'barkada', emotion: '😂',
        text: "KUYA. YOU MADE IT BACK?\nDID THEY KICK YOU OUT?\nHAHAHA 😂😂😂"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😑',
        text: "All of you, sleep.\n...*smiles*"
      },
    ],
    reward: "🚪 ACHIEVEMENT: \"STEALTH RATING 2/10\"\nROOM 103 × 105: FOREVER LINKED\nLANDLORD RADAR: EQUIPPED",
  },
  {
    id: 8, icon: '💉', name: 'CH.9: THE\nINJECTION ARC',
    color: 'var(--green)',
    sceneLabel: '📍 CLINIC PRACTICE ROOM — STUDY SESSION',
    sceneBg: 'clinic',
    dialogues: [
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Lara: nursing student back then.\nNeeds to practice injections.\nIvan: already nervous."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '🩺',
        text: "Ivan... pwede ka ba\nmaging practice partner ko?\nFor injection? 🙂"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😐',
        text: "...On me?\nOn my arm?"
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '💉',
        text: "Oo. *holds up needle*\n*hands are visibly shaking*\nReady ka na? 🙂"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '💀',
        text: "[INTERNAL SCREAMING]\n[ABORT MISSION]\n[externally]: Sure. I'm ready. 😐"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "The needle entered the arm.\nThe liquid followed slowly.\nThe pain was very, very real."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😐',
        text: "[internal: AAAAAAAAH]\n[face]: 😐\n[voice]: Fine. It's fine. I'm fine."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '💕',
        text: "Okay ka? Maisog gyud ka!\n*already preparing*\nUsa pa."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😱',
        text: "...USA PA?!"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Ivan survived.\nBoth of them.\nLara passed her practice.\nPower couple energy: confirmed."
      },
    ],
    reward: "💉 TITLE: \"BRAVEST PATIENT IN DBA\"\nBONUS LOOT: +9999 LOVE POINTS\nARCHIVED: FORMER NURSE ARC",
  },
  {
    id: 9, icon: '⚔️', name: 'BOSS: THE\nNURSE EXAM',
    color: 'var(--red)', isBoss: true,
    bossSprite: '🩺', bossName: 'THE EXAM MONSTER',
    question: "Where did Lara practice\nthe injection on Ivan?",
    choices: [
      { text: 'A) His hand', correct: false, roast: 'Close but not the arm!\nOuch either way tho 😂' },
      { text: 'B) His arm 💉', correct: true, sweet: 'YES! The brave arm!\nIvan said yes! 💪💚' },
      { text: 'C) She practiced on herself', correct: false, roast: 'Ivan was the brave\nvolunteer! 😤' },
      { text: 'D) She didn\'t actually do it', correct: false, roast: 'She absolutely did it!\nAnd it hurt! 💀' },
    ],
  },
  {
    id: 9.5, icon: '🍝', name: 'CH.10: THE\nPASTA QUEST',
    color: 'var(--orange)',
    sceneLabel: '📍 LOVEBITES RESTAURANT — DINNER',
    sceneBg: 'store',
    dialogues: [
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Lara is a certified foodie.\nAnd there is one thing she loves\nmore than anything: Pasta."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '🤔',
        text: "Dada, saan tayo kakain\nngayon? Gutom ka na ba?"
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '🍝',
        text: "Gusto ko ng... PASTA. 🍝\nKahit ano basta pasta!"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😅',
        text: "Pasta na naman?!\nSige sige. Hanap tayo."
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "They searched around.\nUntil they decided to go to\nLovebites Restaurant."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '✨',
        text: "*eating happily*\nOmg ang sarap! 🥺\nThank you Mommy!"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '💚',
        text: "Basta busog ang Dada,\nmasaya na rin ako. 💚"
      },
    ],
    reward: "🍝 ITEM UNLOCKED: \"LOVEBITES PASTA\"\nACHIEVEMENT: FED THE FOODIE\nDADA'S HAPPINESS +999"
  },
  {
    id: 10, icon: '🌊', name: 'CH.11: THE\nCONFLICT ARC',
    color: 'var(--yellow)',
    sceneLabel: '📍 SOMEWHERE BETWEEN ROOM 103 & 105',
    sceneBg: 'conflict',
    dialogues: [
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Every great love story\nhas a conflict.\nThis is theirs."
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Lara is vocal.\nShe expresses love through words.\nShe needs to hear it back."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '😔',
        text: "Ivan... minsan akala ko\nba di mo ko mahal.\nHindi ko na feel"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😶',
        text: "..."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😶',
        text: "Mahal kita.\nDi ko lang... alam\npaano sabihinin, ano gawin."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '😢',
        text: "Yun na nga e.\nKailangan ko marinig.\nKailangan ko malaman."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '💚',
        text: "You know when I do things\nfor you? maybe it's not big but\nThat was me saying I love you."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '💚',
        text: "Every time I stayed.\nEvery walk. Every moment\nI gave you my time —\nthat was all love."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '💚',
        text: "I don't know how to say it.\nBut Lara —\nI love you. That is real."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '🥺',
        text: "...Okay.\nI understand now.\nBut say it sometimes, okay?\nEven a little. 🥺"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Two different love languages.\nOne real love.\nThey're still learning.\nAnd that's okay."
      },
    ],
    reward: "🌊 CONFLICT ARC: CLEARED\nTITLE: \"STILL LEARNING TOGETHER\"\nUNLOCKED: TRUE UNDERSTANDING",
  },
  {
    id: 11, icon: '🎨', name: 'CH.12: THE\nUGLY DRAWING',
    color: 'var(--pink)',
    sceneLabel: '📍 THEIR HANGOUT SPOT — TABLET SESSION',
    sceneBg: 'art',
    dialogues: [
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "They saw a trend:\ndigitally sketch each other.\nLara had her tablet ready."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '✨',
        text: "Beh! Subukan ta ni!\nIguhit ta ang isa't isa!\nSa tablet ko! 🎨"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😰',
        text: "Lara. Dada.\nHindi ako marunong\nmag-drawing. Like at all."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '😄',
        text: "Ayaw! Sige lang!\nSubukan! Wala may\npatakaran dito! 😄"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Ivan opened the tablet.\nPicked up the stylus.\nAnd drew."
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "It was... creative.\nVery creative.\nIn a completely unique way."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😭',
        text: "Lara. I am so sorry.\nThis is terrible.\nThis is really bad. 😭"
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '🥺',
        text: "*looks at it*\n...\nIvan."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '💚',
        text: "I love it.\nLet's make it our\nIG profile picture. 🥺💚"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😳',
        text: "...Seryoso ka?!"
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '💚',
        text: "Dead seryoso.\n*sets it as DP*\nPerfect. 💚"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "The ugliest drawing\nbecame the most beautiful thing.\nBecause she loved it.\nBecause she loved him."
      },
    ],
    reward: "🎨 RARE ARTIFACT: \"THE UGLY DRAWING\"\nIG DP STATUS: LEGENDARY 💚\nWON WITH: LOVE, NOT SKILL",
  },
  {
    id: 12, icon: '⛰️', name: 'CH.13: THE\nHOMETOWN QUEST',
    color: 'var(--teal)',
    sceneLabel: '📍 MIDSAYAP, COTABATO — IVAN\'S HOMETOWN',
    sceneBg: 'mountain',
    dialogues: [
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Ivan's hometown.\nMidsayap, Cotabato.\nHe invited her to see it all."
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '😌',
        text: "Dada. Eto yung lugar\nkung saan ako lumaki.\nGusto kitang makita dito."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '✨',
        text: "Show me everything!\nWhere do we go first?"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "They strolled the town.\nEvery street. Every corner.\nLara explored everything."
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Then — the mountain view.\nThey stood there together.\nLooking out at everything."
      },
      {
        speaker: 'LARA 💬', color: 'var(--red)', side: 'lara', npc: 'none', emotion: '😭',
        text: "Ivan... wow.\nIt's so beautiful here. 😭✨\nThis is where you grew up?"
      },
      {
        speaker: 'IVAN 🧑‍💻', color: 'var(--green)', side: 'ivan', npc: 'none', emotion: '💚',
        text: "Yeah...\n*quietly looks at her*\n...it really is. 💚"
      },
      {
        speaker: 'NARRATOR', color: 'var(--dim)', side: 'none', npc: 'none',
        text: "Showing someone your hometown\nmeans: this is where I came from.\nI trust you with it.\nShe showed up.\nThat's everything."
      },
    ],
    reward: "⛰️ TITLE: \"HOMETOWN HEROES\"\nMIDSAYAP QUEST: COMPLETE\nFINAL BOSS: UNLOCKED!",
  },
  {
    id: 13, icon: '⚔️', name: 'FINAL BOSS:\nTHE DADA QUIZ',
    color: 'var(--red)', isBoss: true, isFinalBoss: true,
    bossSprite: '💀', bossName: 'THE FINAL MEMORY BOSS',
    question: "What are Ivan & Lara's\nspecial nicknames and\nhow did they start?",
    choices: [
      { text: 'A) Random nicknames\nthey just picked', correct: false, roast: 'There\'s a whole origin story!\nPay attention, Dada! 😂' },
      { text: 'B) Ivan is "Mommy" because\nhe accidentally acted\nlike a caring mom 💚', correct: true, sweet: 'PERFECT SCORE!! 💚👑\nThe most iconic origin story!\nYou remember everything!' },
      { text: 'C) Lara called him\n"Mommy" as a joke', correct: false, roast: 'It wasn\'t a joke —\nit was REAL Mommy energy! 😂' },
      { text: 'D) They both chose\neach other\'s nickname', correct: false, roast: 'Ivan earned it naturally!\nHe didn\'t choose it! 😄' },
    ],
  },
];
