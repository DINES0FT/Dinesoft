document.addEventListener("DOMContentLoaded", function() {
    const menuContainer = document.getElementById("menuContainer");
  
    // Define menu items
    const menuItems = [
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5",
      "Item 6",
      "Item 7",
      "Item 8",
      "Item 9",
      "Item 10",
      "Item 11",
      "Item 12"
    ];
  
    // Create menu items dynamically
    menuItems.forEach(item => {
      const menuItem = document.createElement("div");
      menuItem.className = "menu-item";
      menuItem.textContent = item;
      menuItem.addEventListener("click", () => alert(`Clicked: ${item}`));
      menuContainer.appendChild(menuItem);
    });
  });
  