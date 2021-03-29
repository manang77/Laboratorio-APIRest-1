import Axios from 'axios';
import { RickAndMortyCharacterDataApi } from './rick-and-morty-detail.api.model';

export const getRickAndMorthyCharacterDetail = async (
  id: string
): Promise<RickAndMortyCharacterDataApi> => {
  const urlBase = `${process.env.BASE_SERVER_URL}/character/${id}`;
  try {
    const rickAndMortyCharacterDetail = await Axios.get<
      RickAndMortyCharacterDataApi
    >(urlBase)
      .then(response => {
        return response.data;
      });
    return rickAndMortyCharacterDetail;
  } catch {
    console.log('Not such character');
  }
};
