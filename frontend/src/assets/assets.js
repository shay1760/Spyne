import curv1 from './curv1.png'
import curv4 from './curv4.png'
import curv3 from './curv3.png'
import curv2 from './curv2.png'
import logo from './logo.png'
import user from './user.png'
import dropdown from './dropdown.png'
import search from './search.png'
import close from './close.png'
import bin from './bin.png'
import harrier1 from './harrier1.png'
import xuv7001 from './xuv7001.png'
import hero from './hero.jpg'
import add from './add_icon.png'


export const assets={
    curv1,
    curv2,
    curv3,
    curv4,
    harrier1,
    xuv7001,
    logo,
    user,
    dropdown,
    search,
    close,
    bin,
    hero,
    add
}

export const products=[
    {
        _id: "p1",
        name: "tata curv",
        description: "A premium segment hatchback with all new design",
        price: [1200000, 1400000, 1500000],
        image: [curv1, curv2, curv3, curv4],
        category: "Car",
        subCategory: "Hatchback",
        models: ["base", "mid", "high"],
    },
    {
        _id: "p2",
        name: "tata harrier",
        description: "A premium segment SUV with all new design",
        price: [1900000, 2000000, 2300000],
        image: [harrier1],
        category: "Car",
        subCategory: "Suv",
        models: ["base", "mid", "high"],
    },
    {
        _id: "p3",
        name: "mahindra XUV700",
        description: "A premium segment Classical SUV with modern featured",
        price: [2100000, 2300000, 2500000],
        image: [xuv7001],
        category: "Car",
        subCategory: "Suv",
        models: ["base", "mid", "high"],
    },
];