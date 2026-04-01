import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import { withBasePath } from '@/utils/urlHelper'

const Business = () => {
    return (
        <section className='py-10'>
            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
                    <div className='col-span-6 flex flex-col justify-center'>
                        <h2 className='text-black text-4xl sm:text-5xl font-semibold text-center lg:text-start leading-140!'>
                            Toma mejores decisiones logísticas con SmartLogix.
                        </h2>
                        <h3 className='text-black/75 text-lg font-normal text-center lg:text-start pt-3 leading-180!'>
                            La plataforma inteligente diseñada para optimizar tus rutas, 
                            gestionar tus conductores y asegurar que cada entrega llegue 
                            a tiempo, siempre.
                        </h3>
                        <Link
                            href={'/'}
                            scroll={false}
                            className='text-black hover:text-gray-600 text-lg font-medium flex items-center gap-2 pt-4 mx-auto lg:mx-0 w-fit'>
                            Saber más
                            <Icon icon='tabler:arrow-right' className='text-2xl' />
                        </Link>
                    </div>
                    <div className='col-span-6 flex justify-center mt-10 lg:mt-0'>
                        <Image
                            src={withBasePath('/images/business/business.png')}
                            alt='business'
                            width={1000}
                            height={805}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Business