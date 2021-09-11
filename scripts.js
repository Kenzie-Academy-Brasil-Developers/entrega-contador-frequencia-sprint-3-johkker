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

        const orderedList = document.createElement("ol");
        orderedList.style.listStyle = "none";
        const letters = document.getElementById("lettersDiv");
        const words = document.getElementById("wordsDiv")
        letters.appendChild(orderedList);
        words.appendChild(orderedList)

    for (let letter in letterCounts) {

        const textContent = `${letter}: ${letterCounts[letter]} `;
        const listItems = document.createElement("li")
        listItems.innerText = textContent;
        orderedList.appendChild(listItems);
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
        listItems.innerText = textContent;
        orderedList.appendChild(listItems);
    }

}

