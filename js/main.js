var makeList = document.getElementById('lessons');
const links = [
    {
        label: "Lesson 1",
        url: "week1/w1.html"
    },
    {
        label: "Lesson 2",
        url: "week2/w2.html"
    },
    {
        label: "Lesson 3",
        url: "week3/w3.html"
    },
    {
        label: "Lesson 4",
        url: "week4/w4.html"
    },
    {
        label: "Lesson 5",
        url: "week5/w5.html"
    },
    {
        label: "Lesson 6",
        url: "week6/index.html"
    },
    {
        label: "Lesson 7",
        url: "week7/w7.html"
    },
    {
        label: "Lesson 8",
        url: "week8/w8.html"
    },
    {
        label: "Lesson 9",
        url: "week9/w9.html"
    },
    {
        label: "Lesson 10",
        url: "week10/w10.html"
    },
    {
        label: "Challenge",
        url: "app/index.html"
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


