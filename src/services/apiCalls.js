import axios from "axios";

export const getAllMeals = async () => {
        
    let config = {
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
    }
    return await axios(config);
}

export const getSingleMeal = async (name) => {

    let config = {
            method: 'get',
            url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    }
    return await axios(config);
}