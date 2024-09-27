export const STARTTAG_REX =
  /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
export const ENDTAG_REX = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
export const ATTR_REX =
  /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
export const EMPTY_ATTRS = [
  'checked',
  'compact',
  'declare',
  'defer',
  'disabled',
  'ismap',
  'multiple',
  'nohref',
  'noresize',
  'noshade',
  'nowrap',
  'readonly',
  'selected'
];
export const isHTML = RegExp.prototype.test.bind(/<\/?[a-z][\s\S]*>/i);
