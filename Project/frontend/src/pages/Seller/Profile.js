import { Link } from "react-router-dom";
import SideMenu from "../../components/SideMenu";

export default function Profile() {
    return(
        <div>
            <SideMenu />
            <section className="main-wrap">
                <div className="content-main" style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <h2>Seller Profile</h2>
                        <p>Manage seller profile here</p>
                    </div>
                    <div>
                        <Link className="btn btn-primary" to={"/seller"}>Back</Link>
                    </div>
                </div>

                <div class="card mb-4">
                    <header class="card-header">
                        <h4>General</h4>
                    </header>
                    <div class="card-body">
                        {/* <h5 class="card-title"></h5> */}
                        <div class="mt-4">
                            <div class="text-muted font-size-14">
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam enim ad minima veniam quis</p>
                                <p class="mb-4">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt</p>
                                <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}