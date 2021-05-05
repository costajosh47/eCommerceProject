import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id){
    console.log(_id);
    return({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases(){
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Josh Costa',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 90.51,
                orderNumber: '23432AFG3A',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Haze Costa',
                    shippingAddress: '13234 East State Street'
                }
            },
            {
                _id: 2,
                total: 27.84,
                orderNumber: 'M34523Dvdas',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Alona Stefanelli',
                    shippingAddress: '152 South State Street'
                }
            },
            {
                _id: 3,
                total: 4.32,
                orderNumber: 'Y34252S',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Aviva Costa',
                    shippingAddress: '32 North State Street'
                }
            },
            {
                _id: 4,
                total: 86.45,
                orderNumber: 'J3254A23S',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Adam Bugiada',
                    shippingAddress: '181 Main Street'
                }
            },
            {
                _id: 5,
                total: 19.40,
                orderNumber: 'F2146W35W',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Mark Bugiada',
                    shippingAddress: '14 Brandy Street'
                }
            },
            {
                _id: 6,
                total: 75.65,
                orderNumber: 'L32421S6765',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Ron Topps',
                    shippingAddress: '2 State Street'
                }
            },
            {
                _id: 7,
                total: 7.97,
                orderNumber: 'T3423566717AD',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Lisa Costa',
                    shippingAddress: '39 West Street'
                }
            }
        ]
    })
}