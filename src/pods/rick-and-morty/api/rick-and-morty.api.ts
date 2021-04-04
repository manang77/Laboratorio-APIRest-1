import Axios from 'axios';
import {
  RickAndMortyApiModel,
} from './rick-and-morty.api.model';

export const getRickAndMorthyCharacters = async (
  page: number,
  name: string
): Promise<RickAndMortyApiModel> => {
  const urlBase = `${process.env.BASE_SERVER_URL}/character/?page=${page.toString()}`;
  const rickAndMortyCharacters = await Axios.get<RickAndMortyApiModel>(
    urlBase + (name ? `&name=${name}` : '')
  )
    .then(response => response.data);
  return rickAndMortyCharacters;
};
