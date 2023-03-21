import { /*faMagnifyingGlass,*/ } from "@fortawesome/free-solid-svg-icons";


function NavBar() {
    return(
        <nav>
            <div className="active">Home</div>
            <div>About</div>
            <div>Contact</div>
            {/* <div>
                <button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div> */}
        </nav>
    );
}

export default NavBar;