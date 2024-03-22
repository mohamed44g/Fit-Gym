const get_food = async (user_food) => {
  const url = `https://api.api-ninjas.com/v1/nutrition?query=${user_food}`;
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": "uHF39l0S7d4lrSIacnjgbA==bnqGvKhzWPtVGUy0",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.error(error);
  }
};

const get_calory = async (information) => {
  const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?
  age=${information.user_age}
  &gender=${information.gender_age}
  &height=${information.hight_age}
  &weight=${information.weight_age}
  &activitylevel=${information.level_age}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5fd24da819msh2017dd0842db5fcp17b06djsne61acf837348",
      "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.data.goals;
  } catch (error) {
    console.error(error);
  }
};

export { get_food, get_calory };
