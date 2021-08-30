import Header from "./components/Header/Header"
import Products from "./components/Products/Products"
import Footer from './components/Footer/Footer'

import BigCheese from './images/image-BigCheese.jpg'
import baconburger from './images/bacon-Burger.jpg'
import Medalhao from './images/image-medalhao.jpg'
import BaconEgg from './images/image-baconEgg.jpg'
import BaconPremium from './images/BaconPremium.jpg'
import CheeseChicken from './images/cheese-chicken.jpg'
import CheeseBurger from './images/Cheese-Burger.png'
import LetsBurger from './images/lets-burger.png'
import batata from './images/batata.png'
import Picanha from './images/picanha.png'
import Cebola from './images/cebola-crispy.png'
import Coxinhas from './images/coxinhas.png'
import RefrigeranteLata from './images/lata.jpg'
import Refrigerante600 from './images/600ml.jpg'
import { useSearch } from "./hooks/useSearch"
import { useEffect } from "react"
import { useState } from "react"


const database = [
    {
        id: 0,
        image: CheeseBurger,
        name: "Cheese Burger",
        value: 8.90,
    },
    {
        id: 1,
        image: baconburger,
        name: "Bacon Burger",
        value: 9.90
    },
    {
        id: 2,
        image: CheeseChicken,
        name: "Cheese Chicken",
        value: 9.90
    },
    {
        id: 3,
        image: Medalhao,
        name: "Medalhão",
        value: 13.90
    },
    {
        id: 4,
        image: BaconPremium,
        name: "Bacon Premium",
        value: 15.90
    },
    {
        id: 5,
        image: LetsBurger,
        name: "Let's Burger",
        value: 17.90
    },
    {
        id: 6,
        image: BigCheese,
        name: "Big Cheese",
        value: 21.90
    },
    {
        id: 7,
        image: BaconEgg,
        name: "Bacon Egg",
        value: 14.90
    },
    {
        id: 8,
        image: batata,
        name: "Batata Frita Pequena",
        value: 7.00
    },
    {
        id: 9,
        image: batata,
        name: "Batata Frita Grande",
        value: 9.00
    },
    {
        id: 10,
        image: Coxinhas,
        name: "Coxinha Let's",
        value: 16.00
    },
    {
        id: 11,
        image: Cebola,
        name: "Anéis de Cebola",
        value: 16.90
    },
    {
        id: 12,
        image: Picanha,
        name: "Picanha na Chapa",
        value: 59.90
    },
    {
        id: 13,
        image: RefrigeranteLata,
        name: "Refrigerante Lata",
        value: 3.50
    },
    {
        id: 14,
        image: Refrigerante600,
        name: "Refrigerante 600ML",
        value: 6.00
    }
]

function Landing() {
    const { search } = useSearch()
    const [result, setResult] = useState(Number)

    useEffect(() => {
        for (let a = 0; a < database.length; a++) {
            if (database[a].name === search) {
                setResult(a)
            }
        }
    }, [search])

    function renderDatabase() {
        return (
            <>
                {database.map(database => (
                    < Products key={database.id} id={database.id} image={database.image} name={database.name} value={database.value} />
                ))}
            </>
        )
    }

    return (
        <>
            <Header />
            {result ? <Products key={database[result].id} id={database[result].id} image={database[result].image} name={database[result].name} value={database[result].value} /> :
                renderDatabase()
            }

            <Footer />
        </>
    )

}

export default Landing