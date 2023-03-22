
function Footer () {
    const currYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="footer-copyright text-center py-3">
                            <p>Copyright &copy; {currYear} CSSE_WE_36</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;