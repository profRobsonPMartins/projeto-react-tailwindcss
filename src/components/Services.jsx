import img01 from './img/01.svg'
import img02 from './img/02.svg'
import img03 from './img/03.svg'
import img04 from './img/04.svg'
import img05 from './img/05.svg'
import img06 from './img/06.svg'

export default function Services() {
    return (
        <>
            <main className="min-h-scren w-full block">
                <div className="flex justify-center mt-10 mb-10">
                    <div className="h-auto max-w-4xl text-center">
                        <h1 className="text-4xl text-custom-gray mb-2">Gain more insight into how people use your</h1>
                        <p className="text-xl">
                            With our integrated CRM, project management, collaboration
                            and invoicing capabilities, you can manage every aspect
                            of your business in one secure platform.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center ">
                    <div className="flex flex-wrap justify-center min-w-4xl gap-4 ">
                        <div className="relative w-80 h-64 border-2flex flex-wrap  justify-center cursor-pointer hover:border-2 rounded hover:border-custom-green hover:pt-4">
                            <div className="absolute h-10 w-full flex justify-center items-center">
                                <div className='h-10 w-10 bg-custom-green rounded flex justify-center items-center'>
                                    <img src={img01} alt="" />
                                </div>
                            </div>
                            <div className='absolute top-20 w-full text-center h-10'>
                                <h2 className='text-2xl'>Measure your performance</h2>
                                <p className='m-4'>Stay connected with your team and make quick decisions wherever you are. </p>
                            </div>
                        </div>

                        <div className="relative w-80 h-64 border-2flex flex-wrap  justify-center cursor-pointer hover:border-2 rounded hover:border-custom-green hover:pt-4">
                            <div className="absolute h-10 w-full flex justify-center items-center">
                                <div className='h-10 w-10 bg-custom-green rounded flex justify-center items-center'>
                                    <img src={img02} alt="" />
                                </div>
                            </div>
                            <div className='absolute top-20 w-full text-center h-10'>
                                <h2 className='text-2xl'>Measure your performance</h2>
                                <p className='m-4'>Stay connected with your team and make quick decisions wherever you are. </p>
                            </div>
                        </div>

                        <div className="relative w-80 h-64 border-2flex flex-wrap  justify-center cursor-pointer hover:border-2 rounded hover:border-custom-green hover:pt-4">
                            <div className="absolute h-10 w-full flex justify-center items-center">
                                <div className='h-10 w-10 bg-custom-green rounded flex justify-center items-center'>
                                    <img src={img03} alt="" />
                                </div>
                            </div>
                            <div className='absolute top-20 w-full text-center h-10'>
                                <h2 className='text-2xl'>Measure your performance</h2>
                                <p className='m-4'>Stay connected with your team and make quick decisions wherever you are. </p>
                            </div>
                        </div>
                        <div className="relative w-80 h-64 border-2flex flex-wrap  justify-center cursor-pointer hover:border-2 rounded hover:border-custom-green hover:pt-4">
                            <div className="absolute h-10 w-full flex justify-center items-center">
                                <div className='h-10 w-10 bg-custom-green rounded flex justify-center items-center'>
                                    <img src={img04} alt="" />
                                </div>
                            </div>
                            <div className='absolute top-20 w-full text-center h-10'>
                                <h2 className='text-2xl'>Measure your performance</h2>
                                <p className='m-4'>Stay connected with your team and make quick decisions wherever you are. </p>
                            </div>
                        </div>
                        <div className="relative w-80 h-64 border-2flex flex-wrap  justify-center cursor-pointer hover:border-2 rounded hover:border-custom-green hover:pt-4">
                            <div className="absolute h-10 w-full flex justify-center items-center">
                                <div className='h-10 w-10 bg-custom-green rounded flex justify-center items-center'>
                                    <img src={img05} alt="" />
                                </div>
                            </div>
                            <div className='absolute top-20 w-full text-center h-10'>
                                <h2 className='text-2xl'>Measure your performance</h2>
                                <p className='m-4'>Stay connected with your team and make quick decisions wherever you are. </p>
                            </div>
                        </div>
                        <div className="relative w-80 h-64 border-2flex flex-wrap  justify-center cursor-pointer hover:border-2 rounded hover:border-custom-green hover:pt-4">
                            <div className="absolute h-10 w-full flex justify-center items-center">
                                <div className='h-10 w-10 bg-custom-green rounded flex justify-center items-center'>
                                    <img src={img06} alt="" />
                                </div>
                            </div>
                            <div className='absolute top-20 w-full text-center h-10'>
                                <h2 className='text-2xl'>Measure your performance</h2>
                                <p className='m-4'>Stay connected with your team and make quick decisions wherever you are. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}