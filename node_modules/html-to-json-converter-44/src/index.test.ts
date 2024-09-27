import { htmlToJson } from './index';

describe('HTML validation', () => {
  it('should throw error if html is not valid', () => {
    const html = '<div>test</span>';
    expect(() => htmlToJson(html)).toThrowError('Invalid HTML');
  });
  it('should throw error if nested html is not valid', () => {
    const html = '<div><p>test<span></div>';
    expect(() => htmlToJson(html)).toThrowError('Invalid HTML');
  });
  it('should throw error if closing tag is not found', () => {
    const html = '<div><p>test</div>';
    expect(() => htmlToJson(html)).toThrowError('Invalid HTML');
  });
  it('should throw error if input is not html', () => {
    const html = '{"value": "json"}';
    expect(() => htmlToJson(html)).toThrowError('Invalid HTML');
  });
  it('should throw error if tag is not HTMLss tag', () => {
    const html = '<div><div>test</div>';
    expect(() => htmlToJson(html)).toThrowError();
  });
  it('should throw error if tag is not HTML tag', () => {
    const html = '<divs>test</divs>';
    expect(() => htmlToJson(html)).toThrowError('Invalid HTML');
  });
  it('should run fine if void element is used', () => {
    const html = '<div><input /></div>';
    expect(htmlToJson(html)).toBeTruthy();
  });
});

describe('HTML to JSON convertion', () => {
  it('should return correct json', () => {
    const html = '<div>test</div>';
    const expectedResponse = { tag: 'div', text: 'test' };
    expect(htmlToJson(html)).toEqual(expectedResponse);
  });
  it('should return correct nested json', () => {
    const html = '<div>test<p>abc</p></div>';
    const expectedResponse = {
      tag: 'div',
      text: 'test',
      children: [{ tag: 'p', text: 'abc' }]
    };
    expect(htmlToJson(html)).toEqual(expectedResponse);
  });
  it('should return correct json with attributes', () => {
    const html = '<div id="first-div">test<p class="para">abc</p></div>';
    const expectedResponse = {
      tag: 'div',
      text: 'test',
      id: 'first-div',
      children: [{ tag: 'p', text: 'abc', class: 'para' }]
    };
    expect(htmlToJson(html)).toEqual(expectedResponse);
  });
  it('should return correct json with boolean attributes', () => {
    const html = '<div id="first-div">test<input readonly disabled /></div>';
    const expectedResponse = {
      tag: 'div',
      text: 'test',
      id: 'first-div',
      children: [{ tag: 'input', readonly: true, disabled: true }]
    };
    expect(htmlToJson(html)).toEqual(expectedResponse);
  });
  it('should return correct json with style attribute', () => {
    const html =
      '<div id="first-div" style="background-color: yellow; font-size: 14px">test<input readonly disabled /></div>';
    const expectedResponse = {
      tag: 'div',
      text: 'test',
      id: 'first-div',
      style: { backgroundColor: 'yellow', fontSize: '14px' },
      children: [{ tag: 'input', readonly: true, disabled: true }]
    };
    expect(htmlToJson(html)).toEqual(expectedResponse);
  });
  it('should return correct json for test example', () => {
    const html = `<div style="background-color: yellow; font-size: 14px"
      id="first-div">
      Hello, friends
      <p class="para" style="font-family: monospace; font-size: 11px">
      Lorem ipsum dolor sit
      </p>
      <footer style="width: auto; height: 100px; color: blue">
      <span>
      This is the end
      </span>
      </footer>
      </div>`;
    const expectedResponse = {
      tag: 'div',
      text: 'Hello, friends',
      style: {
        backgroundColor: 'yellow',
        fontSize: '14px'
      },
      id: 'first-div',
      children: [
        {
          tag: 'p',
          text: 'Lorem ipsum dolor sit',
          class: 'para',
          style: {
            fontFamily: 'monospace',
            fontSize: '11px'
          }
        },
        {
          tag: 'footer',
          style: {
            width: 'auto',
            height: '100px',
            color: 'blue'
          },
          children: [{ tag: 'span', text: 'This is the end' }]
        }
      ]
    };
    expect(htmlToJson(html)).toEqual(expectedResponse);
  });
});
