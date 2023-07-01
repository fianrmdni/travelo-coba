import Image from 'next/image'
import Link from 'next/link';

import Container from 'components/Container';
import Button from 'components/Button';
import Search from './Search';
import Nav from './Nav';

import travelLogo from 'public/assets/travelo-logo-header.png'

const Header = () => {
    return (
        <header className="h-[85px] fixed left-0 right-0 top-0 bg-white shadow-lg p-4 z-20">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <Image
                            src={travelLogo}
                            alt="Travelo Logo"
                            placeholder='blur'
                            height="48"
                            width="182"
                        />
                        <Search />
                    </div>
                    <div className="flex gap-5">
                        <Nav />

                        <Link href="/login">
                            <Button className='w-[190px]'>
                                Masuk
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>


    )
}

export default Header