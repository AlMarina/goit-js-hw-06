const listEl = document.querySelector("#categories")
console.log(`Number of categories: ${listEl.children.length}`);



    [...listEl.children].forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});