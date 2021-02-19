import React, { useState } from "react";
import useObjectFix from "../../../customHooks/useObjectFix";
import Card from "../../reusables/card/Card";
// import Search from "../../reusables/search/Search";

/*The type schema for data object */
export interface IData {
  id: number;
  name: string;
  recipes: string[];
  is_allergen: boolean;
  collection: string;
}

// type FormElem = React.FormEvent<HTMLFormElement>;

function Home(): JSX.Element {
  const data: IData[] = useObjectFix();

  // const [fruits, setFruits] = useState(data);

  // const handleSubmit = (e: FormElem, value: string): void => {
  //   e.preventDefault();
  //   const fruit = fruits.filter((fruit) =>
  //     fruit.ingredients.includes(value.toLowerCase())
  //   );
  //   if (fruit.length) {
  //     setFruits(fruit);
  //     return;
  //   }
  //   setFruits(data);
  // };

  const recipe: string = "Organic Banana";
  const fruits = data.filter((fruit) =>
    fruit.recipes.includes(recipe.toLowerCase())
  );

  return (
    <div data-test="home-component">
      <h1 className="my-3 text-center">FRUITS</h1>
      {/* <Search handleSubmit={handleSubmit} /> */}
      {fruits.length ? (
        <div className="row mx-auto mt-5" data-test="fruit-container">
          {fruits.map(({ id, name, collection, recipes, is_allergen }) => (
            <Card
              key={id}
              name={name}
              id={id}
              collection={collection}
              recipes={recipes}
              is_allergen={is_allergen}
            />
          ))}
        </div>
      ) : (
        <h1>There are no fruits at this time</h1>
      )}
    </div>
  );
}

export default Home;
