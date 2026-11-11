const masterQuestionPool = [
    // 1. SŁOWNICTWO ZWIERZĄT (25 pytań)
    { type: 'choice', q: 'Jak jest po angielsku "ryba"?', options: ['fish', 'dog', 'cat', 'lion'], correct: 0 },
    { type: 'choice', q: 'Co oznacza słowo "panda"?', options: ['małpa', 'panda', 'słoń', 'królik'], correct: 1 },
    { type: 'choice', q: 'Które słowo oznacza "gepard"?', options: ['tiger', 'cat', 'cheetah', 'fish'], correct: 2 },
    { type: 'choice', q: 'Jak przetłumaczysz "słoń"?', options: ['elephant', 'lion', 'dog', 'rabbit'], correct: 0 },
    { type: 'choice', q: 'Wskaż tłumaczenie dla "królik":', options: ['cat', 'rabbit', 'fish', 'panda'], correct: 1 },
    { type: 'choice', q: 'Co to jest "dog"?', options: ['kot', 'lew', 'pies', 'ryba'], correct: 2 },
    { type: 'choice', q: 'Jak jest po angielsku "kot"?', options: ['dog', 'cat', 'lion', 'fish'], correct: 1 },
    { type: 'choice', q: 'Wybierz tłumaczenie słowa "lew":', options: ['lion', 'cheetah', 'elephant', 'panda'], correct: 0 },
    { type: 'choice', q: 'Które zwierzę to "fish"?', options: ['ryba', 'pies', 'kot', 'słoń'], correct: 0 },
    { type: 'choice', q: 'Które z tych to ptak? (Zmyłka, wybierz "żadne z powyższych"!)', options: ['cat', 'dog', 'fish', 'żadne z powyższych'], correct: 3 },
    { type: 'choice', q: 'Wybierz angielskie słowo na "gepard":', options: ['cheetah', 'lion', 'elephant', 'rabbit'], correct: 0 },
    { type: 'choice', q: 'Jak przetłumaczysz "elephant"?', options: ['panda', 'gepard', 'słoń', 'lew'], correct: 2 },
    { type: 'choice', q: 'Co oznacza "rabbit"?', options: ['pies', 'królik', 'kot', 'ryba'], correct: 1 },
    { type: 'choice', q: 'Jak powiesz "mój pies"?', options: ['my cat', 'my dog', 'my fish', 'my lion'], correct: 1 },
    { type: 'choice', q: 'Jak powiesz "mały kot"?', options: ['small dog', 'small cat', 'small panda', 'small fish'], correct: 1 },
    { type: 'choice', q: 'Co to jest "lion"?', options: ['gepard', 'słoń', 'lew', 'pies'], correct: 2 },
    { type: 'choice', q: 'Jakie zwierzę ma trąbę?', options: ['elephant', 'fish', 'cat', 'cheetah'], correct: 0 },
    { type: 'choice', q: 'Jakie zwierzę szybko biega?', options: ['fish', 'cheetah', 'panda', 'elephant'], correct: 1 },
    { type: 'choice', q: 'Jakie zwierzę pływa w wodzie?', options: ['lion', 'rabbit', 'dog', 'fish'], correct: 3 },
    { type: 'choice', q: 'Jak po angielsku jest "panda"?', options: ['panda', 'elephant', 'cheetah', 'lion'], correct: 0 },
    { type: 'choice', q: 'Zwierzę, które szczeka to:', options: ['cat', 'rabbit', 'dog', 'cheetah'], correct: 2 },
    { type: 'choice', q: 'Zwierzę, które miauczy to:', options: ['lion', 'dog', 'fish', 'cat'], correct: 3 },
    { type: 'choice', q: 'Duży drapieżnik z grzywą to:', options: ['lion', 'panda', 'rabbit', 'elephant'], correct: 0 },
    { type: 'choice', q: 'Które zwierzę zjada marchewkę?', options: ['fish', 'lion', 'rabbit', 'cheetah'], correct: 2 },
    { type: 'choice', q: 'Które z tych to zwierzę domowe?', options: ['elephant', 'lion', 'cat', 'cheetah'], correct: 2 },

    // 2. I LIKE / LIKES (25 pytań)
    { type: 'choice', q: 'Wybierz poprawną formę: "I ___ baking."', options: ['likes', 'like', 'liking', 'to like'], correct: 1 },
    { type: 'choice', q: 'Wybierz poprawną formę: "My brother ___ hiking."', options: ['like', 'likes', 'liking', 'is like'], correct: 1 },
    { type: 'choice', q: 'Uzupełnij: "She ___ swimming."', options: ['like', 'likes', 'liked', 'is'], correct: 1 },
    { type: 'choice', q: 'Uzupełnij: "He ___ playing football."', options: ['like', 'likes', 'liking', 'is like'], correct: 1 },
    { type: 'choice', q: 'Wybierz poprawne: "We ___ reading books."', options: ['likes', 'liking', 'like', 'liked'], correct: 2 },
    { type: 'choice', q: 'Jak powiesz "Ja lubię podróżować"?', options: ['I like travelling', 'I likes travelling', 'He like travelling', 'She likes travelling'], correct: 0 },
    { type: 'choice', q: 'Jak powiesz "On lubi gotować"?', options: ['He like cooking', 'He likes cooking', 'I like cooking', 'I likes cooking'], correct: 1 },
    { type: 'choice', q: 'Uzupełnij: "They ___ playing the keyboard."', options: ['like', 'likes', 'to like', 'liking'], correct: 0 },
    { type: 'choice', q: 'Uzupełnij: "My sister ___ taking photos."', options: ['like', 'likes', 'are', 'is'], correct: 1 },
    { type: 'choice', q: 'Co znaczy "I like riding a bike"?', options: ['Lubię jeździć konno', 'Lubię jeździć na rowerze', 'On lubi jeździć na rowerze', 'Ona lubi pływać'], correct: 1 },
    { type: 'choice', q: 'Które zdanie jest poprawne?', options: ['I likes pizza', 'She like pizza', 'He likes pizza', 'We likes pizza'], correct: 2 },
    { type: 'choice', q: 'Które zdanie jest błędne?', options: ['I like cats', 'She likes dogs', 'He like fish', 'They like pandas'], correct: 2 },
    { type: 'choice', q: 'Uzupełnij: "You ___ playing games."', options: ['likes', 'like', 'liking', 'liked'], correct: 1 },
    { type: 'choice', q: 'Jak powiesz "Ona lubi konie"?', options: ['She like horses', 'She likes horses', 'I like horses', 'He likes horses'], correct: 1 },
    { type: 'choice', q: 'Uzupełnij: "Tom ___ collecting stickers."', options: ['like', 'likes', 'is', 'collect'], correct: 1 },
    { type: 'choice', q: 'Uzupełnij: "Anna and Tom ___ watching TV."', options: ['like', 'likes', 'liking', 'to like'], correct: 0 },
    { type: 'choice', q: 'Co znaczy "He likes apples"?', options: ['Ja lubię jabłka', 'Ona lubi jabłka', 'On lubi jabłka', 'My lubimy jabłka'], correct: 2 },
    { type: 'choice', q: 'Uzupełnij: "I ___ my dog."', options: ['like', 'likes', 'liking', 'liked'], correct: 0 },
    { type: 'choice', q: 'Wybierz poprawne tłumaczenie "Lubię karate":', options: ['I likes karate', 'I like karate', 'He likes karate', 'She like karate'], correct: 1 },
    { type: 'choice', q: 'Które pasuje: "My cat ___ sleeping."', options: ['like', 'likes', 'is like', 'liking'], correct: 1 },
    { type: 'choice', q: 'Wybierz poprawne: "My parents ___ travelling."', options: ['like', 'likes', 'is liking', 'to like'], correct: 0 },
    { type: 'choice', q: 'Jak powiesz "Mój brat lubi piec"?', options: ['My brother like baking', 'My brother likes baking', 'My brother likes hiking', 'I like baking'], correct: 1 },
    { type: 'choice', q: 'Uzupełnij: "The elephant ___ eating peanuts."', options: ['like', 'likes', 'liked', 'liking'], correct: 1 },
    { type: 'choice', q: 'Co oznacza "I like baking"?', options: ['Lubię piec', 'Lubię pływać', 'Lubię wędrować', 'Lubię spać'], correct: 0 },
    { type: 'choice', q: 'Uzupełnij: "She ___ writing stories."', options: ['like', 'likes', 'liking', 'write'], correct: 1 },

    // 3. LICZBY DO 100 (DZIESIĄTKI) (25 pytań)
    { type: 'choice', q: 'Co to za liczba: "twenty"?', options: ['10', '20', '30', '12'], correct: 1 },
    { type: 'choice', q: 'Wybierz liczbę "fifty":', options: ['15', '40', '50', '60'], correct: 2 },
    { type: 'choice', q: 'Co oznacza "seventy"?', options: ['60', '70', '80', '17'], correct: 1 },
    { type: 'choice', q: 'Jak jest po angielsku "sto"?', options: ['ten', 'thousand', 'one hundred', 'one'], correct: 2 },
    { type: 'choice', q: 'Która liczba to "ten"?', options: ['1', '10', '100', '20'], correct: 1 },
    { type: 'choice', q: 'Jak jest po angielsku "30"?', options: ['twenty', 'thirty', 'forty', 'thirteen'], correct: 1 },
    { type: 'choice', q: 'Jak jest po angielsku "40"?', options: ['four', 'fourteen', 'forty', 'fifty'], correct: 2 },
    { type: 'choice', q: 'Co to za liczba: "sixty"?', options: ['16', '6', '60', '70'], correct: 2 },
    { type: 'choice', q: 'Która liczba to "eighty"?', options: ['18', '8', '80', '90'], correct: 2 },
    { type: 'choice', q: 'Jak jest po angielsku "90"?', options: ['ninety', 'nineteen', 'nine', 'eighty'], correct: 0 },
    { type: 'choice', q: 'Która odpowiedź to 50?', options: ['fifteen', 'five', 'fifty', 'forty'], correct: 2 },
    { type: 'choice', q: 'Co oznacza "one hundred"?', options: ['1', '10', '100', '1000'], correct: 2 },
    { type: 'choice', q: 'Ile to jest 20 + 20 po angielsku?', options: ['thirty', 'forty', 'fifty', 'sixty'], correct: 1 },
    { type: 'choice', q: 'Ile to jest 50 + 50 po angielsku?', options: ['eighty', 'ninety', 'one hundred', 'seventy'], correct: 2 },
    { type: 'choice', q: 'Która liczba jest większa: forty czy sixty?', options: ['forty', 'sixty', 'są równe', 'nie wiem'], correct: 1 },
    { type: 'choice', q: 'Wybierz tłumaczenie dla "dziesięć":', options: ['ten', 'twenty', 'one', 'hundred'], correct: 0 },
    { type: 'choice', q: 'Wybierz tłumaczenie dla "siedemdziesiąt":', options: ['sixty', 'seventy', 'eighty', 'seventeen'], correct: 1 },
    { type: 'choice', q: 'Jak napiszesz 80?', options: ['eight', 'eighty', 'eighteen', 'ighty'], correct: 1 },
    { type: 'choice', q: 'Jak napiszesz 30?', options: ['tree', 'thirty', 'thirteen', 'twenty'], correct: 1 },
    { type: 'choice', q: 'Dopasuj: 60 to...', options: ['sixty', 'six', 'sixteen', 'seventy'], correct: 0 },
    { type: 'choice', q: 'Dopasuj: 90 to...', options: ['nine', 'ninety', 'nineteen', 'one hundred'], correct: 1 },
    { type: 'choice', q: 'Wybierz poprawny zapis liczby 100:', options: ['one handred', 'one hundred', 'on hundred', 'one hundered'], correct: 1 },
    { type: 'choice', q: 'Co jest przed "thirty" (licząc dziesiątkami)?', options: ['ten', 'twenty', 'forty', 'fifty'], correct: 1 },
    { type: 'choice', q: 'Co jest po "seventy" (licząc dziesiątkami)?', options: ['sixty', 'eighty', 'ninety', 'fifty'], correct: 1 },
    { type: 'choice', q: 'Które słowo oznacza 20?', options: ['twelve', 'two', 'twenty', 'twenty-one'], correct: 2 },

    // 4. PYTANIA (25 pytań)
    { type: 'choice', q: 'Co oznacza pytanie: "Have you got a hobby?"', options: ['Czy masz hobby?', 'Jak masz na imię?', 'Gdzie mieszkasz?', 'Lubisz czytać?'], correct: 0 },
    { type: 'choice', q: 'Co oznacza pytanie: "How many stickers have you got?"', options: ['Gdzie są naklejki?', 'Ile masz naklejek?', 'Czy lubisz naklejki?', 'Kto ma naklejki?'], correct: 1 },
    { type: 'choice', q: 'Przetłumacz pytanie: "Do you like travelling?"', options: ['Co robisz?', 'Czy lubisz podróżować?', 'Masz rodzinę?', 'Gdzie podróżujesz?'], correct: 1 },
    { type: 'choice', q: 'Co oznacza: "What do you collect?"', options: ['Co kolekcjonujesz?', 'Co robisz?', 'Ile masz lat?', 'Kto to jest?'], correct: 0 },
    { type: 'choice', q: 'Co oznacza: "What are you doing?"', options: ['Co jesz?', 'Co teraz robisz?', 'Jak się masz?', 'Gdzie idziesz?'], correct: 1 },
    { type: 'choice', q: 'Jak zapytać "Czy lubisz podróżować?"', options: ['Do you like travelling?', 'What are you doing?', 'Have you got a hobby?', 'What do you collect?'], correct: 0 },
    { type: 'choice', q: 'Jak zapytać "Co teraz robisz?"', options: ['Do you like travelling?', 'What are you doing?', 'How many stickers?', 'What do you collect?'], correct: 1 },
    { type: 'choice', q: 'Jak zapytać "Co kolekcjonujesz?"', options: ['What do you collect?', 'Have you got a hobby?', 'What are you doing?', 'Do you like travelling?'], correct: 0 },
    { type: 'choice', q: 'Jak zapytać "Ile masz naklejek?"', options: ['How many stickers have you got?', 'What do you collect?', 'What are you doing?', 'Have you got a hobby?'], correct: 0 },
    { type: 'choice', q: 'Jak zapytać "Czy masz hobby?"', options: ['What do you collect?', 'Have you got a hobby?', 'Do you like travelling?', 'What are you doing?'], correct: 1 },
    { type: 'choice', q: 'Wybierz właściwą odpowiedź na "Have you got a hobby?"', options: ['Yes, I have.', 'I am fine.', 'Ten stickers.', 'I am reading.'], correct: 0 },
    { type: 'choice', q: 'Wybierz właściwą odpowiedź na "What are you doing?"', options: ['Yes, I do.', 'I am reading a book.', 'No, I haven\'t.', 'I collect cars.'], correct: 1 },
    { type: 'choice', q: 'Wybierz właściwą odpowiedź na "What do you collect?"', options: ['I collect stickers.', 'Yes, I do.', 'I am collecting.', 'Ten.'], correct: 0 },
    { type: 'choice', q: 'Wybierz właściwą odpowiedź na "How many stickers have you got?"', options: ['I have got twenty.', 'Yes, I have.', 'I like stickers.', 'I am collecting.'], correct: 0 },
    { type: 'choice', q: 'Wybierz właściwą odpowiedź na "Do you like travelling?"', options: ['Yes, I do.', 'I have got twenty.', 'I am travelling.', 'I collect tickets.'], correct: 0 },
    { type: 'choice', q: 'Co słowo "collect" oznacza w pytaniach?', options: ['robić', 'kolekcjonować', 'lubić', 'mieć'], correct: 1 },
    { type: 'choice', q: 'Co słowo "travelling" oznacza w pytaniach?', options: ['podróżowanie', 'pływanie', 'bieganie', 'czytanie'], correct: 0 },
    { type: 'choice', q: 'Co słowo "stickers" oznacza w pytaniach?', options: ['książki', 'naklejki', 'znaczki', 'karty'], correct: 1 },
    { type: 'choice', q: 'Uzupełnij pytanie: "___ you got a hobby?"', options: ['Do', 'Are', 'Have', 'What'], correct: 2 },
    { type: 'choice', q: 'Uzupełnij pytanie: "___ do you collect?"', options: ['What', 'Have', 'Are', 'Do'], correct: 0 },
    { type: 'choice', q: 'Uzupełnij pytanie: "___ you like travelling?"', options: ['Have', 'Are', 'Do', 'What'], correct: 2 },
    { type: 'choice', q: 'Uzupełnij pytanie: "___ are you doing?"', options: ['What', 'Do', 'Have', 'How'], correct: 0 },
    { type: 'choice', q: 'Uzupełnij pytanie: "___ many stickers have you got?"', options: ['What', 'How', 'Do', 'Have'], correct: 1 },
    { type: 'choice', q: 'Które pytanie odnosi się do ilości?', options: ['What are you doing?', 'How many stickers have you got?', 'Have you got a hobby?', 'Do you like travelling?'], correct: 1 },
    { type: 'choice', q: 'Które pytanie dotyczy zainteresowań?', options: ['Have you got a hobby?', 'What are you doing?', 'How many stickers?', 'What do you collect?'], correct: 0 },

    // 5. UKŁADANIE ZDAŃ (He / She) (25 pytań)
    { type: 'sentence', q: 'Ułóż zdanie: "On robi zdjęcia."', words: ['He', 'takes', 'photos', 'cats', 'run'], correct: ['He', 'takes', 'photos'] },
    { type: 'sentence', q: 'Ułóż zdanie: "Ona pisze opowiadanie."', words: ['She', 'writes', 'a', 'story', 'bike', 'play'], correct: ['She', 'writes', 'a', 'story'] },
    { type: 'sentence', q: 'Ułóż zdanie: "Ona trenuje karate."', words: ['She', 'does', 'karate', 'play', 'football'], correct: ['She', 'does', 'karate'] },
    { type: 'sentence', q: 'Ułóż zdanie: "Ona gra na keyboardzie."', words: ['She', 'plays', 'the', 'keyboard', 'guitar', 'run'], correct: ['She', 'plays', 'the', 'keyboard'] },
    { type: 'sentence', q: 'Ułóż zdanie: "Ona jeździ konno."', words: ['She', 'rides', 'a', 'horse', 'bike', 'car'], correct: ['She', 'rides', 'a', 'horse'] },
    { type: 'sentence', q: 'Ułóż zdanie: "On pisze opowiadanie."', words: ['He', 'writes', 'a', 'story', 'take', 'photo'], correct: ['He', 'writes', 'a', 'story'] },
    { type: 'sentence', q: 'Ułóż zdanie: "On trenuje karate."', words: ['He', 'does', 'karate', 'she', 'plays'], correct: ['He', 'does', 'karate'] },
    { type: 'sentence', q: 'Ułóż zdanie: "On gra na keyboardzie."', words: ['He', 'plays', 'the', 'keyboard', 'do', 'karate'], correct: ['He', 'plays', 'the', 'keyboard'] },
    { type: 'sentence', q: 'Ułóż zdanie: "On jeździ konno."', words: ['He', 'rides', 'a', 'horse', 'write', 'she'], correct: ['He', 'rides', 'a', 'horse'] },
    { type: 'sentence', q: 'Ułóż zdanie: "Ona robi zdjęcia."', words: ['She', 'takes', 'photos', 'he', 'riding'], correct: ['She', 'takes', 'photos'] },
    { type: 'sentence', q: 'Ułóż zdanie: "Ona lubi robić zdjęcia." (zmyłka z like)', words: ['She', 'likes', 'taking', 'photos', 'take', 'he'], correct: ['She', 'likes', 'taking', 'photos'] },
    { type: 'sentence', q: 'Ułóż zdanie: "On lubi trenować karate." (zmyłka z like)', words: ['He', 'likes', 'doing', 'karate', 'does', 'play'], correct: ['He', 'likes', 'doing', 'karate'] },
    { type: 'sentence', q: 'Ułóż zdanie: "Ona lubi grać na keyboardzie." (zmyłka z like)', words: ['She', 'likes', 'playing', 'the', 'keyboard', 'plays', 'he'], correct: ['She', 'likes', 'playing', 'the', 'keyboard'] },
    { type: 'sentence', q: 'Ułóż zdanie: "On pisze wspaniałe opowiadanie." (great)', words: ['He', 'writes', 'a', 'great', 'story', 'she', 'book'], correct: ['He', 'writes', 'a', 'great', 'story'] },
    { type: 'sentence', q: 'Ułóż zdanie: "Ona robi bardzo dobre zdjęcia." (very good)', words: ['She', 'takes', 'very', 'good', 'photos', 'he', 'make'], correct: ['She', 'takes', 'very', 'good', 'photos'] },
    { type: 'sentence', q: 'Ułóż zdanie: "On trenuje karate w szkole." (at school)', words: ['He', 'does', 'karate', 'at', 'school', 'she', 'plays'], correct: ['He', 'does', 'karate', 'at', 'school'] },
    { type: 'sentence', q: 'Ułóż zdanie: "Ona jeździ na dużym koniu." (big)', words: ['She', 'rides', 'a', 'big', 'horse', 'he', 'small'], correct: ['She', 'rides', 'a', 'big', 'horse'] },
    { type: 'sentence', q: 'Ułóż zdanie: "On gra na starym keyboardzie." (old)', words: ['He', 'plays', 'the', 'old', 'keyboard', 'young', 'she'], correct: ['He', 'plays', 'the', 'old', 'keyboard'] },
    { type: 'sentence', q: 'Ułóż zdanie: "Mój brat robi zdjęcia." (My brother)', words: ['My', 'brother', 'takes', 'photos', 'sister', 'take'], correct: ['My', 'brother', 'takes', 'photos'] },
    { type: 'sentence', q: 'Ułóż zdanie: "Moja siostra trenuje karate." (My sister)', words: ['My', 'sister', 'does', 'karate', 'brother', 'play'], correct: ['My', 'sister', 'does', 'karate'] },
    { type: 'sentence', q: 'Ułóż zdanie: "Jego tata gra na keyboardzie." (His dad)', words: ['His', 'dad', 'plays', 'the', 'keyboard', 'her', 'play'], correct: ['His', 'dad', 'plays', 'the', 'keyboard'] },
    { type: 'sentence', q: 'Ułóż zdanie: "Jej mama jeździ konno." (Her mum)', words: ['Her', 'mum', 'rides', 'a', 'horse', 'his', 'ride'], correct: ['Her', 'mum', 'rides', 'a', 'horse'] },
    { type: 'sentence', q: 'Ułóż zdanie: "Ten chłopak pisze opowiadanie." (This boy)', words: ['This', 'boy', 'writes', 'a', 'story', 'girl', 'write'], correct: ['This', 'boy', 'writes', 'a', 'story'] },
    { type: 'sentence', q: 'Ułóż zdanie: "Ta dziewczyna robi zdjęcia." (This girl)', words: ['This', 'girl', 'takes', 'photos', 'boy', 'take'], correct: ['This', 'girl', 'takes', 'photos'] },
    { type: 'sentence', q: 'Ułóż zdanie: "Mój przyjaciel trenuje karate." (My friend)', words: ['My', 'friend', 'does', 'karate', 'do', 'friends'], correct: ['My', 'friend', 'does', 'karate'] }
];

