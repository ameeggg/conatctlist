/* eslint-disable @typescript-eslint/no-explicit-any */
import { merge } from 'webpack-merge';

export default (config: any, context: any) => {
  return merge(config, {
    devServer: {
      /**
       * Commented out since proxy server will not be use.
       * Will removed the websocket error.
       */
      // client: {
      //   webSocketURL: 'wss://local.dp.pjdm.app/ws',
      // },
    },
  });
};
