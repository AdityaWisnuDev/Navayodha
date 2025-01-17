import { Button } from "../ui/button";

const Header = () => {
    return (
        <div className="w-full z-10 text-white border-b-2 fixed top-0 left-0 backdrop-blur-sm">
            <div className="flex flex-row justify-between px-12 py-4">
                <span className="text-xl font-bold">Navayodha</span>
                <div className="flex flex-row gap-4 text-lg">
                    <span>About</span>
                    <span>Team</span>
                </div>
                <Button variant="outline" className="rounded-xl">Contact us</Button>
            </div>
        </div>
    )
}

export default Header;