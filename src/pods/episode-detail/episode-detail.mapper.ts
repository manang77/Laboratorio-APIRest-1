import { EpisodeDetailApiModel, CharacterDataApi } from './api';
import { EpisodeDetailVm, EpisodeCharVm } from './episode-detail.vm';
import { getCharactersData  } from './api';

export const mapEpisodeFromApiToVM = async (
  episodeDetailApi: EpisodeDetailApiModel
): Promise<EpisodeDetailVm> => {
  const charactersData: EpisodeCharVm[] = await episodeCharactersFromApiToVm(episodeDetailApi.characters);
  const episodeyDetailVm: EpisodeDetailVm = {
    id: episodeDetailApi.id.toString(),
    name: episodeDetailApi.name,
    air_date: episodeDetailApi.air_date,
    episode: episodeDetailApi.episode,
    characters: charactersData,
    url: episodeDetailApi.url,
    created: episodeDetailApi.created
  };
  return episodeyDetailVm;
};

const getEpisodeCharactersData = async (characters: string): Promise<EpisodeCharVm[]> => {
  const episodeCharactersApi: CharacterDataApi[] = await getCharactersData(characters);
  const episodeCharactersVM: EpisodeCharVm[] = episodeCharactersApi.reduce((charactersVM, characterApi) => {
    const characterVM: EpisodeCharVm = {
      id: characterApi.id.toString(),
      name: characterApi.name,
      image: characterApi.image,
    }
    charactersVM.push(characterVM);
    return charactersVM;
  }, []);
  return episodeCharactersVM;
}

const episodeCharactersFromApiToVm = async (charactersApi: string[]): Promise<EpisodeCharVm[]> => {

  const ids = charactersApi.reduce((charactersIds, character) => {
    return `${character.split("/")[character.split("/").length - 1]},${charactersIds}`
  }, "");
  const charactersIds = `[${ids.slice(0, ids.length - 1)}]`;
  const charactersVM: EpisodeCharVm[] = await getEpisodeCharactersData(charactersIds);
  return charactersVM;
}
