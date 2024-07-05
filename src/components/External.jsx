

export default function External() {
    return (
        <>
            <section className="flex flex-wrap justify-center w-full sm:max-h-auto  lg:max-h-72 lg:mt-10">
                <div className=" lg:p-12 lg:max-h-72 md:flex md:flex-wrap flex justify-between items-center max-w-5xl bg-custom-gray">
                    <div className="w-1/2 p-2">
                        <h1 className="lg:text-4xl sm:text-6xl text-custom-green lg:mb-4">
                        The fastest way from idea to live site. Period.
                        </h1>
                        <p className="text-2xl text-custom-text01">
                        Flex is a Small SaaS Business. Flex isn’t a traditional company.
                        </p>
                    </div>
                    <div className="flex justify-between gap-4 lg:h-14">
                        <button className="border-2 border-custom-green bg-custom-green text-custom-text01 lg:w-24 lg:h-14">
                            Get Started
                        </button>
                        <button className="bg-custom-text01 text-custom-gray lg:w-24 lg:h-14">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}