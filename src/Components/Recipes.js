import react from "react";

const Recipes = (props) => {
    const {recipes} = props;
    return(
        <div className="row">
            {
                recipes.map(recipes => {
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h4>{recipes.recipes.label}</h4>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Recipes;