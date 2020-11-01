const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')


update.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'put' , 
        headers: {'Content - Type' : 'application/json'}, 
        body: JSON.stringify({
            name: 'test3', 
            quote: 'Its never too late'
        })
    })    
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(response => {
            window.location.reload(true)
            })    
        })
    

deleteButton.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        name: 'qaz'
        })
         })
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(response => {
            if (response === 'No quote to delete') {
                messageDiv.textContent = 'No test2 quote to delete'
        }   else {
                window.location.reload(true)
                }
            })
        .catch(console.error)
          })
          
