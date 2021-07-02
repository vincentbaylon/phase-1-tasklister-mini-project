document.querySelector('#create-task-form').addEventListener('submit', (e) => {
  e.preventDefault()

  let newTask = e.target['new-task-description'].value
  addTask(newTask)
})

function addTask(task) {
  let li = document.createElement('li')
  let ul = document.querySelector('#tasks')
  let btn = document.createElement('button')

  li.textContent = task
  btn.textContent = 'X'

  li.append(btn)
  ul.append(li)

  btn.addEventListener('click', () => {
    li.remove()
  })
}