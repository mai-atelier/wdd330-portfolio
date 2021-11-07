var makeList = document.getElementById('lessons');
const links = [
    {
        label: "01: Lesson 1",
        url: "week1/w1.html"
    },
    {
        label: "02: Lesson 2",
        url: "week2/w2.html"
    },
    {
        label: "03: Lesson 3",
        url: "week3/w3.html"
    },
    {
        label: "04: Lesson 4",
        url: "week4/w4.html"
    },
    {
        label: "05: Lesson 5",
        url: "week5/w5.html"
    },
    {
        label: "06: Lesson 6",
        url: "week6/index.html"
    },
    {
        label: "07: Lesson 7",
        url: "week7/w7.html"
    },
    {
        label: "08: Lesson 8",
        url: "week8/w8.html"
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


