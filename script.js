// Weekly shopping list with amounts for two adults.
const weeklyShoppingList = [
  "Rolled oats - 2 cups",
  "Milk or almond milk - 4 quarts",
  "Greek yogurt - 2 quarts",
  "Cottage cheese - 1 pint (2 cups)",
  "Eggs - 1 dozen",
  "Protein powder - 7 scoops",
  "Chia seeds - 1/2 cup",
  "Granola - 2 cups",
  "Almond butter - 1/2 cup",
  "Peanut butter - 1/2 cup",
  "Almonds - 1 cup",
  "Walnuts - 1/2 cup",
  "Mixed nuts - 2 cups",
  "Honey - 1 small jar",
  "Olive oil - 1 bottle",
  "Mustard - 1 small jar",
  "Parmesan - 1/2 cup",
  "Feta - 1 small block",
  "Black pepper - 1 small jar",
  "Rosemary - 1 small bunch or jar",
  "Basil - 1 small bunch",
  "Cinnamon - 1 small jar",
  "Garlic - 1 head",
  "Lemons - 4",
  "Bananas - 6",
  "Apples - 7",
  "Blueberries - 2 cups",
  "Strawberries - 2 cups",
  "Raspberries - 2 cups",
  "Mixed berries - 5 cups",
  "Peaches - 2",
  "Mixed greens - 6 cups",
  "Baby spinach - 6 cups",
  "Lettuce - 2 heads",
  "Cucumbers - 2",
  "Cherry tomatoes - 2 cups",
  "Tomatoes - 5",
  "Bell peppers - 4",
  "Carrots - 6 medium",
  "Celery - 1 bunch",
  "Zucchini - 3",
  "Sweet potatoes - 2 small",
  "Potatoes - 4 medium",
  "Green beans - 2 cups",
  "Broccoli - 2 cups",
  "Asparagus - 2 cups",
  "Frozen berries - 2 cups",
  "Onions - 2 medium",
  "Whole-grain bread - 1 loaf",
  "Whole-grain wraps - 4",
  "Quinoa - 2 cups dry",
  "Whole-wheat pasta - 12 oz",
  "Chicken breast - 1 lb",
  "Chicken thighs - 2.5 lb (about 6 pieces)",
  "Turkey breast deli slices - 1 lb",
  "Salmon fillets - 2 (about 12 oz)",
  "Cod fillets - 2 (about 12 oz)",
  "Shrimp - 12 oz",
  "Tuna - 4 cans",
  "Chickpeas - 1 can",
  "Lentils - 1 cup dry"
];

