// This is kept to support older versions of Post CSS custom media plugin, which requires a JS object
// Any changes here should also be made on resolutions.css
// This can be removed once all our projects starts using new version of Post css custom media plugin

// eslint-disable-next-line import/no-commonjs
module.exports = {
  '--screen-desktop': '(min-width: 1184px)',
  '--screen-tabletOrLower': '(max-width: 1183px)',
  '--screen-tablet': '(min-width: 768px) and (max-width: 1183px)',
  '--screen-landscape': '(min-width: 481px) and (max-width: 768px)',
  '--screen-mobile': '(min-width: 360px) and (max-width: 480px)',
  '--screen-smaller': '(max-width: 359px)',
  '--screen-shorter': '(max-height: 570px)',
  '--landscape': '(orientation: landscape)',
};
