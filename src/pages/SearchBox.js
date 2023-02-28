const SearchBox = ()=>{
    return(
        <div className="flex justify-center m-6">
            <input type="text" placeholder="Search a restaurant you want..." className="block w-96 p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-xs "/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
        </div>
    )
}
export default SearchBox;