// Meal plan data for each day with structured meals, ingredients, steps, and grocery lists.
const mealPlan = {
  mon: {
    label: "Monday",
    groceryList: [
      "Rolled oats",
      "Milk or oat milk",
      "Blueberries",
      "Almonds",
      "Cinnamon",
      "Banana",
      "Protein powder",
      "Peanut butter",
      "Chicken breast",
      "Mixed greens",
      "Cherry tomatoes",
      "Cucumber",
      "Apples",
      "Mixed nuts",
      "Olive oil",
      "Lemon",
      "Salmon fillet",
      "Quinoa",
      "Broccoli",
      "Garlic",
      "Black pepper"
    ],
    meals: [
      {
        type: "Breakfast",
        name: "Blueberry Almond Oatmeal",
        ingredients: [
          "1/2 cup rolled oats",
          "1 cup milk or oat milk",
          "1/2 cup blueberries",
          "1 tbsp sliced almonds",
          "Pinch of cinnamon"
        ],
        steps: [
          "Combine oats and milk in a small pot.",
          "Simmer for 4-5 minutes, stirring often.",
          "Stir in cinnamon and blueberries.",
          "Top with almonds and serve warm."
        ]
      },
      {
        type: "Snack (AM)",
        name: "Protein Banana Smoothie",
        ingredients: [
          "1 banana",
          "1 cup milk or oat milk",
          "1 scoop protein powder",
          "1 tbsp peanut butter"
        ],
        steps: [
          "Add all ingredients to a blender.",
          "Blend until smooth.",
          "Pour into a glass.",
          "Drink immediately."
        ]
      },
      {
        type: "Lunch",
        name: "Chicken Salad Bowl",
        ingredients: [
          "3 oz cooked chicken breast",
          "2 cups mixed greens",
          "1/2 cup cherry tomatoes",
          "1/2 cucumber, sliced",
          "1 tbsp olive oil",
          "1 tsp lemon juice"
        ],
        steps: [
          "Arrange greens in a bowl.",
          "Top with chicken, tomatoes, and cucumber.",
          "Whisk olive oil and lemon juice.",
          "Drizzle dressing and toss lightly."
        ]
      },
      {
        type: "Snack (PM)",
        name: "Apple Slices & Mixed Nuts",
        ingredients: [
          "1 apple, sliced",
          "1/4 cup mixed nuts"
        ],
        steps: [
          "Slice the apple.",
          "Serve with mixed nuts.",
          "Snack as needed."
        ]
      },
      {
        type: "Dinner",
        name: "Salmon with Quinoa & Broccoli",
        ingredients: [
          "1 salmon fillet",
          "2 tbsp olive oil",
          "1 cup cooked quinoa",
          "1 cup broccoli florets",
          "1 clove garlic, minced",
          "Salt and pepper"
        ],
        steps: [
          "Roast broccoli with half the olive oil at 425F for 12-15 minutes.",
          "Season salmon with salt, pepper, and remaining oil.",
          "Bake salmon for 10-12 minutes.",
          "Serve with quinoa and roasted broccoli."
        ]
      }
    ]
  },
  tue: {
    label: "Tuesday",
    groceryList: [
      "Greek yogurt",
      "Strawberries",
      "Walnuts",
      "Milk or almond milk",
      "Protein powder",
      "Frozen berries",
      "Apples",
      "Mixed nuts",
      "Whole-grain wrap",
      "Turkey breast",
      "Spinach",
      "Lettuce",
      "Cucumber",
      "Cherry tomatoes",
      "Tuna",
      "Olive oil",
      "Lemon"
    ],
    meals: [
      {
        type: "Breakfast",
        name: "Strawberry Walnut Yogurt",
        ingredients: [
          "1 cup Greek yogurt",
          "1/2 cup strawberries, sliced",
          "2 tbsp walnuts, chopped",
          "1 tsp honey"
        ],
        steps: [
          "Spoon yogurt into a bowl.",
          "Top with strawberries and walnuts.",
          "Drizzle with honey and serve."
        ]
      },
      {
        type: "Snack (AM)",
        name: "Berry Protein Shake",
        ingredients: [
          "1 cup milk or almond milk",
          "1 scoop protein powder",
          "1/2 cup frozen berries"
        ],
        steps: [
          "Add ingredients to a blender.",
          "Blend until smooth.",
          "Pour into a glass.",
          "Serve immediately."
        ]
      },
      {
        type: "Lunch",
        name: "Turkey Apple Wrap",
        ingredients: [
          "1 whole-grain wrap",
          "3 slices turkey",
          "1/2 apple, thinly sliced",
          "1 cup spinach",
          "1 tsp mustard"
        ],
        steps: [
          "Spread mustard on the wrap.",
          "Layer turkey, apple, and spinach.",
          "Roll tightly and slice in half.",
          "Serve immediately."
        ]
      },
      {
        type: "Snack (PM)",
        name: "Mixed Nuts Cup",
        ingredients: [
          "1/4 cup mixed nuts"
        ],
        steps: [
          "Portion mixed nuts into a small bowl.",
          "Snack as needed."
        ]
      },
      {
        type: "Dinner",
        name: "Tuna Lettuce Wraps",
        ingredients: [
          "1 can tuna, drained",
          "4 large lettuce leaves",
          "1/2 cup cucumber, diced",
          "1/2 cup cherry tomatoes, halved",
          "1 tbsp olive oil",
          "1 tsp lemon juice",
          "Salt and pepper"
        ],
        steps: [
          "Mix tuna with olive oil, lemon juice, salt, and pepper.",
          "Spoon tuna into lettuce leaves.",
          "Top with cucumber and tomatoes.",
          "Serve immediately."
        ]
      }
    ]
  },
  wed: {
    label: "Wednesday",
    groceryList: [
      "Whole-grain bread",
      "Eggs",
      "Spinach",
      "Tomato",
      "Olive oil",
      "Milk or almond milk",
      "Protein powder",
      "Banana",
      "Apples",
      "Mixed nuts",
      "Canned chickpeas",
      "Cucumber",
      "Lemon",
      "Feta",
      "Whole-wheat pasta",
      "Zucchini",
      "Parmesan",
      "Basil"
    ],
    meals: [
      {
        type: "Breakfast",
        name: "Spinach Egg Toast",
        ingredients: [
          "2 slices whole-grain bread",
          "2 eggs",
          "1 cup spinach",
          "1 tsp olive oil",
          "Salt and pepper"
        ],
        steps: [
          "Saute spinach in olive oil until wilted.",
          "Scramble eggs with salt and pepper.",
          "Toast bread and top with spinach and eggs.",
          "Serve warm."
        ]
      },
      {
        type: "Snack (AM)",
        name: "Green Protein Shake",
        ingredients: [
          "1 cup milk or almond milk",
          "1 scoop protein powder",
          "1 banana",
          "1 cup spinach"
        ],
        steps: [
          "Add ingredients to a blender.",
          "Blend until smooth.",
          "Pour into a glass.",
          "Serve immediately."
        ]
      },
      {
        type: "Lunch",
        name: "Mediterranean Chickpea Salad",
        ingredients: [
          "1 cup chickpeas",
          "1/2 cucumber, diced",
          "1/2 tomato, diced",
          "2 tbsp feta",
          "1 tbsp olive oil",
          "1 tsp lemon juice",
          "Salt and pepper"
        ],
        steps: [
          "Combine chickpeas, cucumber, tomato, and feta.",
          "Whisk olive oil, lemon juice, salt, and pepper.",
          "Toss dressing with salad.",
          "Serve chilled or room temp."
        ]
      },
      {
        type: "Snack (PM)",
        name: "Mixed Nuts Cup",
        ingredients: [
          "1/4 cup mixed nuts"
        ],
        steps: [
          "Portion mixed nuts into a small bowl.",
          "Snack as needed."
        ]
      },
      {
        type: "Dinner",
        name: "Whole-Wheat Pasta Primavera",
        ingredients: [
          "6 oz whole-wheat pasta",
          "1 zucchini, sliced",
          "1/2 cup cherry tomatoes",
          "1 tbsp olive oil",
          "2 tbsp parmesan",
          "Basil leaves"
        ],
        steps: [
          "Cook pasta until al dente.",
          "Saute zucchini and tomatoes in olive oil for 4 minutes.",
          "Toss pasta with vegetables.",
          "Finish with parmesan and basil."
        ]
      }
    ]
  },
  thu: {
    label: "Thursday",
    groceryList: [
      "Chia seeds",
      "Milk or almond milk",
      "Peaches or berries",
      "Protein powder",
      "Banana",
      "Peanut butter",
      "Apples",
      "Mixed nuts",
      "Chicken thighs",
      "Sweet potato",
      "Green beans",
      "Olive oil",
      "Lettuce",
      "Cucumber",
      "Tomato",
      "Tuna",
      "Lemon"
    ],
    meals: [
      {
        type: "Breakfast",
        name: "Chia Pudding with Fruit",
        ingredients: [
          "3 tbsp chia seeds",
          "3/4 cup milk or almond milk",
          "1/2 cup diced peaches or berries",
          "1 tsp honey"
        ],
        steps: [
          "Stir chia seeds into milk and refrigerate overnight.",
          "Stir again to loosen.",
          "Top with fruit and honey.",
          "Serve chilled."
        ]
      },
      {
        type: "Snack (AM)",
        name: "Peanut Butter Protein Shake",
        ingredients: [
          "1 banana",
          "1 cup milk or almond milk",
          "1 scoop protein powder",
          "1 tbsp peanut butter"
        ],
        steps: [
          "Add all ingredients to a blender.",
          "Blend until smooth.",
          "Pour into a glass and enjoy."
        ]
      },
      {
        type: "Lunch",
        name: "Roasted Chicken & Sweet Potato",
        ingredients: [
          "3 oz roasted chicken",
          "1 small sweet potato, cubed",
          "1 cup green beans",
          "1 tbsp olive oil",
          "Salt and pepper"
        ],
        steps: [
          "Roast sweet potato cubes at 425F for 20 minutes.",
          "Steam green beans for 4-5 minutes.",
          "Slice chicken and plate with vegetables.",
          "Drizzle with olive oil and season."
        ]
      },
      {
        type: "Snack (PM)",
        name: "Apple Slices & Mixed Nuts",
        ingredients: [
          "1 apple, sliced",
          "1/4 cup mixed nuts"
        ],
        steps: [
          "Slice the apple.",
          "Serve with mixed nuts.",
          "Snack as needed."
        ]
      },
      {
        type: "Dinner",
        name: "Tuna Lettuce Boats",
        ingredients: [
          "1 can tuna, drained",
          "4 large lettuce leaves",
          "1/2 cucumber, diced",
          "1/2 tomato, diced",
          "1 tbsp olive oil",
          "1 tsp lemon juice",
          "Salt and pepper"
        ],
        steps: [
          "Mix tuna with olive oil, lemon juice, salt, and pepper.",
          "Spoon tuna into lettuce leaves.",
          "Top with cucumber and tomato.",
          "Serve immediately."
        ]
      }
    ]
  },
  fri: {
    label: "Friday",
    groceryList: [
      "Eggs",
      "Bell pepper",
      "Onion",
      "Whole-grain toast",
      "Milk or almond milk",
      "Protein powder",
      "Frozen berries",
      "Apples",
      "Mixed nuts",
      "Lentils",
      "Carrots",
      "Celery",
      "Vegetable broth",
      "Cod or white fish",
      "Quinoa",
      "Asparagus",
      "Olive oil",
      "Lemon"
    ],
    meals: [
      {
        type: "Breakfast",
        name: "Veggie Egg Scramble",
        ingredients: [
          "2 eggs",
          "1/4 bell pepper, diced",
          "2 tbsp onion, diced",
          "1 tsp olive oil",
          "Salt and pepper",
          "1 slice whole-grain toast"
        ],
        steps: [
          "Saute pepper and onion in olive oil for 2 minutes.",
          "Whisk eggs with salt and pepper.",
          "Scramble eggs in the pan until set.",
          "Serve with toast."
        ]
      },
      {
        type: "Snack (AM)",
        name: "Berry Protein Shake",
        ingredients: [
          "1 cup milk or almond milk",
          "1 scoop protein powder",
          "1/2 cup frozen berries"
        ],
        steps: [
          "Add ingredients to a blender.",
          "Blend until smooth.",
          "Pour into a glass.",
          "Serve immediately."
        ]
      },
      {
        type: "Lunch",
        name: "Lentil Veggie Soup",
        ingredients: [
          "1/2 cup cooked lentils",
          "1/4 cup carrots, diced",
          "1/4 cup celery, diced",
          "1/2 cup vegetable broth",
          "1 tsp olive oil"
        ],
        steps: [
          "Saute carrots and celery in olive oil for 3 minutes.",
          "Add lentils and broth.",
          "Simmer for 10 minutes.",
          "Serve warm."
        ]
      },
      {
        type: "Snack (PM)",
        name: "Apple Slices & Mixed Nuts",
        ingredients: [
          "1 apple, sliced",
          "1/4 cup mixed nuts"
        ],
        steps: [
          "Slice the apple.",
          "Serve with mixed nuts.",
          "Snack as needed."
        ]
      },
      {
        type: "Dinner",
        name: "Baked Cod with Quinoa",
        ingredients: [
          "1 cod fillet",
          "1 cup cooked quinoa",
          "1 cup asparagus",
          "1 tsp olive oil",
          "1 tsp lemon juice",
          "Salt and pepper"
        ],
        steps: [
          "Season cod with salt, pepper, and lemon.",
          "Bake at 400F for 10-12 minutes.",
          "Roast asparagus with olive oil for 8 minutes.",
          "Serve cod over quinoa with asparagus."
        ]
      }
    ]
  },
  sat: {
    label: "Saturday",
    groceryList: [
      "Greek yogurt",
      "Granola",
      "Raspberries",
      "Almond butter",
      "Milk or almond milk",
      "Protein powder",
      "Rolled oats",
      "Cinnamon",
      "Apples",
      "Mixed nuts",
      "Whole-grain tortilla",
      "Roasted turkey",
      "Lettuce",
      "Tomato",
      "Shrimp",
      "Zucchini",
      "Bell pepper",
      "Olive oil",
      "Garlic"
    ],
    meals: [
      {
        type: "Breakfast",
        name: "Greek Yogurt Bowl",
        ingredients: [
          "1 cup Greek yogurt",
          "1/3 cup granola",
          "1/2 cup raspberries",
          "1 tbsp almond butter"
        ],
        steps: [
          "Spoon yogurt into a bowl.",
          "Top with granola and raspberries.",
          "Drizzle almond butter.",
          "Serve immediately."
        ]
      },
      {
        type: "Snack (AM)",
        name: "Oat Protein Shake",
        ingredients: [
          "1 cup milk or almond milk",
          "1 scoop protein powder",
          "1/4 cup rolled oats",
          "Pinch of cinnamon"
        ],
        steps: [
          "Add ingredients to a blender.",
          "Blend until smooth.",
          "Pour into a glass.",
          "Serve immediately."
        ]
      },
      {
        type: "Lunch",
        name: "Turkey Apple Wrap",
        ingredients: [
          "1 whole-grain tortilla",
          "3 slices roasted turkey",
          "1/2 apple, thinly sliced",
          "1 cup lettuce",
          "1 tsp mustard"
        ],
        steps: [
          "Spread mustard on tortilla.",
          "Layer turkey, apple, and lettuce.",
          "Roll tightly and slice.",
          "Serve chilled."
        ]
      },
      {
        type: "Snack (PM)",
        name: "Apple Slices & Mixed Nuts",
        ingredients: [
          "1 apple, sliced",
          "1/4 cup mixed nuts"
        ],
        steps: [
          "Slice the apple.",
          "Serve with mixed nuts.",
          "Snack as needed."
        ]
      },
      {
        type: "Dinner",
        name: "Shrimp & Veggie Skillet",
        ingredients: [
          "6 oz shrimp, peeled",
          "1 zucchini, sliced",
          "1/2 bell pepper, sliced",
          "1 tbsp olive oil",
          "1 clove garlic, minced",
          "Salt and pepper"
        ],
        steps: [
          "Saute garlic in olive oil for 30 seconds.",
          "Add shrimp and cook until pink.",
          "Add zucchini and pepper; stir-fry 4 minutes.",
          "Season and serve."
        ]
      }
    ]
  },
  sun: {
    label: "Sunday",
    groceryList: [
      "Oats",
      "Milk",
      "Chia seeds",
      "Mixed berries",
      "Whole-grain bread",
      "Cottage cheese",
      "Tomato",
      "Basil",
      "Olive oil",
      "Lemon",
      "Protein powder",
      "Apples",
      "Mixed nuts",
      "Chicken breast",
      "Carrots",
      "Potatoes",
      "Rosemary"
    ],
    meals: [
      {
        type: "Breakfast",
        name: "Overnight Oats",
        ingredients: [
          "1/2 cup oats",
          "1/2 cup milk",
          "1 tbsp chia seeds",
          "1/2 cup mixed berries",
          "1 tsp honey"
        ],
        steps: [
          "Combine oats, milk, and chia in a jar.",
          "Refrigerate overnight.",
          "Top with berries and honey.",
          "Serve chilled."
        ]
      },
      {
        type: "Snack (AM)",
        name: "Berry Protein Shake",
        ingredients: [
          "1 cup milk",
          "1 scoop protein powder",
          "1/2 cup mixed berries"
        ],
        steps: [
          "Add ingredients to a blender.",
          "Blend until smooth.",
          "Pour into a glass.",
          "Serve immediately."
        ]
      },
      {
        type: "Lunch",
        name: "Tomato Cottage Toast",
        ingredients: [
          "2 slices whole-grain bread",
          "1/2 cup cottage cheese",
          "1 small tomato, sliced",
          "Fresh basil leaves",
          "1 tsp olive oil",
          "Salt and pepper"
        ],
        steps: [
          "Toast bread until crisp.",
          "Spread cottage cheese on toast.",
          "Top with tomato and basil.",
          "Drizzle with olive oil and season."
        ]
      },
      {
        type: "Snack (PM)",
        name: "Apple Slices & Mixed Nuts",
        ingredients: [
          "1 apple, sliced",
          "1/4 cup mixed nuts"
        ],
        steps: [
          "Slice the apple.",
          "Serve with mixed nuts.",
          "Snack as needed."
        ]
      },
      {
        type: "Dinner",
        name: "Herb Roasted Chicken & Veg",
        ingredients: [
          "2 chicken thighs",
          "1 cup potatoes, chopped",
          "1 cup carrots, chopped",
          "1 tbsp olive oil",
          "1 tsp rosemary",
          "Salt and pepper"
        ],
        steps: [
          "Toss chicken, potatoes, and carrots with oil, rosemary, salt, and pepper.",
          "Spread on a baking sheet.",
          "Roast at 400F for 30-35 minutes.",
          "Rest 5 minutes before serving."
        ]
      }
    ]
  }
};

