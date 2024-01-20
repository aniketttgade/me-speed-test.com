const paragraphs = [
    "This is a sample paragraph for the typing speed test. You can start typing in the textarea below and see how many words you can type in one minute. After one minute, the results will be displayed.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer luctus justo ut sem bibendum, a egestas dui congue.",
    "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.",
    "Newspapers are the mirror of the world. It plays an important role in modern civilization. Newspapers are published in different languages ​​in our country. It helps us to gain common sense.s",
    "Plastic is a non-biodegradable material. It does not mix with soil and reduces soil fertility. It cannot be automatically recycled and harms the Earth’s life cycle. However, plastic is replacing the traditional use of jute, cotton or paper materials and is becoming a threat to the living world",
    "The computer is a miraculous scientific invention. It can store data and perform complex calculations in a very short period of time. Its primary characteristics are speed and accuracy.",
    "There are a number of distinctions between reading books and watching television. The time allotted to each programme on television is limited. On the other hand, there is a large selection of books that can be chosen from. Reading fulfils a man. Reading books does not have a time limit.",
    "The standard of television programmes for commercial purposes has steadily declined over the years. Many mega-series have taken the place of educational programmes. Even during the newscast, commercials are common.",
    "The proverb refers to how the blacksmith heats the iron in order to make it malleable. When it cools, the blacksmith loses the ability to shape it into the desired shape. Our lives are like iron; when an opportunity arises, we must be prepared to seize it in order to change our lives.",
    "Radioactive elements’ atoms can be split. Albert Einstein proposed that mass and energy are interchangeable under certain circumstances. Nuclear fission is the process by which an atom splits.",
    "You may already be aware of the importance of eating a king-size breakfast every morning. Do you understand why? Because you haven’t eaten for about 8-10 hours, your body is hungry in the morning.",
    "Positive thinking is a mindset or attitude that is characterised by optimism and happiness. A positive person expects and hopes for the best in his life.",
    "Although many people dismiss the idea of always being positive, it has numerous advantages not only for the mind but also for the body. Positivity brings joy to the soul and makes one feel lighter. As a result, we exude goodwill and joy. People gravitate towards such people. ",
    "Being negative in one’s words and actions has the opposite effect. It is common knowledge that people avoid people who spread negativity.",
    "A small amount of mass is converted into energy in this case. The energy thus released is insignificant. During this process, however, a number of subatomic particles known as neutrons are also released. ",
    "Each neutron will collide with a radioactive element, releasing additional neutrons in the process. This causes a chain reaction, releasing a massive amount of energy. This energy is converted into heat, which rapidly expands, resulting in an explosion.",
    "There is no point in moping about missed opportunities after time has passed. Wise men remain alert and recognise opportunities as they arise. ",
    " The foolish, on the other hand, sit back and watch as opportunities pass them by. Our unwillingness to take risks can frequently leave us empty-handed.",
    // Add more paragraphs as needed
];

let words, wordIndex, timer, startTime, remainingTime;

function startTypingTest() {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    words = paragraphs[randomIndex].split(' ');

    const paragraphElement = document.getElementById("paragraph");
    const userInputElement = document.getElementById("user-input");
    const resultContainer = document.getElementById("result-container");
    const timerElement = document.getElementById("timer");

    paragraphElement.innerText = paragraphs[randomIndex];
    userInputElement.value = "";
    resultContainer.innerText = "";
    timerElement.innerText = "";

    wordIndex = 0;
    startTime = new Date().getTime();
    remainingTime = 60;

    // Show the "Stop Typing Test" button
    document.getElementById("stop-button").removeAttribute("hidden");

    // Update the paragraph and start the timer
    paragraphElement.innerText = paragraphs[randomIndex];
    timer = setInterval(updateTimer, 1000);

    // Disable the start button after starting the test
    document.getElementById("start-button").disabled = true;
}

function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = (currentTime - startTime) / 1000;
    remainingTime = Math.max(0, 60 - Math.round(elapsedTime));

    document.getElementById("timer").innerText = `Time remaining: ${remainingTime} seconds`;

    if (elapsedTime >= 60) {
        clearInterval(timer);
        showResults();
    }
}

function showResults() {
    const userInput = document.getElementById("user-input").value;
    const userWords = userInput.trim().split(/\s+/);
    const correctWords = words.slice(0, userWords.length);
    const incorrectWords = words.slice(userWords.length);

    const wordsPerMinute = Math.round((userWords.length / 1) * 60);
    const accuracy = Math.round((correctWords.length / words.length) * 100);
    const wordsMissed = incorrectWords.length;

    const resultContainer = document.getElementById("result-container");
    resultContainer.innerText = `Typing Speed: ${wordsPerMinute} WPM | Accuracy: ${accuracy}% | Words Missed: ${wordsMissed}`;

    // Enable the start button and hide the stop button after displaying results
    document.getElementById("start-button").disabled = false;
    document.getElementById("stop-button").setAttribute("hidden", "true");
}

function stopTypingTest() {
    clearInterval(timer);
    showResults();
}
