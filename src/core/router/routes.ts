import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  hotelCollection: string;
  createHotel: string;
  editHotel: string;
  rickyMortyCharacters: string;
  rickAndMortyCharacterDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  hotelCollection: '/hotels',
  createHotel: '/hotels/create',
  editHotel: '/hotels/:id',
  rickyMortyCharacters: '/ricky-and-morthy-characters',
  rickAndMortyCharacterDetail: '/ricky-and-morthy-detail/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editHotel' | 'rickAndMortyCharacterDetail'> {
  editHotel: NavigationFunction;
  rickAndMortyCharacterDetail: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editHotel: (id) => generatePath(switchRoutes.editHotel, { id }),
  rickAndMortyCharacterDetail: id =>
    generatePath(switchRoutes.rickAndMortyCharacterDetail, { id }),
};
