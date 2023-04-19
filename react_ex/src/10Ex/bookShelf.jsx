import React,{useState} from 'react'
import Button from '@mui/material/Button';
import images from './imgImports.js'

const BookShelf = () => {
    const [bookList, setBookList] = useState([
        {
            id:1,
            name:'The Candy House',
            author:'Jennifer Egan',
            yr_of_pub:2010,
            price:400,
            image:images[2].img,
        },
        {
            id:2,
            name:'Checkout 19',
            author:'Claire-Louise Bennett',
            yr_of_pub:2015,
            price:500,
            image:images[0].img,
        },
        {
            id:3,
            name:'Demon Copperhead',
            author:'Barbara Kingsolver',
            yr_of_pub:2018,
            price:700,
            image:images[1].img,
        },
        {
            id:4,
            name:'The Furrows',
            author:'Namwali Serpell',
            yr_of_pub:2020,
            price:900,
            image:images[3].img,
        },
        {
            id:5,
            name:'Trust',
            author:'Hernan Diaz',
            yr_of_pub:2022,
            price:1100,
            image:images[4].img,
        },
    ])
    const sortByYear = () =>{
        setBookList(
            bookList.sort(
                (b1,b2) => (b1.yr_of_pub>b2.yr_of_pub) ? 1
                    : (b1.yr_of_pub<b2.yr_of_pub) ? -1 : 0
            )
        )
    }
  return (
    <div>
    {
        bookList.map(book=>(
            <div>
                <img src={book.image} alt={book.name}/>
                <h4>{book.name}</h4>
                <h4>{book.author}</h4>
                <h4>{book.price}</h4>
                <h4>{book.yr_of_pub}</h4>
            </div>
        ))
    }
    <Button onClick={sortByYear}>year</Button>
    </div>
  )
}

export default BookShelf