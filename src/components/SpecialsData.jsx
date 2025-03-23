import margheritaPizza from '../images/margharita-pizza.jpg';
import spaghettiCarbonara from '../images/spaghetti-cabonara.jpg';
import caesarSalad from '../images/caesar-salad.jpg';

const specialsData = [
    {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic pizza with fresh mozzarella, basil, and tomato sauce.",
        price: "$12.99",
        image: margheritaPizza,
    },
    {
        id: 2,
        name: "Spaghetti Carbonara",
        description: "Traditional Italian pasta with creamy sauce, pancetta, and parmesan.",
        price: "$14.99",
        image: spaghettiCarbonara,
    },
    {
        id: 3,
        name: "Caesar Salad",
        description: "Crisp romaine lettuce, croutons, and Caesar dressing.",
        price: "$9.99",
        image: caesarSalad,
    },
];

export default specialsData;