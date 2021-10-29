function Book(name, author, year){
    this.name = name;
    this.author = author;
    this.year = year;

    this.getSummary = function(){
        return `${this.name} kitobi ${this.author} tomonidan ${this.year} yili chop etilgan`
    }
}

let book1 = new Book("nodejs", "john doe", 2010)

console.log(book1.getSummary());