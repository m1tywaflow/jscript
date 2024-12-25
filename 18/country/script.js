window.onload = function () {
  document.getElementById("country").addEventListener("change", function () {
    const countryInfo = {
      Україна: {
        capital: "Київ",
        population: "41 млн",
      },
      США: {
        capital: "Вашингтон",
        population: "331 млн",
      },
      Німеччина: {
        capital: "Берлін",
        population: "83 млн",
      },
      Нідерланди: {
        capital: "Амстердам",
        population: "17,88 млн",
      },
      Швеція: {
        capital: "Стокгольм",
        population: "10,54 млн",
      },
      Японія: {
        capital: "Токіо",
        population: "124,5 млн",
      },
      Бельгія: {
        capital: "Брюссель",
        population: "11,82 млн",
      },
    };

    const select = document.getElementById("country");
    const infoDiv = document.getElementById("info");
    const country = select.value;

    if (country && countryInfo[country]) {
      const { capital, population } = countryInfo[country];
      infoDiv.textContent = `Столиця: ${capital}, Населення: ${population}`;
    } else {
      infoDiv.textContent = "Інформація про країну з'явиться тут.";
    }
  });
};
