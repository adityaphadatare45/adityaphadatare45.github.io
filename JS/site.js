document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       Hamburger Menu
    ========================== */

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll("#navLinks a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }


    /* =========================
       Typewriter Effect (Home Only)
    ========================== */

    const phrases = ["Aditya Phadatare", "Mobile App Developer"];
    const el = document.getElementById("typewriter-text");

    if (el) {
        let sleepTime = 100;
        let curPhraseIndex = 0;

        const sleep = (ms) =>
            new Promise((resolve) => setTimeout(resolve, ms));

        const writeLoop = async () => {
            while (true) {
                let curWord = phrases[curPhraseIndex];

                // Typing
                for (let i = 0; i < curWord.length; i++) {
                    el.innerText = curWord.substring(0, i + 1);
                    await sleep(sleepTime);
                }

                await sleep(2000);

                // Deleting
                for (let i = curWord.length; i > 0; i--) {
                    el.innerText = curWord.substring(0, i - 1);
                    await sleep(sleepTime / 2);
                }

                await sleep(500);

                curPhraseIndex =
                    curPhraseIndex === phrases.length - 1 ? 0 : curPhraseIndex + 1;
            }
        };

        writeLoop();
    }

});
