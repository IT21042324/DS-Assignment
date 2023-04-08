import { Link } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
// import { ItemMapper } from "../Buyer/ItemMapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function ProductList() {
    return(
        <div>
            <SideMenu />
            <section className="main-wrap">
                <div className="content-main" style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <h2>Product List</h2>
                        <p>Manage your products here</p>
                    </div>
                    <div>
                        <Link className="btn btn-primary" to={"/seller"}>Back</Link>
                    </div>
                </div>

                <div class="card mb-4">
                    <header class="card-header">
                        <h4>Product</h4>
                        <div>
                            <Link className="btn btn-success" to={"/seller/add-product"}>
                                <FontAwesomeIcon icon={faPlus} /> Add Products</Link>
                        </div>
                    </header>
                    <div class="card-body">
                        {/* <ItemMapper /> */}
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#ID</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Store</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Un. Price</th>
                                        <th scope="col">Dis. Price</th>
                                        <th scope="col" class="text-end"> Action </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}