const defaultAvatar = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23ccc' viewBox='0 0 24 24'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>";

let streak = parseInt(localStorage.getItem('duo_streak') || '0');
let userName = localStorage.getItem('duo_name') || 'Uczeń';
let userPic = localStorage.getItem('duo_pic') || defaultAvatar;

let currentQuestions = [];
let currentIndex = 0;
let lives = 3;
let selectedOption = null;
let currentSentenceTokens = [];
let isAnswerChecked = false;

document.getElementById('streak-count').innerText = streak;
document.getElementById('nav-username').innerText = userName;
document.getElementById('username-input').value = userName;
document.getElementById('nav-avatar').src = userPic;
document.getElementById('settings-avatar').src = userPic;

function changeView(targetId) {
    const currentActive = document.querySelector('.view.active');
    const target = document.getElementById(targetId);
    
    if (currentActive) {
        currentActive.classList.remove('active');
        currentActive.classList.add('exit');
        setTimeout(() => currentActive.classList.remove('exit'), 350);
    }
    target.classList.add('active');
}

function setTheme(themeName, btnElement) {
    document.body.className = themeName;
    document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active-theme'));
    btnElement.classList.add('active-theme');
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            userPic = e.target.result;
            document.getElementById('settings-avatar').src = userPic;
        }
        reader.readAsDataURL(file);
    }
}

