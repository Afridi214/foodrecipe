import React from "react";

const Header = (props) => {
    const {search, onInputChange} = props;
    return (
        <div className="jumbotron">
            <h1 className="display-1"> <span class="material-icons brand_icons">fastfood</span>Food Recipes</h1>

            <div class="input-group w-50 mx-auto">
                <input type="text" class="form-control" placeholder="Search Here" value={props.search} onChange={props.onInputChange} />
                <button className="btn btn-dark">Search Recipes</button>
            </div>

        </div>

    )
}

export default Header;