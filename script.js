fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const meals = data.meals;
    meals.map((meal) => {
      const imgNode = document.createElement("img");
      imgNode.src = meal.strMealThumb;

      const root = document.querySelector("#root");

      root.appendChild(imgNode);

      const titleNode = document.createElement("h2");
      titleNode.textContent = meal.strMeal;

      root.appendChild(titleNode);

      titleNode.addEventListener("click", () => {
        const idMeal = meal.idMeal;

        root.innerHTML = "";

        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const meal = data.meals[0];

            const imgNode = document.createElement("img");
            imgNode.src = meal.strMealThumb;

            root.appendChild(imgNode);

            const titleNode = document.createElement("h2");
            titleNode.textContent = meal.strMeal;

            root.appendChild(titleNode);

            // insérer les instructions, le lien youtube etc
          });
      });
    });
  });
