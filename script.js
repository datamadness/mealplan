// Meal plan data for each day with structured meals, ingredients, steps, and grocery lists.
const mealPlan = {
  mon: {
    label: "Monday",
    groceryList: [
      "Rolled oats",
      "Milk or oat milk",
      "Blueberries",
      "Almonds",
      "Banana",
      "Protein powder",
      "Peanut butter",
      "Chicken breast",
      "Mixed greens",
      "Cherry tomatoes",
      "Cucumber",
      "Carrots",
      "Bell pepper",
      "Hummus",
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
        name: "Hummus & Veggie Sticks",
        ingredients: [
          "1/4 cup hummus",
          "1/2 cup carrot sticks",
          "1/2 cup cucumber sticks",
          "1/2 cup bell pepper strips"
        ],
        steps: [
          "Arrange vegetables on a plate.",
          "Spoon hummus into a small bowl.",
          "Dip and enjoy."
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
      "Apple",
      "String cheese",
      "Almonds",
      "Raisins",
      "Pumpkin seeds",
      "Whole-grain wrap",
      "Turkey breast",
      "Avocado",
      "Spinach",
      "Brown rice",
      "Bell peppers",
      "Onion",
      "Black beans",
      "Cumin",
      "Lime"
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
        name: "Apple & String Cheese",
        ingredients: [
          "1 apple, sliced",
          "1 string cheese"
        ],
        steps: [
          "Slice the apple.",
          "Serve with string cheese.",
          "Snack as needed."
        ]
      },
      {
        type: "Lunch",
        name: "Turkey Avocado Wrap",
        ingredients: [
          "1 whole-grain wrap",
          "3 slices turkey",
          "1/2 avocado, sliced",
          "1 cup spinach",
          "1 tsp mustard"
        ],
        steps: [
          "Spread mustard on the wrap.",
          "Layer turkey, avocado, and spinach.",
          "Roll tightly and slice in half.",
          "Serve immediately."
        ]
      },
      {
        type: "Snack (PM)",
        name: "Simple Trail Mix",
        ingredients: [
          "2 tbsp almonds",
          "1 tbsp walnuts",
          "1 tbsp raisins",
          "1 tbsp pumpkin seeds"
        ],
        steps: [
          "Combine ingredients in a small bowl.",
          "Mix well.",
          "Pack for later or eat right away."
        ]
      },
      {
        type: "Dinner",
        name: "Veggie Rice & Beans",
        ingredients: [
          "1 cup cooked brown rice",
          "1/2 cup black beans",
          "1/2 bell pepper, diced",
          "1/4 onion, diced",
          "1 tsp olive oil",
          "1/2 tsp cumin",
          "1 tsp lime juice"
        ],
        steps: [
          "Saute onion and bell pepper in olive oil for 4 minutes.",
          "Add black beans and cumin, warm through.",
          "Stir in rice and heat for 2 minutes.",
          "Finish with lime juice."
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
      "Cottage cheese",
      "Pineapple",
      "Rice cakes",
      "Almond butter",
      "Tuna",
      "Canned chickpeas",
      "Lemon",
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
        name: "Cottage Cheese & Pineapple",
        ingredients: [
          "1/2 cup cottage cheese",
          "1/2 cup pineapple chunks"
        ],
        steps: [
          "Spoon cottage cheese into a bowl.",
          "Top with pineapple.",
          "Serve chilled."
        ]
      },
      {
        type: "Lunch",
        name: "Tuna Chickpea Salad",
        ingredients: [
          "1 can tuna, drained",
          "1/2 cup chickpeas",
          "1/2 tomato, diced",
          "1 tbsp olive oil",
          "1 tsp lemon juice",
          "Salt and pepper"
        ],
        steps: [
          "Combine tuna, chickpeas, and tomato.",
          "Whisk olive oil, lemon juice, salt, and pepper.",
          "Toss dressing with salad.",
          "Serve chilled or room temp."
        ]
      },
      {
        type: "Snack (PM)",
        name: "Rice Cakes with Almond Butter",
        ingredients: [
          "2 rice cakes",
          "1 tbsp almond butter"
        ],
        steps: [
          "Spread almond butter on rice cakes.",
          "Serve immediately."
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
      "Spinach",
      "Greek yogurt",
      "Granola",
      "Chicken thighs",
      "Sweet potato",
      "Green beans",
      "Olive oil",
      "Garlic",
      "Soy sauce",
      "Ginger",
      "Brown rice"
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
        name: "Green Protein Shake",
        ingredients: [
          "1 banana",
          "1 cup milk or almond milk",
          "1 scoop protein powder",
          "1 cup spinach"
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
        name: "Greek Yogurt & Granola",
        ingredients: [
          "3/4 cup Greek yogurt",
          "1/4 cup granola"
        ],
        steps: [
          "Spoon yogurt into a bowl.",
          "Top with granola.",
          "Serve immediately."
        ]
      },
      {
        type: "Dinner",
        name: "Ginger Garlic Stir-Fry",
        ingredients: [
          "1 cup mixed vegetables",
          "1 cup cooked brown rice",
          "1 tbsp soy sauce",
          "1 tsp grated ginger",
          "1 clove garlic, minced",
          "1 tsp olive oil"
        ],
        steps: [
          "Saute garlic and ginger in olive oil for 30 seconds.",
          "Add vegetables and stir-fry 4-5 minutes.",
          "Stir in rice and soy sauce.",
          "Cook until warmed through."
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
      "Orange",
      "Edamame",
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
        name: "Hard-Boiled Eggs & Orange",
        ingredients: [
          "2 hard-boiled eggs",
          "1 orange"
        ],
        steps: [
          "Peel the eggs and the orange.",
          "Slice the orange into wedges.",
          "Serve together."
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
        name: "Steamed Edamame",
        ingredients: [
          "1 cup frozen edamame",
          "Pinch of salt"
        ],
        steps: [
          "Steam edamame for 4-5 minutes.",
          "Sprinkle with salt.",
          "Serve warm."
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
      "Rice cakes",
      "Peanut butter",
      "Cottage cheese",
      "Blueberries",
      "Apple",
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
        name: "Peanut Butter Rice Cakes",
        ingredients: [
          "2 rice cakes",
          "1 tbsp peanut butter"
        ],
        steps: [
          "Spread peanut butter on rice cakes.",
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
        name: "Cottage Cheese & Blueberries",
        ingredients: [
          "1/2 cup cottage cheese",
          "1/2 cup blueberries"
        ],
        steps: [
          "Spoon cottage cheese into a bowl.",
          "Top with blueberries.",
          "Serve chilled."
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
      "Avocado",
      "Tomato",
      "Mixed greens",
      "Olive oil",
      "Lemon",
      "Mixed nuts",
      "Dried fruit",
      "Greek yogurt",
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
        name: "Mixed Nuts & Dried Fruit",
        ingredients: [
          "2 tbsp mixed nuts",
          "1 tbsp dried fruit"
        ],
        steps: [
          "Combine nuts and dried fruit.",
          "Mix and serve."
        ]
      },
      {
        type: "Lunch",
        name: "Avocado Tomato Toast",
        ingredients: [
          "2 slices whole-grain bread",
          "1/2 avocado, mashed",
          "1 small tomato, sliced",
          "1 tsp olive oil",
          "1 tsp lemon juice",
          "Salt and pepper"
        ],
        steps: [
          "Toast bread until crisp.",
          "Mix avocado with lemon juice, salt, and pepper.",
          "Spread avocado on toast and top with tomato.",
          "Drizzle with olive oil."
        ]
      },
      {
        type: "Snack (PM)",
        name: "Greek Yogurt Protein Cup",
        ingredients: [
          "3/4 cup Greek yogurt",
          "1 tsp honey",
          "1 tbsp mixed berries"
        ],
        steps: [
          "Spoon yogurt into a bowl.",
          "Stir in honey and top with berries.",
          "Serve chilled."
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
