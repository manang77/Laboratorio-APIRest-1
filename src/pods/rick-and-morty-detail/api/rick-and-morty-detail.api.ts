import Axios from 'axios';
import { RickAndMortyCharacterDataApi } from './rick-and-morty-detail.api.model';

export const getRickAndMorthyCharacterDetail = async (
  id: string
): Promise<RickAndMortyCharacterDataApi> => {
  const urlBase = `${process.env.BASE_SERVER_URL}/character/${id}`;
  const { data } = await Axios.get<RickAndMortyCharacterDataApi>(urlBase);
  return data;

};
