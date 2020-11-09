import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name: 'GianP',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Viro',
            email: 'user@example.com',
            password: bcrypt.hashSync('1784', 8),
            isAdmin: false,
        }
    ],

    products: [
        {
            name: 'VitaC',
            category: 'Alimenti',
            image: '/images/p1.jpg',
            brand: 'naturaSi',
            price: 18,
            rating: 4.5,
            numReviews: 12,
            description: 'Increase your immunine system',
            countInStock: 10
        },
        {
            name: 'Ginko',
            category: 'Alimenti',
            image: '/images/p2.jpg',
            brand: 'naturaSi',
            price: 18,
            rating: 3.5,
            numReviews: 18,
            description: 'Increase your immunine system',
            countInStock: 10
        },
        {
            name: 'Vitamine B',
            category: 'Alimenti',
            brand: 'naturaSi',
            image: '/images/p1.jpg',
            price: 18,
            rating: 4.5,
            numReviews: 10,
            description: 'Increase your immunine system',
            countInStock: 7
        },
        {
            name: 'Rodiola',
            category: 'Alimenti',
            brand: 'naturaSi',
            image: '/images/p2.jpg',
            price: 18,
            rating: 2.0,
            numReviews: 100,
            description: 'Increase your immunine system',
            countInStock: 9
        },
        {
            name: 'Immune C',
            category: 'Alimenti',
            brand: 'naturaSi',
            image: '/images/p1.jpg',
            price: 18,
            rating: 3.0,
            numReviews: 18,
            description: 'Increase your immunine system',
            countInStock: 9
        },
        {
            name: 'Vitamine Z',
            category: 'Alimenti',
            brand: 'naturaSi',
            image: '/images/p2.jpg',
            price: 38,
            rating: 4.0,
            numReviews: 180,
            description: 'Increase your immunine system',
            countInStock: 0
        },

    ],
};

export default data;