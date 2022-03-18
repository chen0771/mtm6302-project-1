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

const $addIdea = document.getElementById('form');
const $completed = document.getElementById('completed');
const $list = document.getElementById('list');


//add html dinamcally to the browser
function listData(){
  const html = []

  for(let i = 0; i < data.ideas.length; i++ ){
    if ("currentUser" == data.ideas[i].username) {
      html.push(`<li class="ideasBox">
                  <div class="number" id="number">
                      <button id="increase" class="bi bi-chevron-up increase"></button>
                      <div class="value">${data.ideas[i].score}</div>
                      <button id="decrease" class="bi bi-chevron-down decrease"></button>
                  </div>
                  <div>
                    <div class="current-user">
                      <h2>${data.ideas[i].username}</h2>
                      <p class="you"> You </p>
                      <button id="delete" class="bi bi-trash-fill" data-delete="${i}"> Delete </button>
                      <button id="edit" class="bi bi-pen-fill delete"> Edit </button>
                    </div>
                      <p> ${data.ideas[i].content} </p>
                  </div>
              </li>  <hr>`)
    } else {
      html.push(`<li class="ideasBox">
                    <div class="number" id="number">
                        <button id="increase" class="bi bi-chevron-up increase"></button>
                        <div class="value">${data.ideas[i].score}</div>
                        <button id="decrease" class="bi bi-chevron-down decrease"></button>
                    </div>
                    <div>
                        <h2>${data.ideas[i].username}</h2>
                        <p> ${data.ideas[i].content} </p>
                    </div>
                </li>  <hr>`)
            }
    }
    $list.innerHTML = html.join('')
}

listData()

//add new Ideas to the idea form
const $form = document.getElementById('form')
const $content = document.getElementById('content')

$form.addEventListener('submit', function (e){
  e.preventDefault()
    data.ideas.push({username: 'currentUser',
                    content: $content.value,
                    score: '0'})

    $form.reset()

    listData()
})
