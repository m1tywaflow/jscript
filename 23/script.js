document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.createElement("div");
  document.body.appendChild(appContainer);
  const swapiButton = document.createElement("button");
  swapiButton.textContent = "Отримати дані планети";
  swapiButton.style.marginBottom = "20px";
  document.body.appendChild(swapiButton);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();

      console.log("Список користувачів:");
      users.forEach((user) => {
        console.log(`Ім'я: ${user.name}, Email: ${user.email}`);
        const userElement = document.createElement("p");
        userElement.textContent = `Ім'я: ${user.name}, Email: ${user.email}`;
        appContainer.appendChild(userElement);
      });
      const userId = 1;
      const userDetailsResponse = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const userDetails = await userDetailsResponse.json();

      const userDetailsElement = document.createElement("div");
      userDetailsElement.innerHTML = `
              <h3>Деталі користувача</h3>
              <p>Ім'я: ${userDetails.name}</p>
              <p>Нікнейм: ${userDetails.username}</p>
              <p>Email: ${userDetails.email}</p>
            `;
      appContainer.appendChild(userDetailsElement);

      const userPostsResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      const userPosts = await userPostsResponse.json();

      const postsElement = document.createElement("div");
      postsElement.innerHTML = "<h3>Пости користувача</h3>";
      userPosts.forEach((post) => {
        const postTitle = document.createElement("p");
        postTitle.textContent = `Заголовок: ${post.title}`;
        postsElement.appendChild(postTitle);
      });
      appContainer.appendChild(postsElement);
    } catch (error) {
      console.error("Помилка при отриманні даних:", error);
    }
  };
  swapiButton.addEventListener("click", async () => {
    try {
      const response = await fetch("https://swapi.dev/api/planets/1/");
      const planetData = await response.json();
      const planetCard = document.createElement("div");
      planetCard.style.border = "1px solid #ccc";
      planetCard.style.padding = "10px";
      planetCard.style.marginTop = "10px";
      planetCard.innerHTML = `
              <h3>Дані планети</h3>
              <p>Назва: ${planetData.name}</p>
              <p>Клімат: ${planetData.climate}</p>
              <p>Гравітація: ${planetData.gravity}</p>
              <p>Террейн: ${planetData.terrain}</p>
            `;
      const linksElement = document.createElement("div");
      planetData.residents.forEach((resident) => {
        const link = document.createElement("a");
        link.href = resident;
        link.textContent = resident;
        link.target = "_blank";
        link.style.display = "block";
        linksElement.appendChild(link);
      });
      planetCard.appendChild(linksElement);
      appContainer.appendChild(planetCard);
    } catch (error) {
      console.error("Помилка при отриманні даних SWAPI:", error);
    }
  });
  fetchUsers();
});
