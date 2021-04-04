import Axios from 'axios';
import { EpisodeDetailApiModel } from './episode-detail.api.model';
import { CharacterDataApi } from './episode-detail.api.model';

export const getEpisodeDetail = async (
  id: string
): Promise<EpisodeDetailApiModel> => {

  const urlBase = `${process.env.BASE_SERVER_URL}/episode/${id}`;
  const { data } = await Axios.get<EpisodeDetailApiModel>(urlBase);
  return data;
};

export const getCharactersData = async (
  charactersIds: string
): Promise<CharacterDataApi[]> => {
  const urlBase = `${process.env.BASE_SERVER_URL}/character/${charactersIds}`;
  const { data } = await Axios.get< CharacterDataApi[]>(urlBase);
  return data;
}