function saveProfile() {
    userName = document.getElementById('username-input').value || 'Uczeń';
    localStorage.setItem('duo_name', userName);
    localStorage.setItem('duo_pic', userPic);
    document.getElementById('nav-username').innerText = userName;
    document.getElementById('nav-avatar').src = userPic;
}

function playSound(isCorrect) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        if (isCorrect) {
            osc.frequency.setValueAtTime(440, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
        } else {
            osc.frequency.setValueAtTime(200, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);
        }
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
    } catch(e) {}
}

function startLesson() {
    // Losuje dokładnie 10 pytań z ogromnej puli 125 pytań przy każdym restarcie
    currentQuestions = [...masterQuestionPool].sort(() => 0.5 - Math.random()).slice(0, 10);
    currentIndex = 0;
    lives = 3;
    changeView('game-view');
    loadQuestion();
}

function loadQuestion() {
    isAnswerChecked = false;
    selectedOption = null;
    document.getElementById('feedback-msg').innerText = '';
    document.getElementById('feedback-msg').className = 'feedback';
    document.getElementById('action-btn').innerText = 'Sprawdź';
    
    const qData = currentQuestions[currentIndex];
    const container = document.getElementById('question-container');
    
    document.getElementById('progress-fill').style.width = `${(currentIndex / currentQuestions.length) * 100}%`;
    document.getElementById('lives-count').innerText = lives;

    if (qData.type === 'choice') {
        let html = `<div class="question-title">${qData.q}</div><div class="options-grid">`;
        qData.options.forEach((opt, idx) => { html += `<button class="option-btn" onclick="selectOption(${idx}, this)">${opt}</button>`; });
        html += `</div>`;
        container.innerHTML = html;
    } else if (qData.type === 'sentence') {
        currentSentenceTokens = [];
        let pool = [...qData.words].sort(() => 0.5 - Math.random());
        
        let html = `<div class="question-title">${qData.q}</div>`;
        html += `<div class="sentence-dropzone" id="dropzone" onclick="resetSentencePool()"></div>`;
        html += `<div class="tiles-pool" id="tiles-pool">`;
        pool.forEach((word, idx) => { html += `<button class="word-tile" id="tile-${idx}" onclick="pickWord('${word}', ${idx})">${word}</button>`; });
        html += `</div>`;
        container.innerHTML = html;
    }
}

