export const EVENT_TYPES = {
  DOWNLOAD: 'Download',
  NAVIGATE: 'Navigate',
};

const trackEvent = ({ eventName, values }) => {
  // Track the event

  console.log('Tracking event 📡 ', eventName, values);
  window.gtag('event', eventName, {
    values,
  });
};

export default trackEvent;
