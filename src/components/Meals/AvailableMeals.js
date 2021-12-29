import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Hummus with mushrooms',
      description: 'The best Hummus with fresh mushrooms',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'Our specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Hummus with eggs',
      description: 'The best Hummus with 3 boiled eggs',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Hummus with tomatos',
      description: 'Healthy...and red...',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

    return (
        <section className={classes.meals}>
          <Card> 
            <ul>
                {mealsList}
            </ul>
          </Card>
        </section>
    );
};

export default AvailableMeals;