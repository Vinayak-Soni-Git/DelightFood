export const filterData = [
    {name:'Fast Food', image: require('../../assets/images/fast-food-hamburguer-svgrepo-com.png'), id:0},
    {name:'Burger', image:require('../../assets/images/hamburger-burger-svgrepo-com.png'), id:1},
    {name:'Salad', image:require('../../assets/images/salad-svgrepo-com.png'), id:2},
    {name:'HotDog', image:require('../../assets/images/hotdog-svgrepo-com.png'), id:3},
    {name:'chinese', image:require('../../assets/images/steamingbowl-svgrepo-com.png'), id:4},
    {name:'Mexican', image:require('../../assets/images/taco-01-svgrepo-com.png'), id:5},
    {name:'See Food', image:require('../../assets/images/lobster-svgrepo-com.png'), id:6},
]

export const searchFilterData = [
    {name:'Fast Food', image:'https://www.fruigees.com/wp-content/uploads/2022/01/Fast-Food.jpeg', id:0},
    {name:'Burger', image:'https://natashaskitchen.com/wp-content/uploads/2023/06/Cheeseburger-2-768x1152.jpg', id:1},
    {name:'Salad', image:'https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg', id:2},
    {name:'HotDog', image:'https://nypost.com/wp-content/uploads/sites/2/2016/07/hot-dog-2.jpg?quality=90&strip=all&w=1280', id:3},
    {name:'chinese', image:'https://th.bing.com/th/id/R.09ea5b71a7ca33835665925633c0318e?rik=G1kXGO02oOoSqQ&riu=http%3a%2f%2fsuitelife.com%2fblog%2fwp-content%2fuploads%2f2015%2f08%2f327013.jpg&ehk=sGcB7bgxuNJ9QIpzN4ufgLAOiLwAFOV29zS3bhYZDFo%3d&risl=&pid=ImgRaw&r=0', id:4},
    {name:'Mexican', image:'https://th.bing.com/th/id/OIP.wY2R_B7uL-GYqKBjmdiiyQHaE8?rs=1&pid=ImgDetMain', id:5},
    {name:'See Food', image:'https://th.bing.com/th/id/OIP.CkuOaSRIcI8_YedNT3tr3AHaFj?rs=1&pid=ImgDetMain', id:6},
    {name:'Pie', image:'https://www.modernhoney.com/wp-content/uploads/2017/11/The-Best-Pumpkin-Pie-Recipe-2.jpg', id:7},
    {name:'Ocean Dish', image:'https://th.bing.com/th/id/OIP.pzDX9ZkeEsmRJd01jErazAHaFj?w=263&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7', id:8},
    {name:'Chicken Biryani', image:'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg', id:9},
]

export const restaurantsData = [
    {
        id:0,
        restaurantName:'Mc Donalds',
        farAway:'21.2',
        businessAddress:'22 Bessie Street, cape town',
        image:'https://th.bing.com/th/id/OIP.NbS7jYmjNa5DvAmgXtkRcAHaHa?rs=1&pid=ImgDetMain',
        averageReview:4.9,
        numberOfReviews:272,
        coordinates:{lat:-26.1888612, lng:28.246325},
        discount:10,
        deliveryTime:15,
        collectTime:5,
        foodTypes:'Burgers, wraps, milkshakes...',
        productData:[
            {name:'Hand Cut chips', price:29.30, image:'https://th.bing.com/th/id/OIP.7bq6Z54eMvZ9qHqpEqFtJQHaE8?rs=1&pid=ImgDetMain'},
            {name:'Big mac', price:50.80, image:'https://th.bing.com/th/id/OIP._MJzDSgbJszA5FQcXySKhwHaFZ?w=254&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
            {name:'chicken burger', price:70, image:'https://th.bing.com/th/id/OIP.E1B8bvGzlq8HCr_3ArTMkgHaHa?rs=1&pid=ImgDetMain'}
        ],
    },
    {
        id:1,
        restaurantName:'KFC',
        farAway:'12.7',
        businessAddress:'22 Bessie Street, cape town',
        image:'https://th.bing.com/th/id/OIP.2B6lzv63QLolHtWkaDwyjQHaE8?rs=1&pid=ImgDetMain',
        averageReview:4.3,
        numberOfReviews:306,
        coordinates:{lat:-26.1891648, lng:28.2441808},
        discount:10,
        deliveryTime:15,
        collectTime:5,
        foodTypes:'Chicken, Chicken wings...',
        productData:[
            {name:'Hand Cut chips', price:29.30, image:'https://th.bing.com/th/id/OIP.7bq6Z54eMvZ9qHqpEqFtJQHaE8?rs=1&pid=ImgDetMain'},
            {name:'Big mac', price:50.80, image:'https://th.bing.com/th/id/OIP._MJzDSgbJszA5FQcXySKhwHaFZ?w=254&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
            {name:'chicken burger', price:70, image:'https://th.bing.com/th/id/OIP.E1B8bvGzlq8HCr_3ArTMkgHaHa?rs=1&pid=ImgDetMain'}
        ],
    },
    {
        id:2,
        restaurantName:'Steers',
        farAway:'5',
        businessAddress:'17 Olivia Rd, Johannesburg',
        image:'https://www.thesouthafrican.com/wp-content/uploads/2018/05/steers.jpg',
        averageReview:4.9,
        numberOfReviews:1272,
        coordinates:{lat:-26.1888612, lng:28.246325},
        discount:12,
        deliveryTime:25,
        collectTime:15,
        foodTypes:'Flame grilled, beef burgers',
        productData:[
            {name:'Hand Cut chips', price:29.30, image:'https://th.bing.com/th/id/OIP.7bq6Z54eMvZ9qHqpEqFtJQHaE8?rs=1&pid=ImgDetMain'},
            {name:'Big mac', price:50.80, image:'https://th.bing.com/th/id/OIP._MJzDSgbJszA5FQcXySKhwHaFZ?w=254&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
            {name:'chicken burger', price:70, image:'https://th.bing.com/th/id/OIP.E1B8bvGzlq8HCr_3ArTMkgHaHa?rs=1&pid=ImgDetMain'}
        ],
    },
    {
        id:3,
        restaurantName:'Roman Pizza',
        farAway:'7',
        businessAddress:'15 Atlas Rd, kempton park',
        image:'https://th.bing.com/th/id/OIP.2B6lzv63QLolHtWkaDwyjQHaE8?rs=1&pid=ImgDetMain',
        averageReview:4.3,
        numberOfReviews:700,
        coordinates:{lat:-26.1845336, lng:28.2481691},
        discount:10,
        deliveryTime:15,
        collectTime:5,
        foodTypes:'Chicken pizza, Vegetarian Pizza',
        productData:[
            {name:'Hand Cut chips', price:29.30, image:'https://th.bing.com/th/id/OIP.7bq6Z54eMvZ9qHqpEqFtJQHaE8?rs=1&pid=ImgDetMain'},
            {name:'Big mac', price:50.80, image:'https://th.bing.com/th/id/OIP._MJzDSgbJszA5FQcXySKhwHaFZ?w=254&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
            {name:'chicken burger', price:70, image:'https://th.bing.com/th/id/OIP.E1B8bvGzlq8HCr_3ArTMkgHaHa?rs=1&pid=ImgDetMain'}
        ],
    },
]
