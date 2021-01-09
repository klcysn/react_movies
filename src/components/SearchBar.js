

const SearchBar = (props) =>{
    return (
      <div className="mb-4">
        <nav class="navbar navbar-light bg-light w-100">
          <div class="container-fluid w-100">
            <form class="d-flex w-100">
              <input
                className="form-control col-10"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={props.handleSearch}
              />
              <button className="btn btn-outline-success col-2" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
}

export default SearchBar