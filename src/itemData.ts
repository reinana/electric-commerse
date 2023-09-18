export type ItemType = {
    id: number,
    category: string,
    itemName: string,
    price: number,
    image: string,
    description: string,
    amount: number,
    favorite: boolean
}


export const itemList = [
    {
        id : 1,
        category : "Mac",
        itemName : "M1チップ搭載 13インチMacBook Air",
        price: 134800,
        image : "images/macbook-air.png",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."           ,
        amount : 0,
        favorite : false
    },
    {
        id : 2,
        category : "Mac",
        itemName : "13インチMacBook Pro",
        price: 178800,
        image : "images/mbp-digitalmat-gallery-1-202206.png",           
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."           ,
        amount : 0,
        favorite : false
    },
    {
        id : 3,
        category : "Mac",
        itemName : "24インチiMac",
        price: 174800,
        image : "images/imac24.png",           
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."           ,
        amount : 0,
        favorite : false
    },
    {
        id : 4, 
        category : "Mac",
        itemName : "Mac mini",
        price: 84800,
        image : "images/mac-mini-digitalmat-gallery-4-202301.png",           
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."           ,
        amount : 0,
        favorite : false
    },
    {
        id : 5, 
        category : "iPhone",
        itemName : "iPhone 14 Pro Max",
        price: 164800,
        image : "images/iphone14promax-digitalmat-gallery-5-202209.png",           
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."           ,
        amount : 0,
        favorite : false
    },
    {
        id : 6,
        category : "iPhone",
        itemName : "iPhone 14 Pro",
        price: 149800,
        image : "images/iphone14pro-digitalmat-gallery-5-202209.png",           
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."           ,
        amount : 0,
        favorite : false
    },
    {
        id : 7, 
        category : "iPhone",
        itemName : "iPhone 14",
        price: 119800,
        image : "images/iphone14-digitalmat-gallery-3-202209.png",           
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."           ,
        amount : 0,
        favorite : false
    },
    {
        id : 8, 
        category : "iPhone",
        itemName : "iPhone 14 Plus",
        price: 134800,
        image : "images/iphone14plus-digitalmat-gallery-3-202209.png",           
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."           ,
        amount : 0,
        favorite : false
    },
    {
        id : 9, 
        category : "iPad",
        itemName : "11インチiPad Pro",
        price: 124800,
        image : "images/ipadpro11-digitalmat-gallery-1-202210.png",           
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."           ,
        amount : 0,
        favorite : false
    },
    {
        id : 10, 
        category : "iPad",
        itemName : "iPad Air",
        price: 92800,
        image : "images/ipadair-digitalmat-gallery-1-202203.png",           
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."           ,
        amount : 0,
        favorite : false
    },
    {
        id : 11, 
        category : "iPad",
        itemName : "iPad（第10世代）",
        price: 63800,
        image : "images/ipad-digitalmat-gallery-1-202210.png",          
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."           ,
        amount : 0,
        favorite : false
    },
    {
        id : 12, 
        category : "Apple Watch",
        itemName : "Apple Watch Ultra",
        price: 124800,
        image : "images/watch-ultra-digitalmat-gallery-3-202209_GEO_JP.png",           
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."           ,
        amount : 0,
        favorite : false
    },
    {
        id : 13, 
        category : "Apple Watch",
        itemName : "Apple Watch Series 8",
        price: 59800,
        image : "images/watch-s8-digitalmat-gallery-3-202303_GEO_JP.png",           
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."           ,
        amount : 0,
        favorite : false
    },
    {
        id : 14, 
        category : "Apple Watch",
        itemName : "Apple Watch SE",
        price: 37800,
        image : "images/watch-se-digitalmat-gallery-1-202303_GEO_JP.png",           
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."           ,
        amount : 0,
        favorite : false
    },

]