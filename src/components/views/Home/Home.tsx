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

/*
  * Filtered the data object for only fruits containing the Organic Banana Recipe and it down to the card component

  * A Search Component is created as an extra feature to search for all types of recipes in the data object and not just Organic Banana

  *Uncomment block of codes to test the Search feature and comment the Organic banana filter function

  */

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

  /* Organic Banana function */
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
          {fruits.map((fruit) => (
            <Card key={fruit.id} fruits={fruit} />
          ))}
        </div>
      ) : (
        <h1>There are no fruits at this time</h1>
      )}
    </div>
  );
}

export default Home;
