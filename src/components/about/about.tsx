const About = () => {
    return (
        <div>
            <div className="flex w-full items-center justify-center bg-white h-screen">
                <div className="flex flex-row p-12 bg-gray-800 rounded-xl">
                    <div id="logo" className="p-8">
                        <img src="Diamond.png" alt="Logo" width={500} />
                    </div>
                    <div className="ml-8 w-[500px] flex flex-col gap-12">
                        <span className="text-xl mt-20"><span className="font-bold">Navayodha</span> adalah sebuah event organizer yang dibuat oleh 9 pemuda dengan semangat yang membara. Navayodha berasal dari dua bahasa sansekerta, Nava yang berarti sembilan dan Yodha yang berarti pejuang, yang jika disatukan memiliki filosofi 9 pemuda yang memiliki banyak pengalaman ingin membantu menciptakan kegiatan-kegiatan yang bermakna bagi semua orang. </span>
                        <a href="https://wa.me/6285640322120" className="bg-gradient-to-r from-[#62e855] to-[#ecde18] px-8 py-2 hover:opacity-90 rounded-xl font-bold text-lg w-fit">Hubungi Kami</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;