function selectOption(idx, element) {
    if (isAnswerChecked) return;
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    element.classList.add('selected');
    selectedOption = idx;
}

function pickWord(word, tileIdx) {
    if (isAnswerChecked) return;
    currentSentenceTokens.push({ word, tileIdx });
    document.getElementById(`tile-${tileIdx}`).style.opacity = '0.3';
    document.getElementById(`tile-${tileIdx}`).style.pointerEvents = 'none';
    renderDropzone();
}

function resetSentencePool() {
    if (isAnswerChecked) return;
    currentSentenceTokens = [];
    document.querySelectorAll('.word-tile').forEach(t => { t.style.opacity = '1'; t.style.pointerEvents = 'auto'; });
    renderDropzone();
}

function renderDropzone() {
    const dropzone = document.getElementById('dropzone');
    dropzone.innerHTML = '';
    currentSentenceTokens.forEach((item, index) => {
        const span = document.createElement('button');
        span.className = 'word-tile';
        span.innerText = item.word;
        span.onclick = (e) => {
            e.stopPropagation();
            if (isAnswerChecked) return;
            document.getElementById(`tile-${item.tileIdx}`).style.opacity = '1';
            document.getElementById(`tile-${item.tileIdx}`).style.pointerEvents = 'auto';
            currentSentenceTokens.splice(index, 1);
            renderDropzone();
        };
        dropzone.appendChild(span);
    });
}

