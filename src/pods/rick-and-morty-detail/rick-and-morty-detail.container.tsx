import React from 'react';
import { useParams } from 'react-router-dom';
import { getRickAndMortyDetailData } from './rick-and-morty-detail.api.vm';
import { RickAndMortyDetailComponent } from './rick-and-morty-detail.component';
import {
  RickAndMortyDetailVm,
  getNewRickAndMortyDetailVm,
} from './rick-and-morty-detail.vm';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import * as characterStyles from './rick-and-morty-detail.styles';

interface RickAndMortyDetailParams {
  id: string;
}

export const RickAndMortyDetailContainer: React.FC = () => {
  const { id } = useParams<RickAndMortyDetailParams>();
  const history = useHistory();
  const [
    rickAndMortyDetailCharacter,
    setRickAndMortyDetailCharacter,
  ] = React.useState<RickAndMortyDetailVm>(getNewRickAndMortyDetailVm());
  const [dataState, setDataState] = React.useState(true);
  const [messageState, setMessageState] = React.useState(true);
  const [messageText, setMessageText] = React.useState('');

  const loadRickAndMortyCharacter = async () => {
    try {
      const viewModelGitUserData: RickAndMortyDetailVm = await getRickAndMortyDetailData(
        id
      );
      setRickAndMortyDetailCharacter(viewModelGitUserData);
      setDataState(false);
    } catch (err) {
      setMessageText(`An error has occurred: ${err}`);
      setMessageState(false);
    }
  };

  const handleExitClickButton = () => {
    history.goBack();
  };

  React.useEffect(() => {
    loadRickAndMortyCharacter();
  }, []);

  return (
    <>
      <div className={characterStyles.characterContainer}>
        <div hidden={messageState} className={characterStyles.messageContainer}>
          <Alert
            variant="filled"
            severity="info"
            action={
              <IconButton onClick={() => handleExitClickButton()}>
                <ExitToAppIcon fontSize="small" color="primary" />
              </IconButton>
            }
          >
            {messageText}
          </Alert>
        </div>
        <div hidden={dataState}>
          <div className={characterStyles.characterCardContainer}>
            <RickAndMortyDetailComponent
              rickAndMortyCharacter={rickAndMortyDetailCharacter}
            />
          </div>
        </div>
      </div>
    </>
  );
};
