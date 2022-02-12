const paragraph = document.getElementById('c');
paragraph.innerHTML = paragraph.innerText
    .split(' ')
    .map(word => word.length > 8 ?
    <span style="background-color: yellow">${word}</span> : word)
    .join(' ');