import './Book.css'
export default function Books({book}){
    const {name, price} = book
    return(
        <div className='book'>
            <h3>Books: {name} </h3>
            <p>Price: {price}</p>
        </div>
    )
}