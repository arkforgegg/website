import { Main } from '../components/Main';
import { Navbar } from '../components/Navbar';

export function Home() {
    return (
        <>
            <section className='max-h-auto height relative h-auto min-h-screen w-full overflow-auto overflow-x-hidden'>
            <Navbar/>
            <Main/>
            </section>
        </>
    )
}