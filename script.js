const data = {
  currentUser: 'currentUser',
  ideas: [{
      username: 'amyrobson',
      content: 'Non dolor veniam nostrud ad. Commodo ex officia reprehenderit eu laborum.',
      score: 3,
    },
    {
      username: 'maxblagun',
      content: 'Cupidatat veniam quis aliquip ut pariatur excepteur ut.',
      score: 10,
    },
    {
      username: 'maxblagun',
      content: 'Proident qui elit in deserunt velit eu veniam. Tempor velit cillum et dolore.',
      score: 6,
    },
    {
      username: 'maxblagun',
      content: 'Officia exercitation cupidatat enim sint ea quis reprehenderit ipsum.',
      score: 8,
    },
    {
      username: 'currentUser',
      content: 'Incididunt ut ut velit dolor irure Lorem ex nostrud et laborum commodo dolore laborum culpa.',
      score: 3,
    },
    {
      username: 'currentUser',
      content: 'Id aute eu quis tempor laborum duis nostrud proident nostrud culpa est ad.',
      score: 1,
    },
    {
      username: 'amyrobson',
      content: 'In magna cupidatat ipsum exercitation incididunt non eu amet occaecat et sint irure consequat.',
      score: 7,
    },
  ],
}

// insert html into idea element
//retrieve ideas element
// two declaration statements
//let which creates variables
//const which creates constants
const $ideas = document.getElementById('ideas');
const $form = document.getElementById('form');
const $content = document.getElementById('content');
const $username = document.getElementById('username');
const $currentUser = document.getElementById('currentUser')



function createIdeas() {

  // create an empty array to store the ideas
  const html = [];
    
  
  //loop over the ideas pushing html stings
  // to empty array
  //for: use when you need to know the index
  //for...of: use when you dont need to know the index
  //for this project the index will be needed 
  //data.idea is a array of objects
  //access an object using the index data.ideas
  //accss the user of  the second object:
  //data.ideas[1].username 
  
  
  for(let i = 0; i < data.ideas.length; i++){
     html.push(`
     <div class="card m-3">
              <div class="card-header">
                  ${data.ideas[i].username}
                  
              </div>
              <div class="card-body">
                  <p class="card-text">${data.ideas[i].content}</p>
                  </div>
              <div class="card-footer">
              <button class="btn btn-secondary upvote" data-index="${i}">+</button>
                  <small>${data.ideas[i].score}</small>
              <button class="btn btn-secondary downvote"data-index="${i}">-</button>
              <button class="btn btn-primary">Edit</button>
              <button class="btn btn-danger delete" data-index="${i}">Delete</button>
              </div>
              
          
          </div>
     `)
  }
    
  
  //use innerHTML to insert html on the page
  //use HTML array and convert to using join
  $ideas.innerHTML = html.join('');
  }
  
  //create idea by calling createIdeas function
  createIdeas();
  
  
  // add event listener to ideas element
  // to implement event delegation
  $ideas.addEventListener('click', function(e){
  
      //e.target is the element that was clicked
  
      if(e.target.classList.contains('upvote')){
          //get the idea's index
          //to access the a customed attribute
          //dataset.index
          const index = e.target.dataset.index;
          
          //get the idea of  upvote button
          const idea = data.ideas[index];
  
  
  
          //increase the score of idea the idea 
          //score++
          idea.score++;
  
          //recreate/update the idea
          createIdeas();
  
      }
  
      if(e.target.classList.contains('downvote')){
          //get the idea's index
          //to access the a customed attribute
          //dataset.index
          const index = e.target.dataset.index;
          
          //get the idea of  upvote button
          const idea = data.ideas[index];
  
  
  
          //increase the score of idea the idea 
          //score++
          idea.score--;
  
          //recreate/update the idea
          createIdeas();
  
      }
  
      if(e.target.classList.contains('delete')){
          //get the idea's index
          //to access the a customed attribute
          //dataset.index
          const index = e.target.dataset.index;
          
          //remove object from array
          // pop - remove the last item from the array
          //shift - remove the first item from the array
          //splice - remove items from anyware
          //splice three arguments:
          //1. index (starting point)
          //2. number of items to delete
          //3. items to be added
          //adding a new items at beginning
          // data.ideas.splice(0, 0, {...} );
          // remove an idea
          data.ideas.splice(index, 1);
  
          //update ideas
          createIdeas();
      }
   
  
  });
  
  