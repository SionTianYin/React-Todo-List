export default function Navbar ({ items, clearItems }) {

    return (
        <nav className="navbar bg-dark px-2 py-3 border-bottom">
            <div className="container-fluid">
                <a
                    className="navbar-brand text-white"
                    href=""
                >
                    React Todo Application
                </a>
                {
                    (items.length > 0) &&
                    (
                        <button
                            className="btn btn-outline-success rounded-2 text-white"
                            onClick={() => clearItems()}
                        >
                            Clear items
                        </button>
                    )
                }
                {/* <button className="btn btn-outline-success rounded-2 text-white" onClick={btnClicked}>Clear items</button> */}
            </div>
        </nav>
    )
}