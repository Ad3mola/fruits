import productsData from "../data/products.json";
import ingredientsData from "../data/ingredients.json";

const useObjectFix = () => {
  let newJson = [];

  //CROSS-REFERENCE THE TWO FILES TO GET THE INGREDIENT NAMES THROUGH THEIR IDS IN PRODUCTS' OBJECT
  productsData.products.map((product) => {
    return ingredientsData.ingredients.map((type) => {
      if (product.ingredient_ids.includes(type.id)) {
        newJson = [
          ...newJson,
          {
            id: product.id,
            name: product.name,
            recipes: type.name.toLocaleLowerCase(),
            collection: product.collection,
            is_allergen: type.is_allergen,
          },
        ];
      }
      return newJson;
    });
  });

  //FINAL RESULT TO REMOVE DUPLICATE KEYS FROM NEWJSON OBJECT AND GROUP THEIR UNIQUE VALUES
  const finalResult = Object.values(
    newJson.reduce(
      (products, { name, id, recipes, collection, is_allergen }) => {
        let product = products[id];
        !product
          ? (products[id] = {
              id,
              name,
              collection,
              is_allergen,
              recipes: [recipes],
            })
          : (product.recipes = [...product.recipes, recipes]);
        return products;
      },
      {}
    )
  );

  return finalResult;
};

export default useObjectFix;
