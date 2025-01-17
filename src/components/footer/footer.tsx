import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="px-24 flex flex-row justify-between py-12">
                <div className="flex flex-col gap-4">
                    {/* <img src="Diamond.png" alt="diamong" height={20} /> */}
                    <span className="font-bold text-neutral-300 ml-2">Navayodha Official</span>
                    <div className="flex flex-row gap-[2px]">
                        <a href="https://wa.me/6285640322120" target="_blank" className="hover:bg-gray-400 p-2 rounded-[6px]"><FaWhatsapp /></a>
                        <a href="https://www.instagram.com/navayodha.official?igsh=MW9kNGtobGxoZTds" target="_blank" className="hover:bg-gray-400 p-2 rounded-[6px]"><FaInstagram /></a>
                        <a href="#" className="hover:bg-gray-400 p-2 rounded-[6px]"><FaTiktok /></a>                        
                    </div>
                </div>
                <div className="flex flex-col gap-4 mr-12">
                    <a href="#">About</a>
                    <a href="#">Team</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;