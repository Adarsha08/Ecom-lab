class EcommerceStore {
    constructor() {
        this.categories = {};
    }

    // Create a new category
    createCategory(categoryName) {
        if (!categoryName) return;
        if (!this.categories[categoryName]) {
            this.categories[categoryName] = [];
        } else {
            console.log("Category already exists");
        }
        this.updateUI();
        this.updateCategorySelect();
    }

    // Update the category list in the UI
    updateUI() {
        const olElement = document.getElementById("category-list");
        if (!olElement) return;
        olElement.innerHTML = Object.keys(this.categories)
            .map(
                (categoryName) =>
                    `<li>
                        ${categoryName}
                        <button onclick="store.deleteCategory('${categoryName}')">Delete</button>
                    </li>`
            )
            .join("");
    }

    // Delete a category
    deleteCategory(categoryName) {
        if (this.categories[categoryName]) {
            delete this.categories[categoryName];
            this.updateUI();
            this.updateCategorySelect();
            this.updateItemList();
        } else {
            console.log("Category not found");
        }
    }

    // Add item to a category
    addItemToCategory(categoryName, itemName, itemPrice) {
        if (
            this.categories[categoryName] &&
            itemName &&
            itemPrice !== ""
        ) {
            this.categories[categoryName].push({ name: itemName, price: itemPrice });
            this.updateItemList();
            this.displayCart();
        }
    }
    

    // Update the category dropdown
    updateCategorySelect() {
        const select = document.getElementById('category-select');
        if (!select) return;
        select.innerHTML = '';
        Object.keys(this.categories).forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            select.appendChild(option);
        });
        this.updateItemList();
    }

    // Update the item list for the selected category
    updateItemList() {
        const select = document.getElementById('category-select');
        const itemList = document.getElementById('item-list');
        if (!select || !itemList) return;
        const category = select.value;
        itemList.innerHTML = '';
        if (category && this.categories[category]) {
            this.categories[category].forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - $${item.price}`;
                itemList.appendChild(li);
            });
        }
    }
}

// Make store globally accessible for button onclick
window.store = new EcommerceStore();
store.createCategory("Electronics");
store.createCategory("Clothing");
store.createCategory("Hotels");

