class Book{
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `return ${this.name} was written by ${this.author} in ${this.year};`
    }
}
let date = new Date()

date = date.getFullYear() - 1998


const book1 = new Book("nodejs", "Rayn Dal", 2009);

console.log(date);