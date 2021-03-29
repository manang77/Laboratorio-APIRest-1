import Axios from 'axios';
import {
  EpisodesApiModel
} from './episodes.api.model';

export const getEpisodes = async (
  page: number,
  name: string
): Promise<EpisodesApiModel> => {

  const urlBase = `${process.env.BASE_SERVER_URL}/episode/?page=${page}`
  const { data } = await Axios.get<EpisodesApiModel>(
    urlBase + (name ? `&name=${name}` : '')
  );
  return data;
};
