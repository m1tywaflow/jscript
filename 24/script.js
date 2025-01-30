export async function GetUserData(userId) {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error(
        `Сталась помилка при виклику користувача ${response.status}`
      );
    }
    let user = await response.json();
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
  } catch (error) {
    console.log(`Сталась помилка отримання даних:${error.message}`);
  }
}

export async function GetFilmData(filmId) {
  try {
    let response = await fetch(`https://swapi.dev/api/films/${filmId}`);
    if (!response.ok) {
      throw new Error(`Сталась помилка при виклику фільма ${response.status}`);
    }
    let film = await response.json();
    console.log(`Film title: ${film.title}`);
    console.log(`Date release: ${film.release_date}`);
  } catch (error) {
    console.log(`Сталась помилка отримання даних про фільм:${error.message}`);
  }
}

export async function getPlanetData(planetId){
    try{
        let respone = await fetch(`https://swapi.dev/api/planets/${planetId}/`);
        if(!respone.ok){
            throw new Error(`Сталась помилка отримання даних ${respone.status}`);
        }
        let planet = await respone.json();
        console.log(`Planet name: ${planet.name}`);
        console.log(`Climate: ${planet.climate}`);
    }catch(error){
        console.log(`Сталась помилка при отриманні даних про планету:${error.message}`);
    }
}