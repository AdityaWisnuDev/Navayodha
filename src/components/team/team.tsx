import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Team = () => {
    const plugin = React.useRef(
        Autoplay({delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true})
    )

    const Cards = [
        {
            name: "Gilbet Angie",
            imgSrc: "/cards-image/FEED-1_02.jpg"
        }, {
            name: "Abrar Mumtaz",
            imgSrc: "/cards-image/FEED-1_01.jpg"
        }, {
            name: "Aditya Wisnu",
            imgSrc: "/cards-image/FEED-1_03.jpg"
        }, {
            name: "Shidiq Nur",
            imgSrc: "/cards-image/FEED-1_04.jpg"
        }, {
            name: "Luqman Habib",
            imgSrc: "/cards-image/FEED-1_06.jpg"
        }, {
            name: "Nurdin Hanafi",
            imgSrc: "/cards-image/FEED-1_05.jpg"
        }, {
            name: "Afifah Khoirunisa",
            imgSrc: "/cards-image/FEED-1_07.jpg"
        }, {
            name: "Rini Kurniawati",
            imgSrc: "/cards-image/FEED-1_08.jpg"
        }, {
            name: "Nuraini Istiqomah",
            imgSrc: "/cards-image/FEED-1_09.jpg"
        }
    ];

    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-8 p-24 bg-white">
                <span className="text-black text-4xl font-black">Navayodha Team</span>
                <Carousel
                    plugins={[plugin.current]}
                    opts={{
                        align: "start",
                        loop: true
                    }}
                    className=""
                >
                    <CarouselContent>
                        {Cards.map((card) => (
                            <CarouselItem className="basis-1/3">
                                <div className="p-2 rounded-lg">
                                    {/* <span>{card.name}</span> */}
                                    <img src={card.imgSrc} alt={card.name} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

export default Team;