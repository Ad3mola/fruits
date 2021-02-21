import React from "react";
import CardStyle from "./style";

function Card({ fruits }: any): JSX.Element {
  const { name, recipes, collection } = fruits;
  return (
    <CardStyle className="col-md-6 col-lg-3 mt-5" data-test="card-component">
      <div className="card p-4">
        <h3
          className="font-weight-bold text-center fruit-name"
          data-test="fruit-name"
        >
          {name}
        </h3>
        <div className="recipes-container">
          <p className="font-weight-bold pt-5 mb-0">Recipes</p>
          <hr />
          <ol className=" recipe-list" data-test="recipe-container">
            {recipes && recipes.length ? (
              recipes.map((recipe: string) => <li key={recipe}> {recipe}</li>)
            ) : (
              <p>no recipes here</p>
            )}
          </ol>
        </div>
        <div className="collection-container">
          <small>
            {" "}
            <b>Type</b>:<span className="text-muted pl-2">{collection}</span>
          </small>
        </div>
      </div>
    </CardStyle>
  );
}

export default Card;
