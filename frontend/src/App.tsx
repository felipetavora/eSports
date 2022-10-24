import './styles/main.css';
import logoEsports from './assets/logo-esports.svg';
import CreateAdBanner from './components/CreateAdBanner/CreateAdBanner';
import { useEffect, useState } from 'react';
import GameBanner from './components/GameBanner/GameBanner';
import * as Dialog from '@radix-ui/react-dialog';
import CreateAdModal from './components/CreateAdModal/CreateAdModal';
import axios from 'axios';

interface GameProps {
   id: string;
   title: string;
   bannerUrl: string;
   _count: {
      ads: number;
   };
}

export default function App() {
   const [games, setGames] = useState<GameProps[]>([]);

   useEffect(() => {
      axios('http://localhost:4000/games').then((response) => {
         setGames(response.data);
      });
   }, []);

   return (
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
         <img src={logoEsports} alt="Logo eSports" />
         <h1 className="text-6xl text-white font-black mt-20">
            Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
         </h1>
         <div className="grid grid-cols-6 gap-6 mt-16">
            {games.map((game) => {
               return <GameBanner key={game.id} title={game.title} bannerUrl={game.bannerUrl} adsCount={game._count.ads} />;
            })}
         </div>
         <Dialog.Root>
            <CreateAdBanner />
            <CreateAdModal />
         </Dialog.Root>
      </div>
   );
}
