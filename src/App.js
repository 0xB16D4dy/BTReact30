import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="/">CyberSoft</a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link active" href="/BaiTapLayOutComponent">
                    BaiTap 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/BaiTapGioHangComponent">
                    BaiTap 2
                  </a>
                </li>
              </ul>
              <form className="d-flex my-2 my-lg-0">
                <input
                  className="form-control me-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div className="container" style={{minHeight:613}}>
          <Outlet/>
        </div>
        <footer className="bg-dark text-center text-white p-5">
          Footer
        </footer>
    </div>
  );
}

export default App;
