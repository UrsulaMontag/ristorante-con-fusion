import { Dish } from './dish';

export const DISHES: Dish[] = [
  {
    id: '0',
    name: 'Uthappizza',
    image: '/assets/images/uthappizza.png',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '4.99',
    description:
      'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
    comments: [
      {
        name: 'John Lemon',
        date: '2012-10-16',
        stars: 5,
        comment: 'Imagine all the eatables, living in conFusion!',
      },
      {
        name: 'Paul McVites',
        date: '2014-06-10',
        stars: 4,
        comment: 'Sends anyone to heaven, I wish I could get my mother-in-law!',
      },
      {
        name: 'Michael Jakishan',
        date: '2015-02-14',
        stars: 3,
        comment: 'Eat ist, just eat it!',
      },
      {
        name: 'Ringo Starry',
        date: '2013-07-21',
        stars: 4,
        comment: 'Ultimate, Reaching for the stars!',
      },
      {
        name: '25 Cent',
        date: '2011-12-03',
        stars: 2,
        comment: `It's your birthday, we're gonna party!`,
      },
    ],
  },
  {
    id: '1',
    name: 'Zucchipakoda',
    image: '/assets/images/zucchipakoda.png',
    category: 'appetizer',
    featured: false,
    label: '',
    price: '1.99',
    description:
      'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
    comments: [
      {
        name: 'John Lemon',
        date: '2012-10-12',
        stars: 5,
        comment: 'Imagine all the eatables, living in conFusion!',
      },
      {
        name: 'Paul McVites',
        date: '2014-09-23',
        stars: 4,
        comment: 'Sends anyone to heaven, I wish I could get my mother-in-law!',
      },
      {
        name: 'Michael Jakishan',
        date: '2015-02-14',
        stars: 3,
        comment: 'Eat ist, just eat it!',
      },
      {
        name: 'Ringo Starry',
        date: '2013-12-03',
        stars: 4,
        comment: 'Ultimate, Reaching for the stars!',
      },
      {
        name: '25 Cent',
        date: '2011-12-03',
        stars: 2,
        comment: `It's your birthday, we're gonna party!`,
      },
    ],
  },
  {
    id: '2',
    name: 'Vadonut',
    image: '/assets/images/vadonut.png',
    category: 'appetizer',
    featured: false,
    label: 'New',
    price: '1.99',
    description:
      'A quintessential ConFusion experience, is it a vada or is it a donut?',
    comments: [
      {
        name: 'John Lemon',
        date: '2012-10-12',
        stars: 5,
        comment: 'Imagine all the eatables, living in conFusion!',
      },
      {
        name: 'Paul McVites',
        date: '2014-09-23',
        stars: 4,
        comment: 'Sends anyone to heaven, I wish I could get my mother-in-law!',
      },
      {
        name: 'Michael Jakishan',
        date: '2015-02-14',
        stars: 3,
        comment: 'Eat ist, just eat it!',
      },
      {
        name: 'Ringo Starry',
        date: '2013-12-03',
        stars: 4,
        comment: 'Ultimate, Reaching for the stars!',
      },
      {
        name: '25 Cent',
        date: '2011-12-03',
        stars: 2,
        comment: `It's your birthday, we're gonna party!`,
      },
    ],
  },
  {
    id: '3',
    name: 'ElaiCheese Cake',
    image: '/assets/images/elaicheesecake.png',
    category: 'dessert',
    featured: false,
    label: '',
    price: '2.99',
    description:
      'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
    comments: [
      {
        name: 'John Lemon',
        date: '2012-10-12',
        stars: 5,
        comment: 'Imagine all the eatables, living in conFusion!',
      },
      {
        name: 'Paul McVites',
        date: '2014-09-23',
        stars: 4,
        comment: 'Sends anyone to heaven, I wish I could get my mother-in-law!',
      },
      {
        name: 'Michael Jakishan',
        date: '2015-02-14',
        stars: 3,
        comment: 'Eat ist, just eat it!',
      },
      {
        name: 'Ringo Starry',
        date: '2013-12-03',
        stars: 4,
        comment: 'Ultimate, Reaching for the stars!',
      },
      {
        name: '25 Cent',
        date: '2011-12-03',
        stars: 2,
        comment: `It's your birthday, we're gonna party!`,
      },
    ],
  },
];
