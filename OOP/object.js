const book = {
    name: "Book one",
    author: "John Doe",
    year: "2018",

    getSummary () {
        return `${this.name} kitobi ${this.author} tomonidan ${this.year} yili chop etilgan`
    }
}

const book2 = {
    name: "Book two",
    author: "John",
    year: "2018",

    getSummary () {
        return `${this.name} kitobi ${this.author} tomonidan ${this.year} yili chop etilgan`
    }
}

console.log(book2.getSummary())