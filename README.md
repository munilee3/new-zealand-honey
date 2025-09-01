Task 1:

Implement the design for both Desktop and Mobile views as per the provided UI/UX design: [Figma File](https://www.figma.com/design/KuTJztBgGAGZCKGbotH2nU/NZHC-UMF-MGO?node-id=1-3&t=vx1bmLiK2rxmjf5t-0)

Task 2:

This is a nested checkbox component. The intended behavior is:
Selecting "Select All" should check every node.
Selecting "Fruits" should check all individual fruits.
Selecting "Vegetables" should check all individual vegetables.
Currently, the logic is broken - selecting "Fruits" or "Vegetables" does not properly check all related items.

Final Code:

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>Nested Checkbox</title>
   <style>
       body {
           font-family: Arial, sans-serif;
           padding: 20px;
       }
       .category {
           margin-top: 10px;
       }
       .items {
           margin-left: 20px;
       }
       label {
           display: block;
           cursor: pointer;
       }
   </style>
</head>
<body>
   <h2>Nested Checkbox</h2>


   <label>
       <input type="checkbox" id="selectAll">
       Select All
   </label>


   <div class="category">
       <label>
           <input type="checkbox" class="category-checkbox" data-category="fruits">
           Fruits
       </label>
       <div class="items">
           <label><input type="checkbox" class="fruit"> Apple</label>
           <label><input type="checkbox" class="fruit"> Banana</label>
           <label><input type="checkbox" class="fruit"> Orange</label>
       </div>
   </div>


   <div class="category">
       <label>
           <input type="checkbox" class="category-checkbox" data-category="vegetables">
           Vegetables
       </label>
       <div class="items">
           <label><input type="checkbox" class="vegetable"> Carrot</label>
           <label><input type="checkbox" class="vegetable"> Broccoli</label>
           <label><input type="checkbox" class="vegetable"> Potato</label>
       </div>
   </div>


   <script>
       const selectAll = document.getElementById("selectAll");
       const categoryCheckboxes = document.querySelectorAll(".category-checkbox");
       const fruits = document.querySelectorAll(".fruit");
       const vegetables = document.querySelectorAll(".vegetable");


       selectAll.addEventListener("change", (e) => {
           const checked = e.target.checked;
           [...categoryCheckboxes, ...fruits, ...vegetables].forEach(cb => cb.checked = checked);
       });


       categoryCheckboxes.forEach(cb => {
           cb.addEventListener("change", (e) => {
               const checked = e.target.checked
               if (cb.dataset.category === "fruits") {
                   fruits.forEach(f => f.checked = checked)
               } else if (cb.dataset.category === "vegetables") {
                   vegetables.forEach(v => v.checked = checked)
               }
               updateSelectAll();
           });
       });


       [...fruits, ...vegetables].forEach(cb => {
           cb.addEventListener("change", () => {
               updateCategory("fruits", fruits);
               updateCategory("vegetables", vegetables);
               updateSelectAll();
           });
       });


       function updateCategory(category, items) {
           const categoryBox = document.querySelector(`.category-checkbox[data-category="${category}"]`);
           categoryBox.checked = [...items].every(i => i.checked);
       }


       function updateSelectAll() {
           selectAll.checked =
               [...fruits].every(f => f.checked) &&
               [...vegetables].every(v => v.checked);
       }
   </script>
</body>
</html>
