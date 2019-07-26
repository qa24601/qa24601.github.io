var info = {
    parodies: [],
    characters: [],
    tags: [],
    artists: [],
    groups: [],
    languages: [],
    categories: [],
    title: document.getElementById("info").children.item(0).innerText,
    pages: document.getElementById("tags").nextElementSibling.innerText.match(/[0-9,]+/)[0].replace(/,/g, "") - 0,
    sources: document.getElementsByTagName("meta")[3].content.match(/\d+/)[0] - 0,
};
var keys = [
    "parodies",
    "characters",
    "tags",
    "artists",
    "groups",
    "languages",
    "categories",
];
for (let i = 0, a = document.getElementById("tags"); i < 7; i ++) {
    for (let j = 0, b = a.children.item(i).children.item(0); j < b.children.length; j ++) {
        info[keys[i]].push(b.children.item(j).text.replace(/ \([0-9,]+\)/, ''));
    };
};
saveAs(new Blob([JSON.stringify(info)], {type: "text/html"}), info.title + ".json");