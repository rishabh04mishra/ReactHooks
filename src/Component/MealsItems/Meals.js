import { Fragment } from "react";
import MealsAvailable from "./MealAvailable";
import MealDescription from "./MealsDescription";

const Meals = () =>{
        return <Fragment>
            <MealDescription></MealDescription>
            <MealsAvailable></MealsAvailable>
        </Fragment>
}

export default Meals;