function getPraiseMsg() {
    const msgs = [
        `Brawo ${userName}, tak trzymaj! 🎉`,
        `Świetnie Ci idzie, ${userName}! 🚀`,
        `Idealnie ${userName}! ✨`
    ];
    return msgs[Math.floor(Math.random() * msgs.length)];
}

function getFailMsg(correctText) {
    const msgs = [
        `${userName}, musisz jeszcze nad tym poćwiczyć, nie poddawaj się! 💪 (Poprawna: ${correctText})`,
        `Ojej ${userName}, spróbuj zapamiętać! (Poprawna: ${correctText})`,
        `Blisko ${userName}, następnym razem się uda! (Poprawna: ${correctText})`
    ];
    return msgs[Math.floor(Math.random() * msgs.length)];
}

function handleAction() {
    const btn = document.getElementById('action-btn');
    const feedback = document.getElementById('feedback-msg');
    const qData = currentQuestions[currentIndex];

    if (!isAnswerChecked) {
        let isCorrect = false;

        if (qData.type === 'choice') {
            if (selectedOption === null) return;
            isCorrect = (selectedOption === qData.correct);
        } else if (qData.type === 'sentence') {
            const userSentence = currentSentenceTokens.map(t => t.word);
            if (userSentence.length === 0) return;
            isCorrect = (userSentence.length === qData.correct.length && userSentence.every((val, i) => val === qData.correct[i]));
        }

        isAnswerChecked = true;
        playSound(isCorrect);

        if (isCorrect) {
            feedback.innerText = getPraiseMsg();
            feedback.className = 'feedback correct';
            btn.innerText = 'Dalej';
        } else {
            lives--;
            document.getElementById('lives-count').innerText = lives;
            let correctText = qData.type === 'choice' ? qData.options[qData.correct] : qData.correct.join(' ');
            
            feedback.innerText = getFailMsg(correctText);
            feedback.className = 'feedback wrong';
            btn.innerText = 'Dalej';

            if (lives <= 0) {
                setTimeout(() => {
                    alert(`Koniec żyć ${userName}! Spróbuj ponownie.`);
                    changeView('menu-view');
                }, 2500);
                return;
            }
        }
    } else {
        currentIndex++;
        if (currentIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            streak++;
            localStorage.setItem('duo_streak', streak);
            document.getElementById('streak-count').innerText = streak;
            
            document.getElementById('dancer-avatar').src = userPic;
            document.getElementById('success-message').innerText = `Gratulacje ${userName}!`;
            document.getElementById('end-streak').innerText = streak;
            changeView('success-view');
        }
    }
}

function quitLesson() {
    if (confirm('Czy na pewno chcesz przerwać lekcję?')) changeView('menu-view');
}
