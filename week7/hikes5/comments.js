
//1.When the app loads we see a list of all hikes...below we should also see a list of all comments with type:hike.

//2.When a hike is touched it will show us the details for that hike. 
//We should also see any comments for that hike, and an input and button to add a new comment.

//3.When the submit comment button is touched...


function getAllComments(){
  localStorage.getItem('type')

}

renderCommentList()
function addComment(){
  //DOM
   //create the form
   const commentForm = document.createElement("form");
   commentForm.setAttribute("method", "post");
   //get hike name
   //get date
   const date = new Date();
   //get coment
   const textComment = document.createElement("input");
   textComment.setAttribute("type", "text")
   textComment.setAttribute("id", "comment")

  const button = document.createElement('button');
  button.setAttribute('type', 'submit')
  commentForm.append(textComment, button)
  button.addEventListener('click',addComment)

  //user input
  const aComment = documnet.getElementById('comment').value
  newComment.content = aComment

  renderCommentList();
//put into an array
const allComments = [];
allComments.push(newComment);
}

//a comment
const newComment = {
  name: hikeName,
  date: new Date(),
  content: Comment
};

function filterCommentsByName() {}

//store to ls
function writeToLS(){}
function readFromLS(){}
localStorage.getItem('type')
localStorage.setItem('type')