class Customer{
    constructor(id,customerNumber){
        this.id = id;
        this.customerNumber = customerNumber;
        this.name = name;
    }
}
let customer = new Customer(5,152)
//prototyping
customer.name = "Güray";

console.log(customer.id)
console.log(customer.name)
console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber,firstName)
        this.firstName = firstName

    }
}

class CorporatedCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}








































