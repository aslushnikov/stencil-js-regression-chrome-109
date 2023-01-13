import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'tesme',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      profile: true,
    },
    {
      type: 'dist-custom-elements',
      profile: true,
    },
    {
      type: 'docs-readme',
      profile: true,
    },
    {
      type: 'www',
      profile: true,
      serviceWorker: null, // disable service workers
    },
  ],
};
