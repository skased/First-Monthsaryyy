const message = 'My dearest, happy 1st :). I hope this little "gift" brings a smile to your face, it isn\'t much but I still hope it does. The moment I realized you were mine and that I was yours, truly an unforgettable moment. Every day has been brighter and better ever since, and I hope it\'s the same for you. Here\'s to many more memories together, I love you more than words can express. Yours forever, Shiela. P.S, take a look at this spinning mofu lmaooo';

function showLetter() {
    document.getElementById("introText").style.opacity = 0;
    document.querySelector(".btn").style.display = "none";

    setTimeout(() => {
        const letterBox = document.getElementById("letterBox");
        const typedText = document.getElementById("typedText");
        letterBox.style.display = "block";
        let i = 0;

        function typeWriter() {
            if (i < message.length) {
                typedText.innerHTML += message.charAt(i);
                i++;
                setTimeout(typeWriter, 20);
            }
        }

        typeWriter();
    }, 600);
}