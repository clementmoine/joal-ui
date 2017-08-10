// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import DashboardPage from './DashBoard';
import SettingsPage from './Settings';
import Historypage from './EventHistory';
import NavigationBar from './NavigationBar';
import TorrentDropZone from './TorrentDropZone';
import FullScreenOverlayFetchingIndicator from '../components/Generics/FetchingIndicator/FullScreenOverlayFetchingIndicator';
import { uploadTorrent } from '../api';
import UiConfigChanger from './UiConfigChanger';
import type { StateType } from '../types';

type Props = {
  isGlobalFetching: boolean,
  onDrop: () => void
};

type DropzoneFile = {
  lastModified: number,
  name: string,
  size: number,
  type: string
};

const style = {
  configChangerWrapper: {
    position: 'absolute',
    top: 85,
    left: 0,
    right: 0,
    zIndex: 99999
  }
};

const App = (props: Props) => {
  const { isGlobalFetching, onDrop } = props;
  return (
    <TorrentDropZone onDrop={onDrop}>
      <div className="container-fluid">
        <div style={{ paddingTop: 20 }}>
          <div style={style.configChangerWrapper}>
            <div className="row">
              <div className="col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
                <UiConfigChanger />
              </div>
            </div>
          </div>
          <main>
            <Route exact path="/history" component={Historypage} />
            <Route exact path="/settings" component={SettingsPage} />
            <Route exact path="/" component={DashboardPage} />
          </main>
          <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0 }}>
            <NavigationBar />
          </div>
          <FullScreenOverlayFetchingIndicator active={isGlobalFetching} />
        </div>
      </div>
    </TorrentDropZone>
  );
};

function mapStateToProps(state: StateType) {
  const isGlobalFetching = !state.api.stomp.isConnected
    || !state.api.stomp.isFullyInit
    || state.api.client.isFetching;
  return {
    isGlobalFetching,
    onDrop: (accepted: Array<DropzoneFile>/* , rejected: Array<DropzoneFile> */) => {
      accepted.forEach(file => uploadTorrent(file));
    }
  };
}

export default connect(mapStateToProps)(App);
