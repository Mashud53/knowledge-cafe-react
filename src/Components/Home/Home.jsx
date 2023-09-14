import { useState } from "react";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import { FaBookmark } from 'react-icons/fa';


const Home = () => {
    const [books, setBooks] =useState([])
    const [selectedBook, setSelectedBook] = useState([])
    const [readtime, setReadTime] = useState(0);
    
    
    useEffect(() =>{
        fetch('./blog.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, []);
    // console.log(books);
    const handleAddBook = (book) => {
        const isExist = selectedBook.find((items) => items.id == book.id)
        if(isExist){
            return alert('Already added to bookmark')
        }

        setSelectedBook([...selectedBook, book]);
        
    };
    
    const handleaAddTime = time =>{
        const newTime = readtime + time
        setReadTime(newTime);
        


    }
    
   
    
    return (
        <div className="flex justify-between mt-10 gap-5">
            <div className="w-2/3">
                {
                    books.map(book =>
                        <div key={book.id} className="card bg-base-100 shadow-xl mb-10 p-5">
                    <img className="mx-auto w-full" src={book.cover} alt="" />
                    <div className="card-body">
                        <div className="flex justify-between my-2">
                            <div className="flex justify-between items-center gap-4 ">
                                <img className="w-20" src={book.author_img} alt="" />
                                <div>
                                    <h3>{book.author}</h3>
                                    <p>{book.posted_date}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-1">
                                <span>{book.reading_time}</span>
                                <button onClick={() =>handleAddBook(book)}><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold">{book.title}</h2>
                        <div>
                            <p><small>HASHTAG</small></p>

                        </div>
                        <button onClick={()=>handleaAddTime(book.reading_time)} >Mark as read</button>

                    </div>
                </div>
                        )
                }
            </div>
            <div className="w-1/3"> 
            <Cart selectedBook={selectedBook} readtime = {readtime}  ></Cart>
            </div>
        </div>
    );
};

export default Home;