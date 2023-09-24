// create class Product with 5 parameters
class Products {
  constructor(id, description, price, quantity) {
    this.id = id
    this.description = description
    this.price = price
    this.quantity = quantity
    this.totalValue = function() {
      return this.price * this.quantity
    }
  }
}
// create 5 products objects
const product1 = new Products(9781118008188, "HTML and CSS: Design and Build WebTransportBidirectionalStream", 22.26, 10)
const product2 = new Products(9781491952023, "JavaScript: The Definitive Guide 7/Employee", 41.33, 7)
const product3 = new Products(9781449331818, "Learning JavaScript Design Patterns 1/Employee", 25.99, 3)
const product4 = new Products(9781617292422, "Express in Action: Writing, building, and testing Node.js application 1/Employee",34.91, 3)
const product5 = new Products(9781491954461, "MongoDB The Definitive Guide", 33.70, 8)

//create class Services with 4 parameters
class Services {
  constructor(id, description, hourlyRate, minBilHours) {
    this.id = id
    this.description = description
    this.hourlyRate = hourlyRate
    this.minBilHours = minBilHours
  }
}
//create 3 Services objects
const service1 = new Services(100, "Website Design", 150, 25)
const service2 = new Services(101, "DevOps Consulting", 125, 50)
const service3 = new Services(102, "Database Design", 125, 15)

//class Employee with 4 parameters
class Employees {
  constructor(id, firstName, lastName, salary) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.salary = salary
  }
}
//create 5 employees objects
const employee1 = new Employees(1007, "Beethoven", "Ludwig", 13.99)
const employee2 = new Employees(1008, "Bach", "Johnan", 22.30)
const employee3 = new Employees(1009, "Mozart", "Wolfgang", 19.95)
const employee4 = new Employees(1010, "Brahms", "Johannes", 12.00)
const employee5 = new Employees(1011, "Haydn", "Joseph", 32.50)

// add click event listener to the button
let onclick = document.getElementById("btnDisplayListing")
onclick.addEventListener('click', main)

function main() {
// get the value from user
let choice = document.getElementById("listing").value
const output = document.getElementById("output")
  switch (choice) {
    case 'products':
      let tblProducts = `
        <h2>Javazon Products</h2>
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
             <th>Total Value</th>
            </tr>
            <tr>
              <td>${product1.id}</td>
              <td>${product1.description}</td>
              <td>${product1.price.toFixed(2)}</td>
              <td>${product1.quantity}</td>
              <td>${product1.totalValue().toFixed(2)}</td>
            </tr>
            <tr>
              <td>${product2.id}</td>
              <td>${product2.description}</td>
              <td>${product2.price.toFixed(2)}</td>
              <td>${product2.quantity}</td>
              <td>${product2.totalValue().toFixed(2)}</td>
            </tr>
            <tr>
              <td>${product3.id}</td>
              <td>${product3.description}</td>
              <td>${product3.price.toFixed(2)}</td>
              <td>${product3.quantity}</td>
              <td>${product3.totalValue().toFixed(2)}</td>
            </tr>
            <tr>
              <td>${product4.id}</td>
              <td>${product4.description}</td>
              <td>${product4.price.toFixed(2)}</td>
              <td>${product4.quantity}</td>
              <td>${product4.totalValue().toFixed(2)}</td>
            </tr>
            <tr>
              <td>${product5.id}</td>
              <td>${product5.description}</td>
              <td>${product5.price.toFixed(2)}</td>
              <td>${product5.quantity}</td>
              <td>${product5.totalValue().toFixed(2)}</td>
            </tr>
          </thead>
        </table>
    `
 tblProducts += `</tbody></table>`
 output.innerHTML = tblProducts
    break
// case for services
    case 'services':
      let tblServices = `
        <h3>Javazon Services</h3>
        <table>
          <thead>
            <tr>
              <th>Service ID</th>
              <th>Description</th>
              <th>Hourly Rate</th>
              <th>Minimum Billable hours</th>
            </tr>
            <tr>
              <td>${service1.id}</td>
              <td>${service1.description}</td>
              <td>${service1.hourlyRate.toFixed(2)}</td>
              <td>${service1.minBilHours}</td>
            </tr>
            <tr>
              <td>${service2.id}</td>
              <td>${service2.description}</td>
              <td>${service2.hourlyRate.toFixed(2)}</td>
              <td>${service2.minBilHours}</td>
            </tr>
            <tr>
              <td>${service3.id}</td>
              <td>${service3.description}</td>
              <td>${service3.hourlyRate.toFixed(2)}</td>
              <td>${service3.minBilHours}</td>
            </tr>
        </thead>
      </table>        
    `
    tblServices += `</tbody></table>`
    output.innerHTML = tblServices
      break
// case for employees
    case 'employees':
      let tblEmployees = `
        <h3>Javazon Employees</h3>
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Salary</th>
              </tr>
              <tr>
                <td>${employee1.id}</td>
                <td>${employee1.firstName}</td>
                <td>${employee1.lastName}</td>
                <td>${employee1.salary.toFixed(2)}</td>
              </tr>
              <tr>
                <td>${employee2.id}</td>
                <td>${employee2.firstName}</td>
                <td>${employee2.lastName}</td>
                <td>${employee2.salary.toFixed(2)}</td>
              </tr>
              <tr>
                <td>${employee3.id}</td>
                <td>${employee3.firstName}</td>
                <td>${employee3.lastName}</td>
                <td>${employee3.salary.toFixed(2)}</td>
              </tr>
              <tr>
                <td>${employee4.id}</td>
                <td>${employee4.firstName}</td>
                <td>${employee4.lastName}</td>
                <td>${employee4.salary.toFixed(2)}</td>
              </tr>
              <tr>
                <td>${employee5.id}</td>
                <td>${employee5.firstName}</td>
                <td>${employee5.lastName}</td>
                <td>${employee5.salary.toFixed(2)}</td>
              </tr>
            </thead>
          </table>
      `
      tblEmployees += `</tbody></table>`
      output.innerHTML = tblEmployees  
        break
// case for employees
      case 'select':
        document.getElementById("myContent").style.display = "none"  
  }
}





