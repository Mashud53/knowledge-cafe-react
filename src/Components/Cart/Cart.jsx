

const Cart = ({ selectedBook, readtime }) => {
    
    
    return (
        <div className="bg-gray-200 rounded-lg">
            <h3 className="p-2 mx-auto">Spent time on read : {readtime}min</h3>
            <div className="mt-10 ">
                <div className="m-2 p-2">
                    <h1>Bookmarked Blogs : {selectedBook.length}</h1>
                    {
                        selectedBook.map(item =>
                            <h2 key={item.id} className="text-xl bg-white rounded-lg mt-2 p-2 ">{item.title}</h2>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Cart;