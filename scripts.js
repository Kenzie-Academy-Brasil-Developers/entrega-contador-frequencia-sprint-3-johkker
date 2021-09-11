const button = document.getElementById("countButton");
button.addEventListener("click", Counter);

function Counter() {
    let typedText = document.getElementById("textInput").value;

    typedText = typedText.toLowerCase()
    typedText = typedText.replace(/[^a-z'\s]+/g, "")


    let currentLetter = ""
    const letterCounts = {

    };

    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        }         
        else {
            letterCounts[currentLetter]++;
        }
    }

        const orderedLetters = document.createElement("ol");
        const orderedWords = document.createElement("ol");
        const letters = document.getElementById("lettersDiv");
        const words = document.getElementById("wordsDiv")
        letters.appendChild(orderedLetters);
        words.appendChild(orderedWords);

    for (let letter in letterCounts) {

        const textContent = `${letter}: ${letterCounts[letter]} `;
        const listItems = document.createElement("li")
        listItems.style.width = `${letterCounts[letter]}px`
        listItems.innerText = textContent;
        orderedLetters.appendChild(listItems);
    }


    

    let currentWord = ""
    const wordCounts = {
    }
    
    let word = typedText.split(/\s/)

    for (let i = 0; i < word.length; i++) {
        currentWord = word[i];
        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1;
        } else {
            wordCounts[currentWord]++;
        }
    }

    for (let word in wordCounts) {
        const textContent = `${word}: ${wordCounts[word]}`;
        const listItems = document.createElement("li")
        listItems.style.width = `${wordCounts[word]*4}px`
        listItems.innerText = textContent;
        orderedWords.appendChild(listItems);
    }

}

