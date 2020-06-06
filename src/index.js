/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension, no-unused-vars */

/* @jsx createElement */

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

function render() {
  const element = (
    <div>
      <p>간단 계산기</p>
      <p>{0}</p>
      <p>
        {Array(10).fill(0).map((i, index) => (
          <button type="button">{index}</button>
        ))}
      </p>
      <p>
        {['+', '-', '*', '/'].map(i => (
          <button type="button">{i}</button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
