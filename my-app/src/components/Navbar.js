function Navbar(){
    return(
        <div className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
            <a href="index.html" className="navbar-brand">Ab<span>ou</span>t Me</a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav ml-auto">
                    <a href="index.html" className="nav-item nav-link">Home</a>
                    <a href="about.html" className="nav-item nav-link">Projects</a>
                    
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle active" data-toggle="dropdown">About Me</a>
                        <div className="dropdown-menu">
                            <a href="catchaglimpse.html" className="dropdown-item">Catch a Glimpse</a>
                            <a href="detailblog.html" className="dropdown-item">Detail Blog ❣</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    )
}

export default Navbar