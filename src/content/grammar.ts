import type { GrammarTopic } from "@/lib/types";

export const grammarTopics: GrammarTopic[] = [
  {
    id: "a1-articles",
    level: "A1",
    title: { ru: "Род и артикли (der/die/das)", en: "Gender & articles (der/die/das)" },
    summary: {
      ru: "Каждое существительное имеет род: мужской (der), женский (die), средний (das).",
      en: "Every noun has a gender: masculine (der), feminine (die), neuter (das).",
    },
    explanation: {
      ru: "В немецком у каждого существительного есть **род**, и артикль зависит от него. Определённый артикль: `der` (м.р.), `die` (ж.р.), `das` (ср.р.). Во множественном числе всегда `die`. Неопределённый артикль: `ein` (м./ср.р.), `eine` (ж.р.). Род нужно учить **вместе со словом** — он не всегда логичен. Есть подсказки: слова на `-ung`, `-heit`, `-keit`, `-schaft` — женского рода; на `-chen`, `-lein` — среднего.",
      en: "In German every noun has a **gender**, and the article depends on it. Definite article: `der` (masc.), `die` (fem.), `das` (neut.). In the plural it is always `die`. Indefinite article: `ein` (masc./neut.), `eine` (fem.). Always learn the gender **together with the word** — it isn't always logical. Some hints: nouns ending in `-ung`, `-heit`, `-keit`, `-schaft` are feminine; `-chen`, `-lein` are neuter.",
    },
    tables: [
      {
        caption: { ru: "Артикли в именительном падеже (Nominativ)", en: "Articles in the nominative (Nominativ)" },
        columns: ["", "der (m)", "die (f)", "das (n)", "die (pl)"],
        rows: [
          ["bestimmt", "der Mann", "die Frau", "das Kind", "die Kinder"],
          ["unbestimmt", "ein Mann", "eine Frau", "ein Kind", "— Kinder"],
        ],
        highlight: { "0,1": "key", "0,2": "key", "0,3": "key" },
      },
    ],
    examples: [
      { de: "Der Tisch ist groß.", translation: { ru: "Стол большой.", en: "The table is big." } },
      { de: "Die Lampe ist neu.", translation: { ru: "Лампа новая.", en: "The lamp is new." } },
      { de: "Das Buch ist interessant.", translation: { ru: "Книга интересная.", en: "The book is interesting." } },
    ],
    tags: ["nouns", "articles"],
  },
  {
    id: "a1-present-regular",
    level: "A1",
    title: { ru: "Настоящее время: правильные глаголы", en: "Present tense: regular verbs" },
    summary: {
      ru: "Берём основу глагола и добавляем личные окончания: -e, -st, -t, -en, -t, -en.",
      en: "Take the verb stem and add personal endings: -e, -st, -t, -en, -t, -en.",
    },
    explanation: {
      ru: "Большинство глаголов спрягаются по правилу. Отбросьте `-en` от инфинитива (`machen` → основа `mach-`) и добавьте окончания. Немецкое настоящее время переводит и «делаю», и «делаю прямо сейчас» — отдельного длительного времени нет.",
      en: "Most verbs follow a regular pattern. Drop `-en` from the infinitive (`machen` → stem `mach-`) and add the endings. German present tense covers both \"I do\" and \"I am doing\" — there is no separate continuous tense.",
    },
    tables: [
      {
        caption: { ru: "machen (делать) — Präsens", en: "machen (to do/make) — present" },
        columns: ["Person", "Form", "Endung"],
        rows: [
          ["ich", "mache", "-e"],
          ["du", "machst", "-st"],
          ["er/sie/es", "macht", "-t"],
          ["wir", "machen", "-en"],
          ["ihr", "macht", "-t"],
          ["sie/Sie", "machen", "-en"],
        ],
        highlight: { "1,1": "key", "2,1": "key" },
      },
    ],
    examples: [
      { de: "Wohnst du auch in Berlin?", translation: { ru: "Ты тоже живёшь в Берлине?", en: "Do you live in Berlin too?" } },
      { de: "Er kommt aus Italien.", translation: { ru: "Он из Италии.", en: "He comes from Italy." } },
      { de: "Sie macht gerade eine Pause.", translation: { ru: "Она сейчас делает перерыв.", en: "She is taking a break right now." } },
      { de: "Wir lernen jeden Tag Deutsch.", translation: { ru: "Мы учим немецкий каждый день.", en: "We learn German every day." } },
      { de: "Was macht ihr am Wochenende?", translation: { ru: "Что вы делаете на выходных?", en: "What are you (pl.) doing this weekend?" } },
      { de: "Woher kommen Sie?", translation: { ru: "Откуда Вы?", en: "Where do you (formal) come from?" } },
    ],
    tags: ["verbs"],
  },
  {
    id: "a1-sein-haben",
    level: "A1",
    title: { ru: "sein и haben (быть / иметь)", en: "sein & haben (to be / to have)" },
    summary: {
      ru: "Два самых важных глагола. Они неправильные — выучите их наизусть.",
      en: "The two most important verbs. They are irregular — memorize them.",
    },
    explanation: {
      ru: "`sein` (быть) и `haben` (иметь) встречаются повсюду и нужны позже для прошедшего времени (Perfekt). Их формы не подчиняются правилу, поэтому просто запомните таблицу.",
      en: "`sein` (to be) and `haben` (to have) appear everywhere and are needed later for the past tense (Perfekt). Their forms don't follow the rule, so just memorize the table.",
    },
    tables: [
      {
        caption: { ru: "sein и haben — Präsens", en: "sein & haben — present" },
        columns: ["Person", "sein", "haben"],
        rows: [
          ["ich", "bin", "habe"],
          ["du", "bist", "hast"],
          ["er/sie/es", "ist", "hat"],
          ["wir", "sind", "haben"],
          ["ihr", "seid", "habt"],
          ["sie/Sie", "sind", "haben"],
        ],
        highlight: { "0,1": "irregular", "1,1": "irregular", "2,1": "irregular", "0,2": "irregular", "1,2": "irregular", "2,2": "irregular" },
      },
    ],
    examples: [
      { de: "Ich bin müde.", translation: { ru: "Я устал.", en: "I am tired." } },
      { de: "Sie ist Lehrerin.", translation: { ru: "Она учительница.", en: "She is a teacher." } },
      { de: "Wir haben Zeit.", translation: { ru: "У нас есть время.", en: "We have time." } },
    ],
    tags: ["verbs", "irregular"],
  },

  {
    id: "a1-pronouns",
    level: "A1",
    title: { ru: "Личные местоимения", en: "Personal pronouns" },
    summary: {
      ru: "ich, du, er/sie/es, wir, ihr, sie/Sie — кто выполняет действие.",
      en: "ich, du, er/sie/es, wir, ihr, sie/Sie — who does the action.",
    },
    explanation: {
      ru: "Местоимения заменяют существительное в роли подлежащего. Важно различать **du** (ты, неформально) и **Sie** (Вы, вежливо, всегда с большой буквы). `sie` = «она» или «они» — понятно по форме глагола.",
      en: "Pronouns replace the subject noun. Distinguish **du** (informal “you”) from **Sie** (polite “you”, always capitalized). `sie` means “she” or “they” — the verb form tells you which.",
    },
    tables: [
      {
        caption: { ru: "Личные местоимения (Nominativ)", en: "Personal pronouns (Nominativ)" },
        columns: ["Person", "Singular", "Plural"],
        rows: [
          ["1.", "ich", "wir"],
          ["2.", "du", "ihr"],
          ["3.", "er / sie / es", "sie"],
          ["höflich", "Sie", "Sie"],
        ],
      },
    ],
    examples: [
      { de: "Woher kommst du?", translation: { ru: "Откуда ты?", en: "Where are you from?" } },
      { de: "Sind Sie Herr Klein?", translation: { ru: "Вы господин Кляйн?", en: "Are you Mr Klein?" } },
      { de: "Wir lernen Deutsch.", translation: { ru: "Мы учим немецкий.", en: "We learn German." } },
    ],
    tags: ["pronouns"],
  },
  {
    id: "a1-stem-change",
    level: "A1",
    title: { ru: "Глаголы с изменением корня", en: "Stem-changing verbs" },
    summary: {
      ru: "У некоторых глаголов в формах du и er/sie/es меняется гласная в корне.",
      en: "Some verbs change their stem vowel in the du and er/sie/es forms.",
    },
    explanation: {
      ru: "Меняется только в **2-м и 3-м лице ед. ч.** (du, er/sie/es). Типы: `e → i` (sprechen → du sprichst), `e → ie` (sehen → du siehst), `a → ä` (fahren → du fährst). Остальные формы — по правилу.",
      en: "The change happens only in the **2nd and 3rd person singular** (du, er/sie/es). Patterns: `e → i` (sprechen → du sprichst), `e → ie` (sehen → du siehst), `a → ä` (fahren → du fährst). All other forms are regular.",
    },
    tables: [
      {
        caption: { ru: "Изменение корня в Präsens", en: "Stem change in the present" },
        columns: ["Infinitiv", "ich", "du", "er/sie/es", "Typ"],
        rows: [
          ["sprechen", "spreche", "sprichst", "spricht", "e → i"],
          ["essen", "esse", "isst", "isst", "e → i"],
          ["sehen", "sehe", "siehst", "sieht", "e → ie"],
          ["lesen", "lese", "liest", "liest", "e → ie"],
          ["fahren", "fahre", "fährst", "fährt", "a → ä"],
          ["schlafen", "schlafe", "schläfst", "schläft", "a → ä"],
        ],
        highlight: { "0,2": "key", "0,3": "key", "2,2": "key", "2,3": "key", "4,2": "key", "4,3": "key" },
      },
    ],
    examples: [
      { de: "Sprichst du Deutsch?", translation: { ru: "Ты говоришь по-немецки?", en: "Do you speak German?" } },
      { de: "Er fährt nach Berlin.", translation: { ru: "Он едет в Берлин.", en: "He drives to Berlin." } },
      { de: "Sie liest ein Buch.", translation: { ru: "Она читает книгу.", en: "She is reading a book." } },
    ],
    tags: ["verbs", "irregular"],
  },
  {
    id: "a1-modal-verbs",
    level: "A1",
    title: { ru: "Модальные глаголы", en: "Modal verbs" },
    summary: {
      ru: "können, müssen, wollen, möchten, dürfen, sollen — выражают возможность, необходимость, желание.",
      en: "können, müssen, wollen, möchten, dürfen, sollen — express ability, necessity, wish.",
    },
    explanation: {
      ru: "Модальный глагол стоит на **2-м месте**, а основной глагол — в **инфинитиве в конце** предложения. В ед. ч. формы `ich` и `er/sie/es` одинаковы и без окончания.",
      en: "The modal verb is in **position 2**, and the main verb goes to the **end as an infinitive**. In the singular the `ich` and `er/sie/es` forms are identical and take no ending.",
    },
    tables: [
      {
        caption: { ru: "können — спряжение", en: "können — conjugation" },
        columns: ["Person", "können", "müssen", "möchten"],
        rows: [
          ["ich", "kann", "muss", "möchte"],
          ["du", "kannst", "musst", "möchtest"],
          ["er/sie/es", "kann", "muss", "möchte"],
          ["wir", "können", "müssen", "möchten"],
          ["ihr", "könnt", "müsst", "möchtet"],
          ["sie/Sie", "können", "müssen", "möchten"],
        ],
        highlight: { "0,1": "key", "2,1": "key" },
      },
    ],
    examples: [
      { de: "Ich kann gut schwimmen.", translation: { ru: "Я хорошо умею плавать.", en: "I can swim well." } },
      { de: "Du musst jetzt gehen.", translation: { ru: "Тебе нужно сейчас идти.", en: "You have to go now." } },
      { de: "Wir möchten einen Kaffee trinken.", translation: { ru: "Мы хотели бы выпить кофе.", en: "We would like to drink a coffee." } },
    ],
    tags: ["verbs", "modal"],
  },
  {
    id: "a1-akkusativ",
    level: "A1",
    title: { ru: "Винительный падеж (Akkusativ)", en: "Accusative case (Akkusativ)" },
    summary: {
      ru: "Прямое дополнение. Меняется только мужской род: der → den, ein → einen.",
      en: "The direct object. Only the masculine changes: der → den, ein → einen.",
    },
    explanation: {
      ru: "Akkusativ — это **прямое дополнение** (кого? что?). Запомните главное правило: меняется **только мужской род**. Женский, средний и множественное остаются как в Nominativ. `kein` и притяжательные (mein…) склоняются так же, как `ein`.",
      en: "The accusative is the **direct object** (whom? what?). The key rule: **only the masculine changes**. Feminine, neuter and plural stay the same as in the nominative. `kein` and possessives (mein…) decline like `ein`.",
    },
    tables: [
      {
        caption: { ru: "Артикли: Nominativ → Akkusativ", en: "Articles: Nominativ → Akkusativ" },
        columns: ["Genus", "Nominativ", "Akkusativ"],
        rows: [
          ["m", "der / ein Mann", "den / einen Mann"],
          ["f", "die / eine Frau", "die / eine Frau"],
          ["n", "das / ein Kind", "das / ein Kind"],
          ["pl", "die Kinder", "die Kinder"],
        ],
        highlight: { "0,2": "key" },
      },
    ],
    examples: [
      { de: "Ich habe einen Hund.", translation: { ru: "У меня есть собака.", en: "I have a dog." } },
      { de: "Ich sehe den Mann.", translation: { ru: "Я вижу мужчину.", en: "I see the man." } },
      { de: "Wir kaufen eine Lampe.", translation: { ru: "Мы покупаем лампу.", en: "We buy a lamp." } },
    ],
    tags: ["cases", "akkusativ"],
  },
  {
    id: "a1-dativ",
    level: "A1",
    title: { ru: "Дательный падеж (Dativ) — основы", en: "Dative case (Dativ) — basics" },
    summary: {
      ru: "На A1 — в основном после предлогов (mit, bei, zu…) и местоимения mir/dir.",
      en: "At A1 mainly after prepositions (mit, bei, zu…) and the pronouns mir/dir.",
    },
    explanation: {
      ru: "Полный Dativ изучается на A2, но на A1 он уже нужен в трёх случаях: после **предлогов** `aus, bei, mit, nach, seit, von, zu` (всегда Dativ); с местоимениями **mir, dir** («Wie geht es dir?»); с глаголами `gefallen`, `helfen`, `danken` («Das gefällt mir»). Артикли: der→dem, die→der, das→dem, die(мн.)→den (+n).",
      en: "The full dative is an A2 topic, but at A1 you already need it in three cases: after the **prepositions** `aus, bei, mit, nach, seit, von, zu` (always dative); with the pronouns **mir, dir** (“Wie geht es dir?”); and with the verbs `gefallen`, `helfen`, `danken` (“Das gefällt mir”). Articles: der→dem, die→der, das→dem, die(pl)→den (+n).",
    },
    tables: [
      {
        caption: { ru: "Артикли и местоимения в Dativ", en: "Dative articles & pronouns" },
        columns: ["", "Artikel (Dativ)", "Pronomen (Dativ)"],
        rows: [
          ["m / n", "dem / einem", "ihm"],
          ["f", "der / einer", "ihr"],
          ["pl", "den …(n)", "ihnen"],
          ["ich / du", "—", "mir / dir"],
        ],
      },
    ],
    examples: [
      { de: "Ich fahre mit dem Bus.", translation: { ru: "Я еду на автобусе.", en: "I go by bus." } },
      { de: "Wie geht es dir?", translation: { ru: "Как у тебя дела?", en: "How are you?" } },
      { de: "Das Buch gefällt mir.", translation: { ru: "Книга мне нравится.", en: "I like the book." } },
    ],
    tags: ["cases", "dativ"],
  },
  {
    id: "a1-possessives",
    level: "A1",
    title: { ru: "Притяжательные артикли", en: "Possessive articles" },
    summary: {
      ru: "mein, dein, sein, ihr, unser, euer, Ihr — чьё это.",
      en: "mein, dein, sein, ihr, unser, euer, Ihr — whose it is.",
    },
    explanation: {
      ru: "Притяжательные артикли показывают принадлежность и склоняются как `ein`/`kein`: `mein` (м./ср. род), `meine` (ж. род и мн. ч.). В Akkusativ мужского рода — `meinen`. Осторожно: `sein` = «его», `ihr` = «её/их».",
      en: "Possessive articles show ownership and decline like `ein`/`kein`: `mein` (masc./neut.), `meine` (fem. and plural). In the masculine accusative it is `meinen`. Note: `sein` = “his”, `ihr` = “her/their”.",
    },
    tables: [
      {
        caption: { ru: "Местоимение → притяжательный артикль", en: "Pronoun → possessive" },
        columns: ["Pronomen", "Possessiv", "Beispiel (m)"],
        rows: [
          ["ich", "mein", "mein Bruder"],
          ["du", "dein", "dein Vater"],
          ["er / es", "sein", "sein Sohn"],
          ["sie", "ihr", "ihr Mann"],
          ["wir", "unser", "unser Kind"],
          ["ihr", "euer", "euer Haus"],
          ["sie / Sie", "ihr / Ihr", "ihr / Ihr Auto"],
        ],
      },
    ],
    examples: [
      { de: "Das ist mein Bruder.", translation: { ru: "Это мой брат.", en: "This is my brother." } },
      { de: "Ich liebe meine Familie.", translation: { ru: "Я люблю свою семью.", en: "I love my family." } },
      { de: "Wo ist dein Auto?", translation: { ru: "Где твоя машина?", en: "Where is your car?" } },
    ],
    tags: ["articles", "possessive"],
  },
  {
    id: "a1-negation",
    level: "A1",
    title: { ru: "Отрицание: nicht и kein", en: "Negation: nicht vs kein" },
    summary: {
      ru: "kein отрицает существительные с ein/без артикля; nicht — всё остальное.",
      en: "kein negates nouns with ein/no article; nicht negates everything else.",
    },
    explanation: {
      ru: "Используйте **kein**, когда отрицаете существительное с `ein` или без артикля (`Ich habe ein Auto → Ich habe kein Auto`). Используйте **nicht** для глаголов, прилагательных и существительных с определённым/притяжательным артиклем (`Das ist nicht mein Buch`). `kein` склоняется как `ein`.",
      en: "Use **kein** to negate a noun that has `ein` or no article (`Ich habe ein Auto → Ich habe kein Auto`). Use **nicht** for verbs, adjectives, and nouns with a definite/possessive article (`Das ist nicht mein Buch`). `kein` declines like `ein`.",
    },
    tables: [
      {
        caption: { ru: "kein или nicht?", en: "kein or nicht?" },
        columns: ["Positiv", "Negativ", "Wort"],
        rows: [
          ["Ich habe ein Auto.", "Ich habe kein Auto.", "kein"],
          ["Ich habe Zeit.", "Ich habe keine Zeit.", "kein"],
          ["Das ist mein Buch.", "Das ist nicht mein Buch.", "nicht"],
          ["Er kommt heute.", "Er kommt heute nicht.", "nicht"],
        ],
        highlight: { "0,2": "key", "2,2": "key" },
      },
    ],
    examples: [
      { de: "Ich habe keine Geschwister.", translation: { ru: "У меня нет братьев и сестёр.", en: "I have no siblings." } },
      { de: "Das Wetter ist nicht gut.", translation: { ru: "Погода нехорошая.", en: "The weather is not good." } },
      { de: "Er wohnt nicht hier.", translation: { ru: "Он здесь не живёт.", en: "He doesn't live here." } },
    ],
    tags: ["negation"],
  },
  {
    id: "a1-separable",
    level: "A1",
    title: { ru: "Глаголы с отделяемой приставкой", en: "Separable verbs" },
    summary: {
      ru: "Приставка отделяется и уходит в конец предложения: aufstehen → Ich stehe … auf.",
      en: "The prefix detaches and goes to the end: aufstehen → Ich stehe … auf.",
    },
    explanation: {
      ru: "У многих глаголов есть отделяемая приставка (`auf-`, `ein-`, `an-`, `aus-`, `mit-`, `ab-`, `zu-`). В простом предложении приставка **уходит в конец**: `aufstehen` → `Ich stehe um 7 Uhr auf`. Ударение всегда на приставке.",
      en: "Many verbs have a separable prefix (`auf-`, `ein-`, `an-`, `aus-`, `mit-`, `ab-`, `zu-`). In a main clause the prefix **moves to the end**: `aufstehen` → `Ich stehe um 7 Uhr auf`. The stress is always on the prefix.",
    },
    tables: [
      {
        caption: { ru: "Приставка в конце предложения", en: "Prefix at the end of the sentence" },
        columns: ["Infinitiv", "Satz"],
        rows: [
          ["aufstehen", "Ich stehe um 7 Uhr auf."],
          ["einkaufen", "Wir kaufen im Supermarkt ein."],
          ["anrufen", "Er ruft seine Mutter an."],
          ["ankommen", "Der Zug kommt um 8 Uhr an."],
        ],
        highlight: { "0,1": "key", "1,1": "key", "2,1": "key", "3,1": "key" },
      },
    ],
    examples: [
      { de: "Wann stehst du auf?", translation: { ru: "Когда ты встаёшь?", en: "When do you get up?" } },
      { de: "Ich kaufe heute ein.", translation: { ru: "Я сегодня делаю покупки.", en: "I'm shopping today." } },
      { de: "Rufst du mich an?", translation: { ru: "Ты мне позвонишь?", en: "Will you call me?" } },
    ],
    tags: ["verbs", "separable"],
  },
  {
    id: "a1-perfekt",
    level: "A1",
    title: { ru: "Прошедшее время (Perfekt)", en: "Perfect tense (Perfekt)" },
    summary: {
      ru: "haben/sein + Partizip II в конце. Так говорят о прошлом в речи.",
      en: "haben/sein + past participle at the end. The spoken way to talk about the past.",
    },
    explanation: {
      ru: "Perfekt = вспомогательный глагол **haben или sein** (на 2-м месте) + **Partizip II** (в конце). Большинство глаголов берут `haben`; глаголы движения и изменения состояния — `sein` (`gehen → ist gegangen`, `fahren → ist gefahren`). Partizip II: правильные `ge…t` (gemacht), сильные `ge…en` (gegessen).",
      en: "Perfekt = the auxiliary **haben or sein** (in position 2) + the **past participle** (at the end). Most verbs take `haben`; verbs of motion/change take `sein` (`gehen → ist gegangen`, `fahren → ist gefahren`). Participle: weak `ge…t` (gemacht), strong `ge…en` (gegessen).",
    },
    tables: [
      {
        caption: { ru: "Partizip II и вспомогательный глагол", en: "Participle & auxiliary" },
        columns: ["Infinitiv", "Hilfsverb", "Partizip II"],
        rows: [
          ["machen", "haben", "gemacht"],
          ["lernen", "haben", "gelernt"],
          ["essen", "haben", "gegessen"],
          ["gehen", "sein", "gegangen"],
          ["fahren", "sein", "gefahren"],
        ],
        highlight: { "3,1": "irregular", "4,1": "irregular" },
      },
    ],
    examples: [
      { de: "Ich habe Deutsch gelernt.", translation: { ru: "Я учил немецкий.", en: "I have learned German." } },
      { de: "Wir sind nach Berlin gefahren.", translation: { ru: "Мы поехали в Берлин.", en: "We went to Berlin." } },
      { de: "Was hast du gemacht?", translation: { ru: "Что ты делал?", en: "What did you do?" } },
    ],
    tags: ["verbs", "perfekt", "past"],
  },
  {
    id: "a1-wordorder",
    level: "A1",
    title: { ru: "Порядок слов и вопросы", en: "Word order & questions" },
    summary: {
      ru: "Глагол — на 2-м месте. Вопрос да/нет — глагол первый. W-вопрос — слово + глагол.",
      en: "Verb in position 2. Yes/no question — verb first. W-question — word + verb.",
    },
    explanation: {
      ru: "В утверждении спрягаемый глагол всегда на **2-м месте** (`Ich wohne in Berlin` / `Heute wohne ich in Berlin`). В вопросе **да/нет** глагол идёт **первым** (`Wohnst du in Berlin?`). В **W-вопросе** сначала вопросительное слово, затем глагол (`Wo wohnst du?`).",
      en: "In a statement the conjugated verb is always in **position 2** (`Ich wohne in Berlin` / `Heute wohne ich in Berlin`). In a **yes/no** question the verb comes **first** (`Wohnst du in Berlin?`). In a **W-question** the question word comes first, then the verb (`Wo wohnst du?`).",
    },
    tables: [
      {
        caption: { ru: "Три типа предложений", en: "Three sentence types" },
        columns: ["Typ", "Position 1", "Position 2", "…"],
        rows: [
          ["Aussage", "Ich", "wohne", "in Berlin."],
          ["Ja/Nein-Frage", "Wohnst", "du", "in Berlin?"],
          ["W-Frage", "Wo", "wohnst", "du?"],
        ],
        highlight: { "0,2": "key", "1,1": "key", "2,2": "key" },
      },
    ],
    examples: [
      { de: "Was machst du heute?", translation: { ru: "Что ты сегодня делаешь?", en: "What are you doing today?" } },
      { de: "Kommst du mit?", translation: { ru: "Ты идёшь с нами?", en: "Are you coming along?" } },
      { de: "Morgen fahre ich nach Köln.", translation: { ru: "Завтра я еду в Кёльн.", en: "Tomorrow I drive to Cologne." } },
    ],
    tags: ["syntax", "questions"],
  },
  {
    id: "a1-conjunctions",
    level: "A1",
    title: { ru: "Союзы: und, oder, aber, denn", en: "Conjunctions: und, oder, aber, denn" },
    summary: {
      ru: "Сочинительные союзы соединяют части и не меняют порядок слов.",
      en: "Coordinating conjunctions join clauses and don't change word order.",
    },
    explanation: {
      ru: "Союзы `und` (и), `oder` (или), `aber` (но), `denn` (потому что) соединяют два предложения и **не влияют на порядок слов** — глагол остаётся на 2-м месте после союза. Они стоят как бы «на нулевой позиции».",
      en: "The conjunctions `und` (and), `oder` (or), `aber` (but), `denn` (because) join two clauses and **do not change word order** — the verb stays in position 2 after them. They sit in “position zero”.",
    },
    tables: [
      {
        caption: { ru: "Значение союзов", en: "Meaning of the conjunctions" },
        columns: ["Konjunktion", "Bedeutung", "Beispiel"],
        rows: [
          ["und", "и", "Ich lerne und ich arbeite."],
          ["oder", "или", "Tee oder Kaffee?"],
          ["aber", "но", "Es ist klein, aber schön."],
          ["denn", "потому что", "Ich bleibe, denn ich bin krank."],
        ],
      },
    ],
    examples: [
      { de: "Ich komme aus Kyjiw und wohne in Berlin.", translation: { ru: "Я из Киева и живу в Берлине.", en: "I'm from Kyiv and live in Berlin." } },
      { de: "Möchtest du Tee oder Kaffee?", translation: { ru: "Хочешь чай или кофе?", en: "Would you like tea or coffee?" } },
      { de: "Die Wohnung ist klein, aber schön.", translation: { ru: "Квартира маленькая, но красивая.", en: "The flat is small but nice." } },
    ],
    tags: ["syntax", "conjunctions"],
  },
  {
    id: "a1-imperative",
    level: "A1",
    title: { ru: "Повелительное наклонение (Imperativ)", en: "Imperative" },
    summary: {
      ru: "Просьбы и команды: Komm! / Kommt! / Kommen Sie!",
      en: "Requests and commands: Komm! / Kommt! / Kommen Sie!",
    },
    explanation: {
      ru: "Форма **du**: основа глагола без окончания и без местоимения (`kommen → Komm!`). Сохраняется смена `e → i` (`nehmen → Nimm!`), но не `a → ä` (`fahren → Fahr!`). Форма **ihr**: как в настоящем времени (`Kommt!`). Форма **Sie**: инфинитив + `Sie` (`Kommen Sie!`).",
      en: "The **du** form: verb stem without ending and without the pronoun (`kommen → Komm!`). The `e → i` change stays (`nehmen → Nimm!`), but `a → ä` does not (`fahren → Fahr!`). The **ihr** form equals the present tense (`Kommt!`). The **Sie** form: infinitive + `Sie` (`Kommen Sie!`).",
    },
    tables: [
      {
        caption: { ru: "Императив по лицам", en: "Imperative forms" },
        columns: ["Infinitiv", "du", "ihr", "Sie"],
        rows: [
          ["kommen", "Komm!", "Kommt!", "Kommen Sie!"],
          ["nehmen", "Nimm!", "Nehmt!", "Nehmen Sie!"],
          ["sein", "Sei!", "Seid!", "Seien Sie!"],
        ],
        highlight: { "1,1": "irregular", "2,1": "irregular" },
      },
    ],
    examples: [
      { de: "Komm bitte her!", translation: { ru: "Подойди, пожалуйста!", en: "Please come here!" } },
      { de: "Nimm bitte Platz!", translation: { ru: "Садись, пожалуйста!", en: "Please take a seat!" } },
      { de: "Sprechen Sie bitte langsam!", translation: { ru: "Говорите, пожалуйста, медленно!", en: "Please speak slowly!" } },
    ],
    tags: ["verbs", "imperative"],
  },

  {
    id: "a1-time-expressions",
    level: "A1",
    title: { ru: "Время и даты (Uhrzeit & Datum)", en: "Telling time & dates" },
    summary: {
      ru: "Который час, предлоги um/am/im и как назвать дату.",
      en: "What time it is, the prepositions um/am/im, and saying the date.",
    },
    explanation: {
      ru: "Спросить время: `Wie spät ist es?` Ответ: `Es ist …`. **Официально** (24 часа): часы + `Uhr` + минуты (`13:20 = dreizehn Uhr zwanzig`). **Разговорно**: `nach` (после), `vor` (до), `Viertel` (четверть), `halb`. Внимание: `halb` относится к **следующему** часу — `halb drei` = 2:30. Предлоги времени: `um` + точное время, `am` + день/часть дня, `im` + месяц/время года. Даты — порядковые числительные: `der erste März`, `am ersten März`.",
      en: "Ask the time: `Wie spät ist es?` Answer: `Es ist …`. **Official** (24-hour): hour + `Uhr` + minutes (`13:20 = dreizehn Uhr zwanzig`). **Colloquial**: `nach` (past), `vor` (to), `Viertel` (quarter), `halb`. Watch out: `halb` points to the **next** hour — `halb drei` = 2:30. Time prepositions: `um` + clock time, `am` + day/part of day, `im` + month/season. Dates use ordinals: `der erste März`, `am ersten März`.",
    },
    tables: [
      {
        caption: { ru: "Который час?", en: "What time is it?" },
        columns: ["Uhr", "Offiziell", "Umgangssprachlich"],
        rows: [
          ["13:00", "dreizehn Uhr", "ein Uhr / eins"],
          ["13:15", "dreizehn Uhr fünfzehn", "Viertel nach eins"],
          ["13:30", "dreizehn Uhr dreißig", "halb zwei"],
          ["13:45", "dreizehn Uhr fünfundvierzig", "Viertel vor zwei"],
        ],
        highlight: { "2,2": "key" },
      },
      {
        caption: { ru: "Предлоги времени: um / am / im", en: "Time prepositions: um / am / im" },
        columns: ["Wann?", "Präposition", "Beispiel"],
        rows: [
          ["Uhrzeit", "um", "um 8 Uhr"],
          ["Tag / Tageszeit", "am", "am Montag, am Abend"],
          ["Monat / Jahreszeit", "im", "im Mai, im Sommer"],
          ["Ausnahme", "in der", "in der Nacht"],
        ],
        highlight: { "0,1": "key", "1,1": "key", "2,1": "key" },
      },
    ],
    examples: [
      { de: "Wie spät ist es? — Es ist halb drei.", translation: { ru: "Который час? — Половина третьего (14:30).", en: "What time is it? — Half past two (2:30)." } },
      { de: "Der Zug fährt um Viertel vor neun.", translation: { ru: "Поезд отправляется без четверти девять.", en: "The train leaves at a quarter to nine." } },
      { de: "Mein Geburtstag ist am ersten März.", translation: { ru: "Мой день рождения первого марта.", en: "My birthday is on the first of March." } },
      { de: "Im Sommer ist es warm.", translation: { ru: "Летом тепло.", en: "In summer it is warm." } },
    ],
    tags: ["time", "expressions"],
  },

  {
    id: "a1-numbers-dates",
    level: "A1",
    title: { ru: "Числа и даты прописью", en: "Writing numbers & dates" },
    summary: {
      ru: "Как составлять большие числа, годы и порядковые числительные для дат.",
      en: "How to build big numbers, years, and ordinals for dates.",
    },
    explanation: {
      ru: "Двузначные числа строятся **«единицы + und + десятки»** в одно слово: `21 = einundzwanzig`, `35 = fünfunddreißig` (обратите внимание: `ein`, а не `eins`). Сотни и тысячи: `(ein)hundert`, `(ein)tausend`. **Годы** до 1999 — через сотни: `1999 = neunzehnhundertneunundneunzig`; с 2000 — `zweitausend…` (`2014 = zweitausendvierzehn`). **Даты** — порядковые: `erste, zweite, dritte…`; после `am` добавляется `-en`: `am ersten März`. Запомните неправильные: `erste, dritte, siebte, achte`.",
      en: "Two-digit numbers are built as **“units + und + tens”** in one word: `21 = einundzwanzig`, `35 = fünfunddreißig` (note: `ein`, not `eins`). Hundreds and thousands: `(ein)hundert`, `(ein)tausend`. **Years** before 1999 use hundreds: `1999 = neunzehnhundertneunundneunzig`; from 2000 use `zweitausend…` (`2014 = zweitausendvierzehn`). **Dates** use ordinals: `erste, zweite, dritte…`; after `am` add `-en`: `am ersten März`. Memorize the irregulars: `erste, dritte, siebte, achte`.",
    },
    tables: [
      {
        caption: { ru: "Числа прописью", en: "Numbers in words" },
        columns: ["Zahl", "Wort"],
        rows: [
          ["21", "einundzwanzig"],
          ["35", "fünfunddreißig"],
          ["100", "(ein)hundert"],
          ["1.000", "(ein)tausend"],
          ["2014", "zweitausendvierzehn"],
          ["1999", "neunzehnhundertneunundneunzig"],
        ],
        highlight: { "0,1": "key", "4,1": "key" },
      },
      {
        caption: { ru: "Порядковые числительные (даты)", en: "Ordinal numbers (dates)" },
        columns: ["Zahl", "Ordnungszahl", "Datum (am …)"],
        rows: [
          ["1.", "erste", "am ersten"],
          ["2.", "zweite", "am zweiten"],
          ["3.", "dritte", "am dritten"],
          ["7.", "siebte", "am siebten"],
          ["20.", "zwanzigste", "am zwanzigsten"],
        ],
        highlight: { "0,1": "irregular", "2,1": "irregular", "3,1": "irregular" },
      },
    ],
    examples: [
      { de: "Ich bin 1999 geboren.", translation: { ru: "Я родился в 1999 году.", en: "I was born in 1999." } },
      { de: "Heute ist der erste März.", translation: { ru: "Сегодня первое марта.", en: "Today is the first of March." } },
      { de: "Mein Termin ist am dritten Mai.", translation: { ru: "Моя встреча третьего мая.", en: "My appointment is on the third of May." } },
    ],
    tags: ["numbers", "dates"],
  },
];
