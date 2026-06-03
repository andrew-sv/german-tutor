// Fills the `uk` (Ukrainian) column of data/goethe-a1.tsv by lemma, without
// touching existing ru/en. Run: node scripts/merge-uk.mjs (then import-wortliste).

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const tsvPath = resolve(root, "data/goethe-a1.tsv");

const UK = {
  "ab": "з (про час)", "aber": "але", "abfahren": "від'їжджати", "Abfahrt": "відправлення",
  "abgeben": "здавати", "abholen": "забирати", "Absender": "відправник", "Achtung": "увага",
  "Adresse": "адреса", "alle": "всі", "allein": "сам, наодинці", "also": "отже, тобто",
  "alt": "старий", "Alter": "вік", "an": "на, біля, до", "anbieten": "пропонувати",
  "Angebot": "пропозиція", "anfangen": "починати", "Anfang": "початок", "anklicken": "клікати",
  "ankommen": "прибувати", "ankreuzen": "позначати хрестиком", "anmachen": "вмикати",
  "anmelden": "реєструвати(ся)", "Anmeldung": "реєстрація", "Anrede": "звертання",
  "anrufen": "телефонувати", "Anruf": "дзвінок", "Anrufbeantworter": "автовідповідач",
  "Ansage": "оголошення", "Anschluss": "з'єднання, рейс", "antworten": "відповідати",
  "Antwort": "відповідь", "Anzeige": "оголошення", "anziehen": "одягати",
  "Apartment": "квартира, апартаменти", "Apfel": "яблуко", "Appetit": "апетит",
  "arbeiten": "працювати", "Arbeit": "робота", "arbeitslos": "безробітний",
  "Arbeitsplatz": "робоче місце", "Arm": "рука", "Arzt": "лікар", "auch": "також",
  "auf": "на", "Aufgabe": "завдання", "aufhören": "припиняти", "aufstehen": "вставати",
  "Aufzug": "ліфт", "Auge": "око", "aus": "з", "Ausflug": "екскурсія",
  "ausfüllen": "заповнювати", "Ausgang": "вихід", "Auskunft": "довідка, інформація",
  "Ausland": "закордон", "Ausländer": "іноземець", "ausländisch": "іноземний",
  "ausmachen": "вимикати", "Aussage": "висловлювання", "aussehen": "виглядати",
  "aussteigen": "виходити (з транспорту)", "Ausweis": "посвідчення", "ausziehen": "знімати (одяг)",
  "Auto": "машина, авто", "Autobahn": "автобан", "Automat": "автомат", "automatisch": "автоматичний",
  "Baby": "немовля", "Bäckerei": "пекарня", "Bad": "ванна (кімната)", "baden": "купатися",
  "Bahn": "потяг, залізниця", "Bahnhof": "вокзал", "Bahnsteig": "перон", "bald": "скоро",
  "Balkon": "балкон", "Banane": "банан", "Bank": "банк; лавка", "bar": "готівкою",
  "Bauch": "живіт", "Baum": "дерево", "Beamte": "чиновник", "bedeuten": "значити",
  "beginnen": "починати", "bei": "у, при", "beide": "обидва", "Bein": "нога",
  "Beispiel": "приклад", "bekannt": "відомий", "Bekannte": "знайомий", "bekommen": "отримувати",
  "benutzen": "використовувати", "Beruf": "професія", "besetzt": "зайнято",
  "besichtigen": "оглядати", "besser": "краще", "bestellen": "замовляти", "besuchen": "відвідувати",
  "Bett": "ліжко", "bezahlen": "платити", "Bild": "картина, зображення", "billig": "дешевий",
  "Birne": "груша", "bis": "до", "bisschen": "трохи", "bitte": "будь ласка", "Bitte": "прохання",
  "bitten": "просити", "bitter": "гіркий", "bleiben": "залишатися", "Bleistift": "олівець",
  "Blick": "погляд, вид", "Blume": "квітка", "Bogen": "бланк, аркуш", "böse": "злий, сердитий",
  "brauchen": "потребувати", "breit": "широкий", "Brief": "лист", "Briefmarke": "поштова марка",
  "bringen": "приносити", "Brot": "хліб", "Brötchen": "булочка", "Bruder": "брат", "Buch": "книга",
  "Buchstabe": "літера", "buchstabieren": "вимовляти по літерах", "Bus": "автобус", "Butter": "масло",
  "Café": "кафе", "CD": "компакт-диск", "Chef": "начальник", "circa": "приблизно",
  "Computer": "комп'ютер", "da": "тут, там", "daneben": "поруч", "danken": "дякувати",
  "Dank": "подяка", "danke": "дякую", "dann": "потім", "Datum": "дата", "dauern": "тривати",
  "denn": "тому що", "der": "цей, який", "dich": "тебе", "dir": "тобі", "Disco": "дискотека",
  "Doktor": "лікар, доктор", "Doppelzimmer": "двомісний номер", "Dorf": "село", "dort": "там",
  "draußen": "надворі", "drucken": "друкувати", "Drucker": "принтер", "drücken": "натискати",
  "durch": "через", "Durchsage": "оголошення", "dürfen": "мати право, можна", "Durst": "спрага",
  "duschen": "приймати душ", "Dusche": "душ", "Ecke": "ріг, кут", "Ehefrau": "дружина",
  "Ehemann": "чоловік", "Ei": "яйце", "eilig": "терміновий", "einfach": "простий",
  "Eingang": "вхід", "einkaufen": "робити покупки", "einladen": "запрошувати",
  "Einladung": "запрошення", "einmal": "одного разу, разок", "einsteigen": "сідати (в транспорт)",
  "Einzelzimmer": "одномісний номер", "Eltern": "батьки", "E-Mail": "електронний лист",
  "Empfänger": "одержувач", "empfehlen": "рекомендувати", "enden": "закінчуватися", "Ende": "кінець",
  "entschuldigen": "вибачати", "Entschuldigung": "вибачення", "er": "він", "Ergebnis": "результат",
  "erklären": "пояснювати", "erlauben": "дозволяти", "Erwachsene": "дорослий", "erzählen": "розповідати",
  "es": "воно", "essen": "їсти", "Essen": "їжа", "fahren": "їхати", "Fahrer": "водій",
  "Fahrkarte": "квиток", "Fahrrad": "велосипед", "falsch": "неправильний", "Familie": "сім'я",
  "Familienname": "прізвище", "Familienstand": "сімейний стан", "Farbe": "колір", "Fax": "факс",
  "feiern": "святкувати", "fehlen": "бути відсутнім", "Fehler": "помилка",
  "fernsehen": "дивитися телевізор", "fertig": "готовий", "Feuer": "вогонь",
  "Fieber": "температура, жар", "Film": "фільм", "finden": "знаходити", "Firma": "фірма",
  "Fisch": "риба", "Flasche": "пляшка", "Fleisch": "м'ясо", "fliegen": "летіти", "Abflug": "виліт",
  "Flughafen": "аеропорт", "Flugzeug": "літак", "Formular": "бланк, формуляр", "Foto": "фотографія",
  "fragen": "запитувати", "Frage": "питання", "Frau": "жінка; дружина", "frei": "вільний",
  "Freizeit": "вільний час", "fremd": "чужий, незнайомий", "freuen": "радіти", "Freund": "друг",
  "früher": "раніше", "frühstücken": "снідати", "Frühstück": "сніданок", "Führung": "екскурсія",
  "für": "для", "Fuß": "ступня", "Fußball": "футбол; м'яч", "Garten": "сад", "Gast": "гість",
  "geben": "давати", "geboren": "народжений", "Geburtsjahr": "рік народження",
  "Geburtsort": "місце народження", "Geburtstag": "день народження", "gefallen": "подобатися",
  "gegen": "проти", "gehen": "іти", "gehören": "належати", "Geld": "гроші", "Gemüse": "овочі",
  "Gepäck": "багаж", "gerade": "якраз, прямо", "geradeaus": "прямо", "gern": "охоче",
  "Geschäft": "магазин", "Geschenk": "подарунок", "Geschwister": "брати й сестри",
  "Gespräch": "розмова", "gestern": "вчора", "gestorben": "померлий", "Getränk": "напій",
  "Gewicht": "вага", "gewinnen": "вигравати", "Glas": "склянка, скло", "glauben": "вірити, думати",
  "gleich": "однаковий; зараз", "Gleis": "колія, платформа", "Glück": "щастя, удача",
  "Glückwunsch": "вітання", "Grad": "градус", "gratulieren": "вітати", "grillen": "смажити на грилі",
  "groß": "великий", "Größe": "розмір", "Großeltern": "бабуся й дідусь", "Großmutter": "бабуся",
  "Großvater": "дідусь", "Gruppe": "група", "Gruß": "привіт", "gültig": "дійсний",
  "günstig": "вигідний", "gut": "хороший", "Haar": "волосся", "Hähnchen": "курка (страва)",
  "Halbpension": "напівпансіон", "Halle": "зал", "halten": "тримати; зупинятися",
  "Haltestelle": "зупинка", "Hand": "рука (кисть)", "Handy": "мобільний телефон", "Haus": "дім, будинок",
  "Hausaufgabe": "домашнє завдання", "Hausfrau": "домогосподарка", "Heimat": "батьківщина",
  "heiraten": "одружуватися", "heißen": "називатися", "helfen": "допомагати", "hell": "світлий",
  "Herd": "плита", "Herr": "пан", "herzlich": "сердечний", "heute": "сьогодні", "hier": "тут",
  "Hilfe": "допомога", "hinten": "ззаду", "hoch": "високий", "Hochzeit": "весілля",
  "holen": "приносити", "hören": "чути, слухати", "Hotel": "готель", "Hund": "собака", "Hunger": "голод",
  "ich": "я", "immer": "завжди", "in": "у, в", "Information": "інформація",
  "international": "міжнародний", "Internet": "інтернет", "ja": "так", "Jacke": "куртка",
  "jetzt": "зараз", "Job": "робота, підробіток", "Jugendliche": "підліток", "jung": "молодий",
  "Junge": "хлопець", "Kaffee": "кава", "kaputt": "зламаний", "Karte": "карта, квиток",
  "Kartoffel": "картопля", "Kasse": "каса", "kaufen": "купувати", "kein": "ніякий, жодного",
  "kennen": "знати", "kennenlernen": "знайомитися", "Kind": "дитина", "Kindergarten": "дитячий садок",
  "Kino": "кінотеатр", "Kiosk": "кіоск", "klar": "ясно", "Klasse": "клас", "Kleidung": "одяг",
  "klein": "маленький", "kochen": "готувати", "Koffer": "валіза", "Kollege": "колега",
  "kommen": "приходити", "können": "могти, вміти", "Konto": "рахунок", "Kopf": "голова",
  "kosten": "коштувати", "krank": "хворий", "kriegen": "отримувати", "Küche": "кухня",
  "Kuchen": "пиріг", "Kugelschreiber": "ручка", "Kühlschrank": "холодильник", "kulturell": "культурний",
  "Kunde": "клієнт", "Kurs": "курс", "kurz": "короткий", "lachen": "сміятися", "Laden": "магазин",
  "Land": "країна", "lang": "довгий", "lange": "довго", "langsam": "повільний", "laufen": "бігти, іти",
  "laut": "гучний", "leben": "жити", "Leben": "життя", "Lebensmittel": "продукти",
  "ledig": "неодружений, незаміжня", "legen": "класти", "Lehrer": "вчитель", "leicht": "легкий",
  "leider": "на жаль", "leise": "тихий", "lernen": "вчити", "lesen": "читати", "Leute": "люди",
  "Licht": "світло", "lieben": "любити", "lieber": "краще, охочіше", "Lied": "пісня", "liegen": "лежати",
  "links": "ліворуч", "Lkw": "вантажівка", "Lokal": "заклад, ресторан", "Lösung": "рішення",
  "lustig": "веселий", "machen": "робити", "Mädchen": "дівчинка", "man": "хтось (безособове)",
  "Mann": "чоловік", "männlich": "чоловічий", "Maschine": "машина, апарат", "Meer": "море",
  "mehr": "більше", "mein": "мій", "Mensch": "людина", "mieten": "наймати (житло)", "Miete": "оренда",
  "Milch": "молоко", "mit": "з", "mitbringen": "приносити з собою", "mitkommen": "іти разом",
  "mitmachen": "брати участь", "mitnehmen": "брати з собою", "Mitte": "середина", "Möbel": "меблі",
  "möchten": "хотів би", "mögen": "любити, подобатися", "möglich": "можливий", "Moment": "момент",
  "morgen": "завтра", "müde": "втомлений", "Mund": "рот", "müssen": "мусити", "Mutter": "мати",
  "nach": "після, до", "Name": "ім'я", "nehmen": "брати", "nein": "ні", "neu": "новий", "nicht": "не",
  "nichts": "нічого", "nie": "ніколи", "noch": "ще", "normal": "нормальний", "Nummer": "номер",
  "nur": "тільки", "oben": "нагорі", "Obst": "фрукти", "oder": "або", "öffnen": "відкривати",
  "oft": "часто", "ohne": "без", "Öl": "олія", "Oma": "бабуся", "Opa": "дідусь", "Ordnung": "порядок",
  "Ort": "місце", "Papier": "папір", "Partnerin": "партнерка", "Party": "вечірка", "Pass": "паспорт",
  "Pause": "перерва", "Plan": "план", "Platz": "місце, площа", "Polizei": "поліція",
  "Pommes frites": "картопля фрі", "Post": "пошта", "Postleitzahl": "індекс", "Praktikum": "стажування",
  "Praxis": "практика; приймальня", "Preis": "ціна", "Problem": "проблема", "Prospekt": "проспект, буклет",
  "Prüfung": "іспит", "pünktlich": "пунктуальний", "Rad fahren": "їздити на велосипеді",
  "rauchen": "курити", "Raum": "приміщення", "Rechnung": "рахунок", "rechts": "праворуч",
  "regnen": "іти (про дощ)", "Regen": "дощ", "Reis": "рис", "reisen": "подорожувати", "Reise": "подорож",
  "Reisebüro": "турагентство", "Reiseführer": "путівник; гід", "reparieren": "ремонтувати",
  "Reparatur": "ремонт", "Restaurant": "ресторан", "Rezeption": "стійка реєстрації",
  "richtig": "правильний", "riechen": "пахнути", "ruhig": "тихий, спокійний", "Saft": "сік",
  "sagen": "казати", "Salat": "салат", "Salz": "сіль", "Satz": "речення", "S-Bahn": "міська електричка",
  "Schalter": "віконце, каса", "scheinen": "світити; здаватися", "schicken": "надсилати",
  "Schild": "табличка, знак", "Schinken": "шинка", "schlafen": "спати", "schlecht": "поганий",
  "schließen": "закривати", "Schluss": "кінець", "Schlüssel": "ключ", "schmecken": "бути смачним",
  "schnell": "швидкий", "schon": "вже", "schön": "гарний", "Schrank": "шафа", "schreiben": "писати",
  "Schuh": "черевик", "Schule": "школа", "Schüler": "учень", "schwer": "важкий, важко",
  "Schwester": "сестра", "schwimmen": "плавати", "Schwimmbad": "басейн", "See": "озеро",
  "Sehenswürdigkeit": "пам'ятка", "sehen": "бачити", "sehr": "дуже", "sein": "бути",
  "seit": "з (про час)", "selbstständig": "самостійний", "sich": "себе", "sie": "вона; вони",
  "sitzen": "сидіти", "so": "так", "Sofa": "диван", "sofort": "одразу", "Sohn": "син",
  "sollen": "слід, мусити", "Sonne": "сонце", "spät": "пізній", "später": "пізніше",
  "Speisekarte": "меню", "spielen": "грати", "Sport": "спорт", "Sprache": "мова", "sprechen": "говорити",
  "Stadt": "місто", "stehen": "стояти", "Stelle": "місце, посада", "stellen": "ставити", "Stock": "поверх",
  "Straße": "вулиця", "Straßenbahn": "трамвай", "studieren": "навчатися (у виші)", "Studium": "навчання",
  "Student": "студент", "Stunde": "година", "suchen": "шукати", "tanzen": "танцювати", "Tasche": "сумка",
  "Taxi": "таксі", "Tee": "чай", "Teil": "частина", "telefonieren": "телефонувати", "Telefon": "телефон",
  "Termin": "запис, зустріч", "Test": "тест", "teuer": "дорогий", "Text": "текст", "Thema": "тема",
  "Ticket": "квиток", "Tisch": "стіл", "Tochter": "донька", "Toilette": "туалет", "Tomate": "помідор",
  "tot": "мертвий", "treffen": "зустрічати", "Treppe": "сходи", "trinken": "пити", "tschüss": "бувай",
  "tun": "робити", "über": "над, про", "übernachten": "ночувати", "überweisen": "переказувати (гроші)",
  "Uhr": "годинник", "um": "о, навколо", "umziehen": "переїжджати", "und": "і",
  "Unterricht": "заняття, урок", "unterschreiben": "підписувати", "Unterschrift": "підпис",
  "Urlaub": "відпустка", "Vater": "батько", "verboten": "заборонений", "verdienen": "заробляти",
  "Verein": "клуб, товариство", "verheiratet": "одружений, заміжня", "verkaufen": "продавати",
  "Verkäufer": "продавець", "vermieten": "здавати (житло)", "Vermieter": "орендодавець",
  "verstehen": "розуміти", "Verwandte": "родич", "viel": "багато", "vielleicht": "можливо",
  "von": "від, з", "vor": "перед, до", "Vorname": "ім'я", "Vorsicht": "обережність",
  "vorstellen": "представляти", "Vorwahl": "код міста", "wandern": "ходити в походи", "wann": "коли",
  "warten": "чекати", "warum": "чому", "was": "що", "waschen": "мити", "Wasser": "вода",
  "weh tun": "боліти", "weiblich": "жіночий", "Wein": "вино", "weit": "далеко", "weiter": "далі",
  "Welt": "світ", "wenig": "мало", "wer": "хто", "werden": "ставати", "Wetter": "погода",
  "wichtig": "важливий", "wie": "як", "wiederholen": "повторювати", "Wiedersehen": "зустріч, побачення",
  "wie viel": "скільки", "willkommen": "ласкаво просимо", "Wind": "вітер", "wir": "ми", "wissen": "знати",
  "wo": "де", "woher": "звідки", "wohin": "куди", "wohnen": "жити", "Wohnung": "квартира",
  "wollen": "хотіти", "Wort": "слово", "wunderbar": "чудовий", "zahlen": "платити", "Zeit": "час",
  "Zeitung": "газета", "Zigarette": "сигарета", "Zimmer": "кімната", "Zoll": "митниця", "zu": "до",
  "zufrieden": "задоволений", "Zug": "потяг", "zurück": "назад", "zusammen": "разом", "zwischen": "між",
};

const lines = readFileSync(tsvPath, "utf8").split(/\r?\n/);
let header = lines[0].split("\t");
let ukIdx = header.indexOf("uk");
if (ukIdx === -1) {
  header.push("uk");
  ukIdx = header.length - 1;
  lines[0] = header.join("\t");
}
const lemmaIdx = header.indexOf("lemma");

let filled = 0, missing = [];
for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  if (!line.trim() || line.startsWith("#")) continue;
  const cols = line.split("\t");
  while (cols.length <= ukIdx) cols.push("");
  const lemma = (cols[lemmaIdx] ?? "").trim();
  if (UK[lemma]) {
    cols[ukIdx] = UK[lemma];
    filled++;
  } else if (!cols[ukIdx]) {
    missing.push(lemma);
  }
  lines[i] = cols.join("\t");
}

writeFileSync(tsvPath, lines.join("\n"), "utf8");
console.log(`✓ Filled uk for ${filled} rows.` + (missing.length ? ` Missing: ${missing.length} (${missing.slice(0, 10).join(", ")}…)` : ""));
