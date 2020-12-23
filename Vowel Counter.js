let note = document.getElementById("note");
let vowelNums = [65, 69, 73, 79, 85, 89];

function toDo() {
    let noteParsed = [...note.value.toUpperCase()];
    let noteNumbered = noteParsed.map(ch => ch.charCodeAt(0));
    let v = noteNumbered.reduce((vowels, ch) => {
        if (!vowelNums.some(num => num === ch)) {
            return vowels;
        }
        return vowels + 1;
    }, 0)
    alert(`There are ${v} vowels in this note!`);
}
