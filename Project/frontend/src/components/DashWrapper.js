import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faDollarSign, faTruck, faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";

function DashWrapper() {
    return(
        <section className="main-wrap">
            <div className="content-main" style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <h2>Seller Corner</h2>
                    <p>Whole data about your business here</p>
                </div>
                <div>
                    <Link className="btn btn-primary" to={"/"}>Back</Link>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3">
                    <div class="card card-body mb-4">
                        <article class="icontext">
                            <span class="icon icon-sm rounded-circle bg-primary-light"><FontAwesomeIcon icon={faDollarSign} /></span>
                            <div class="text">
                                <h6 class="mb-1 card-title">Revenue</h6>
                                <span>$13,456.5</span>
                                <span class="text-sm">
                                    Shipping fees are not included
                                </span>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card card-body mb-4">
                        <article class="icontext">
                            <span class="icon icon-sm rounded-circle bg-success-light"><FontAwesomeIcon icon={faTruck} /></span>
                            <div class="text">
                                <h6 class="mb-1 card-title">Orders</h6> <span>53.668</span>
                                <span class="text-sm">
                                    Excluding orders in transit
                                </span>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card card-body mb-4">
                        <article class="icontext">
                            <span class="icon icon-sm rounded-circle bg-warning-light"><FontAwesomeIcon icon={faBox} /></span>
                            <div class="text">
                                <h6 class="mb-1 card-title">Products</h6> <span>9.856</span>
                                <span class="text-sm">
                                    In 19 Categories
                                </span>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card card-body mb-4">
                        <article class="icontext">
                            <span class="icon icon-sm rounded-circle bg-info-light"><FontAwesomeIcon icon={faMoneyCheckDollar} /></span>
                            <div class="text">
                                <h6 class="mb-1 card-title">Monthly Earning</h6> <span>$6,982</span>
                                <span class="text-sm">
                                    Based in your local time.
                                </span>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            <div class="card mb-4">
                <header class="card-header">
                    <h4>Latest Orders</h4>
                </header>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>#ID</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Total Price</th>
                                    <th scope="col">Payment Status</th>
                                    <th scope="col">Payment Method</th>
                                    <th scope="col" class="text-end"> Action </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashWrapper;