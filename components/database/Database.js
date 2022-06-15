export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
  };
  
  export const Items = [
    {
      id: 1,
      category: 'product',
      productName: 'Xiaomi Mi10T Pro',
      productPrice: 2600,
      description:
        'Up to 72 hours battery life | Super powerful Bass | 5G | 128 GB | 6 GB RAM | Dual SIM',
      isOff: true,
      offPercentage: 10,
      productImage: require('../database/images/products/Mi1.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/products/Mi1.png'),
        require('../database/images/products/Mi2.png'),
        require('../database/images/products/Mi3.png'),
      ],
    },
    {
      id: 2,
      category: 'product',
      productName: 'Xioami 11 T 5G',
      productPrice: 1588,
      description:
        ' XIAOMI 11T 5G | 128GB | 8 GB RAM | Dual Sim | Meteorite Gray',
      isOff: false,
      productImage: require('../database/images/products/11T.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/products/11T.png'),
        require('../database/images/products/11T_1.png'),
        require('../database/images/products/11T_2.png'),
      ],
    },
    {
      id: 3,
      category: 'accessory',
      productName: 'Phone Case Xiaomi Mi 10 T Pro',
      productPrice: 80,
      description:
        'Hybrid phone case made of TPU gel inside and plastic outside for Xiaomi Mi 10T / Mi 10T Pro',
      isOff: true,
      offPercentage: 18,
      productImage: require('../database/images/accessories/husa_1.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/husa_2.png'),
        require('../database/images/accessories/husa_1.png'),
        require('../database/images/accessories/husa_3.png'),
      ],
    },
    {
      id: 4,
      category: 'accessory',
      productName: 'Phone case for  Xiaomi Redmi K30',
      productPrice: 399,
      description:
        'Premium case with TPU gel edges and clear plastic back for Xiaomi Redmi K30 Pro / Poco F2 Pro.',
      isOff: false,
      productImage: require('../database/images/accessories/husa4.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/husa4.png'),
        require('../database/images/accessories/husa5.png'),
        require('../database/images/accessories/husa6.png'),
      ],
    },
    {
      id: 5,
      category: 'accessory',
      productName: 'Phone case Xiaomi Poco M4 Pro 5G / Redmi Note 11T 5G',
      productPrice: 499,
      description:
        'Xiaomi Poco M4 Pro 5G / Redmi Note 11T 5G phone case made of a plastic core covered with liquid silicone on the outside and microfiber on the inside.',
      isOff: false,
      productImage: require('../database/images/accessories/husa7.png'),
      isAvailable: false,
      productImageList: [
        require('../database/images/accessories/husa7.png'),
        require('../database/images/accessories/husa8.png'),
        require('../database/images/accessories/husa9.png'),
      ],
    },
    {
      id: 6,
      category: 'accessory',
      productName: 'Phone case Xiaomi Redmi Note 8T',
      productPrice: 129,
      description:
        'A fun liquid and glitter case for the Xiaomi Redmi Note 8T.',
      isOff: false,
      productImage: require('../database/images/accessories/husa10.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/husa10.png'),
        require('../database/images/accessories/husa11.png'),
        require('../database/images/accessories/husa12.png'),
      ],
    },
  ]; 