import htmlTagsList, { htmlTags } from 'html-tags';
import voidHtmlTags from 'html-tags/void';
import camelCase from 'lodash.camelcase';
import Stack from './Stack';
import {
  ENDTAG_REX,
  STARTTAG_REX,
  ATTR_REX,
  EMPTY_ATTRS,
  isHTML
} from './regex';

const stack = new Stack<htmlTags>();

const validateHTML = (html: string) => {
  let htmlStr = html;
  if (!isHTML(html)) return false;
  while (htmlStr) {
    const endMatch = htmlStr.match(ENDTAG_REX);
    const startMatch = htmlStr.match(STARTTAG_REX);
    if (htmlStr.indexOf('</') === 0 && endMatch) {
      const [tag, tagName] = endMatch;
      htmlStr = htmlStr.substring(tag.length);
      if (stack.peek() === tagName) {
        stack.pop();
      } else {
        stack.empty();
        return false;
      }
    }
    if (htmlStr.indexOf('<') === 0 && startMatch) {
      const [tag, tagName] = startMatch;
      htmlStr = htmlStr.substring(tag.length);
      if (voidHtmlTags.some(val => val === tagName)) {
        continue;
      } else if (htmlTagsList.some(val => val === tagName)) {
        stack.push(tagName as htmlTags);
      } else {
        stack.empty();
        return false;
      }
    }
    const { str } = getText(htmlStr);
    htmlStr = str;
  }
  if (stack.size() === 0) {
    return true;
  }

  return false;
};

const getText = (htmlStr: string) => {
  let text = '';
  // Tohandle text like "2<3"
  while (
    htmlStr.indexOf('<') !== -1 &&
    !(htmlStr.match(STARTTAG_REX) || htmlStr.match(ENDTAG_REX))
  ) {
    const index = htmlStr.indexOf('<') === 0 ? 1 : htmlStr.indexOf('<');
    text += htmlStr.substring(0, index);
    htmlStr = htmlStr.substring(index);
  }
  text = text.replace(/[\r\n]+/g, '').replace(/\s+/g, ' ');
  return { text, str: htmlStr.trim() };
};

const parseStyles = (styles: string) => {
  const parsedStyles: Record<string, string> = {};
  styles.split(';').forEach(style => {
    const [key, value] = style.split(':').map(val => val.trim());
    const styleKey = camelCase(key);
    parsedStyles[styleKey] = value;
  });
  return parsedStyles;
};

const parseAttributes = (tag: string) => {
  const attributesMatch = tag.match(ATTR_REX);
  const attributesObj: Record<string, any> = {};
  if (attributesMatch) {
    const [, ...attributes] = attributesMatch;
    attributes.forEach(attribute => {
      const [key, ...values] = attribute.split('=');
      if (EMPTY_ATTRS.includes(key)) {
        attributesObj[key] = true;
      } else {
        const value = values.join('=');
        const formattedValue = value?.replace(/"/g, '');
        attributesObj[key] =
          key === 'style' ? parseStyles(formattedValue) : formattedValue;
      }
    });
  }
  return attributesObj;
};

const htmlToJson = (html: string) => {
  let htmlStr = html;
  let json: any = {};
  if (htmlStr.indexOf('<') === 0 && htmlStr.match(STARTTAG_REX)) {
    const match = htmlStr.match(STARTTAG_REX);
    if (match) {
      const [tag, tagName] = match;
      htmlStr = htmlStr.substring(tag.length)?.trim();
      json.tag = tagName;
      const { text, str: strAfterText } = getText(htmlStr);
      if (text) json.text = text.trim();
      const attributes = parseAttributes(tag);
      json = { ...json, ...attributes };

      htmlStr = strAfterText;
      const endMatch = htmlStr.match(ENDTAG_REX);

      if (voidHtmlTags.some(val => val === tagName)) {
        if (htmlStr) json.str = htmlStr;
        return json;
      } else if (endMatch) {
        const remainingStr = htmlStr.substring(endMatch[0].length);
        if (remainingStr) json.str = remainingStr;
        return json;
      } else {
        const children = [];

        while (htmlStr.match(STARTTAG_REX)) {
          // Calling Function recursively
          const { str, ...rest } = htmlToJson(htmlStr);
          htmlStr = getText(str).str;
          children.push({ ...rest });
        }

        const endMatchs = htmlStr.match(ENDTAG_REX);
        if (endMatchs) {
          const remainingStr = htmlStr.substring(endMatchs[0].length);
          if (remainingStr) json.str = remainingStr;
          json.children = children;
          return json;
        }
      }
    }
  }
};

const convertHTMLToJson = (html: string) => {
  const formattedHTML = html.replace(/<!DOCTYPE[^>[]*(\[[^]]*\])?>/, '').trim();
  const isValidHTML = validateHTML(formattedHTML);
  if (!isValidHTML) {
    throw Error('Invalid HTML');
  }
  return htmlToJson(formattedHTML);
};
export default convertHTMLToJson;
