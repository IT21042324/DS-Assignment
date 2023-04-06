import { Link } from "react-router-dom";
import SideMenu from "../../components/SideMenu";

export default function AddProduct() {
    return(
        <div>
            <SideMenu />
            <section className="main-wrap">
                <div className="content-main" style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <h2>Add New Product</h2>
                        <p>Add your products here</p>
                    </div>
                    <div>
                        <Link className="btn btn-primary" to={"/seller/product"}>Back</Link>
                    </div>
                </div>

                <div class="card mb-4">
                    <header class="card-header">
                        <h4>Product</h4>
                        <div>
                            <Link className="btn btn-success" to={"/seller/add-products"}>
                             Submit</Link>
                        </div>
                    </header>
                    <form>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label for="validationCustom01">Product title</label>
                                    <input type="text" class="form-control" id="validationCustom01" 
                                        placeholder="Type here" required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col">
                                    <label for="validationCustom01">Product description</label>
                                    <input type="text" class="form-control" id="validationCustom01" 
                                        placeholder="Type here" required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label for="validationCustom01">Store name</label>
                                    <input type="text" class="form-control" id="validationCustom01" 
                                        placeholder="Type here" required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col">
                                    <label for="validationCustom01">Quantity</label>
                                    <input type="number" class="form-control" id="validationCustom01" 
                                        placeholder="0" required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col">
                                    <label for="validationCustom01">Image</label>
                                    <input type="file" class="form-control" id="validationCustom01" 
                                        placeholder="0.00" required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label for="validationCustom01">Unit Price</label>
                                    <input type="text" class="form-control" id="validationCustom01" 
                                        placeholder="0.00" required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label for="validationCustom01">Discount</label>
                                    <input type="text" class="form-control" id="validationCustom01" 
                                        placeholder="0.00" required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}