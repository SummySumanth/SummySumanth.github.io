import mixpanel from 'mixpanel-browser';

import { ENV } from '../configs/configs';

const EVENT_TYPES = {
  DOWNLOAD: 'File Download',
  NAVIGATE: 'Navigate',
};

const initializeMixpanel = () => {
  mixpanel.init('3b1dd0f7b68e8f6e69482ed5962ab076', { track_pageview: true, persistence: 'localStorage' });
};

const trackEvent = ({ eventName, values }) => {
  // Track the event
  mixpanel.track(eventName, {
    ENV,
    values,
  });
};

const trackFileDownload = (fileName) => {
  trackEvent({
    eventName: EVENT_TYPES.DOWNLOAD,
    values: {
      fileName,
    },
  });
};

export { initializeMixpanel, trackEvent, trackFileDownload, EVENT_TYPES };
