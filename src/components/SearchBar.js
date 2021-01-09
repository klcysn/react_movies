

const SearchBar = (props) =>{
  
    return (
      <div className="mb-4">
        <nav class="navbar navbar-light bg-light w-100">
          <div class="container-fluid w-100">
            <form class="d-flex col-12">
              <input
                className="form-control col-12"
                type="search"
                placeholder="Search Movie..."
                aria-label="Search"
                onChange={props.handleSearch}
              />
            </form>
          </div>
        </nav>
      </div>
    );
}

export default SearchBar