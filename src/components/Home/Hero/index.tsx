import { withBasePath } from '@/utils/urlHelper'
import Image from 'next/image'

const Banner = () => {
    return (
        <section className='bg-header pt-32 lg:pt-52 pb-10 overflow-hidden'> 
            <div className='container px-4 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
                    
                    {/* Columna de Texto */}
                    <div className='col-span-7 flex flex-col justify-evenly relative z-10'>
                        {/* Elementos decorativos - Ajusté el posicionamiento para que no se pisen tanto */}
                        <Image
                            src={withBasePath('/images/hero/star.svg')}
                            alt=''
                            width={95}
                            height={97}
                            className='absolute -top-16 right-10 -z-10 hidden sm:block'
                        />
                        <Image
                            src={withBasePath('/images/hero/lineone.svg')}
                            alt=''
                            width={190}
                            height={148}
                            className='absolute -top-20 right-0 -z-10 hidden sm:block'
                        />
                        
                        <h1 className='text-midnight_text text-4xl md:text-7xl lg:text-[86px] leading-tight text-center lg:text-start font-semibold pt-5'>
                            Pon fin a las facturas impagadas.
                        </h1>
                        
                        <p className='text-black/75 text-lg font-normal text-center lg:text-start pt-8 max-w-xl mx-auto lg:mx-0'>
                            Pon fin a las facturas impagadas con nuestra solución de software inteligente. Simplifica tu contabilidad, automatiza los recordatorios y cobra más rápido.
                        </p>
                        
                        <div className='pt-10 mx-auto lg:mx-0'>
                            <button className='text-white text-xl font-medium py-4 px-10 md:py-6 md:px-12 rounded-full transition-all duration-300 border border-primary bg-primary hover:bg-transparent hover:text-primary active:scale-95'>
                                Empezar
                            </button>
                        </div>
                    </div>

                    {/* Columna de Imagen */}
                    <div className='col-span-5 flex justify-center xl:-mb-32 xl:-mr-32 pt-12 lg:pt-0'>
                        <Image
                            src={withBasePath('/images/hero/banner.png')}
                            alt='Dashboard de gestión de facturas'
                            width={800}
                            height={644}
                            priority // Agregado porque es el contenido principal del hero
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner