var makeList = document.getElementById('lessons');
const links = [
    {
        label: "01: Lesson1",
        url: "week1/w1.html"
    },
    {
        label: "02: Lesson2",
        url: "week2/w2.html"
    }
]

for (let i = 0; i<links.length; i++){
let li = document.createElement('li');
let a = document.createElement('a');
a.textContent = links[i].label;
a.setAttribute('href',links[i].url);
li.appendChild(a);
makeList.appendChild(li);
}


