import Book from "./Book";
export default function BookOne({books}){
    return(
        <div>
            <h3>Book Name:{books.length} </h3>
            {
            books.map(book => <Book book={book}></Book>)
}
        </div>
    )

}