// Utility to render meals for a selected day into the DOM.
function renderDay(dayKey) {
  const data = mealPlan[dayKey];
  const container = document.getElementById("meal-content");

  if (!data || !container) {
    return;
  }

  const mealCards = data.meals
    .map((meal) => {
      const ingredients = meal.ingredients
        .map((item) => `<li>${item}</li>`)
        .join("");
      const steps = meal.steps
        .map((step) => `<li>${step}</li>`)
        .join("");

      return `
        <article class="meal-card">
          <h3 class="meal-name">${meal.type}: ${meal.name}</h3>
          <details class="meal-section">
            <summary>Ingredients</summary>
            <ul>${ingredients}</ul>
          </details>
          <details class="meal-section">
            <summary>Steps</summary>
            <ol>${steps}</ol>
          </details>
        </article>
      `;
    })
    .join("");

  const groceryItems = data.groceryList
    .map((item) => `<li>${item}</li>`)
    .join("");

  container.innerHTML = `
    <h2 class="day-title">${data.label}</h2>
    <details class="meal-section">
      <summary>Grocery List</summary>
      <ul>${groceryItems}</ul>
    </details>
    ${mealCards}
  `;
}

// Wire up day buttons and set default day on load.
function setupDayButtons() {
  const buttons = document.querySelectorAll(".day-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("is-active"));
      button.classList.add("is-active");
      renderDay(button.dataset.day);
    });
  });

  renderDay("mon");
}

// Initialize when DOM is ready.
document.addEventListener("DOMContentLoaded", setupDayButtons);

// Render the weekly list with amounts for two adults.
function renderWeeklyList() {
  const weeklyContainer = document.getElementById("weekly-list");

  if (!weeklyContainer) {
    return;
  }

  const weeklyItems = weeklyShoppingList
    .map((item) => `<li>${item}</li>`)
    .join("");

  weeklyContainer.innerHTML = `
    <details class="meal-section">
      <summary>Weekly Shopping List (2 Adults)</summary>
      <ul>${weeklyItems}</ul>
    </details>
  `;
}

// Rotate ASCII characters for the title line.
const rotorFrames = ["|", "/", "-", "\\"];
let rotorIndex = 0;

function updateTitleRotors() {
  const rotors = document.querySelectorAll(".title-rotor");
  rotors.forEach((rotor) => {
    rotor.textContent = rotorFrames[rotorIndex % rotorFrames.length];
  });
  rotorIndex += 1;
}

document.addEventListener("DOMContentLoaded", () => {
  updateTitleRotors();
  setInterval(updateTitleRotors, 300);
});

document.addEventListener("DOMContentLoaded", renderWeeklyList);
