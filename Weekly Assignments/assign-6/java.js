// add click event listener to the button
let onclick = document.getElementById("btnDisplayListing")
onclick.addEventListener('click', main)

const books1 =  { txtReturnOfTheKingISBN: "0261103571", txtReturnOfTheKingTitle: "The Fellowship of Ring", txtReturnOfTheKingPages: 432 }
const books2 =  { txtReturnOfTheKingISBN: "1514297272", txtReturnOfTheKingTitle: "The Two Towers", txtReturnOfTheKingPages: 422 }
const books3 =  { txtReturnOfTheKingISBN: "1514298139", txtReturnOfTheKingTitle: "The Return of the King", txtReturnOfTheKingPages: 432 }
const authors1 = { Name: "John Ronald Reuel Tolkien", Genre: "Fantasy" }
const authors2 = { Name: "Franklin Patrick Herber Jr", Genre: "Science Fiction" }
const authors3 = { Name: "Clive Staples Lewis", Genre: "Fantasy, science fiction, children's literature" }

function main() {
// get the value from user
  let choice = document.getElementById("favoriteList").value
// initialize and assign value for variables
  const output = document.getElementById('output')
    if (choice == 'books') {
      let tblTop3FavoriteBooks = `
        <h3>Top 3 Favorite Books</h3>
        <table>
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Title</th>
              <th>Pages</th>
            </tr>
            <tr>
              <td>${books1.txtReturnOfTheKingISBN}</td>
              <td>${books1.txtReturnOfTheKingTitle}</td>
              <td>${books1.txtReturnOfTheKingPages}</td>
            </tr>
            <tr>
              <td>${books2.txtReturnOfTheKingISBN}</td>
              <td>${books2.txtReturnOfTheKingTitle}</td>
              <td>${books2.txtReturnOfTheKingPages}</td>
            </tr>
            <tr>
              <td>${books3.txtReturnOfTheKingISBN}</td>
              <td>${books3.txtReturnOfTheKingTitle}</td>
              <td>${books3.txtReturnOfTheKingPages}</td>
          </tr>
          </thead>
          <tbody>
      ` 
      tblTop3FavoriteBooks += `</tbody></table>`
      output.innerHTML = tblTop3FavoriteBooks 
      
    } else if (choice == 'authors') {
      let tblTop3FavoriteAuthors = `
        <h3>Top 3 Favorite Authors</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Genre</th>
            </tr>
            <tr>
              <td>${authors1.Name}</td>
              <td>${authors1.Genre}</td>
            </tr>
            <tr>
              <td>${authors2.Name}</td>
              <td>${authors2.Genre}</td>
            </tr>
            <tr>
              <td>${authors3.Name}</td>
              <td>${authors3.Genre}</td>
            </tr>
          </thead>
          <tbody>
      ` 
      tblTop3FavoriteAuthors += `</tbody></table>`
      output.innerHTML = tblTop3FavoriteAuthors 
      
    } else if (choice == 'select') {
      let displayContent = document.getElementById("myContent");
      displayContent.style.display = "none"
    }
    }

    
      
   
    


