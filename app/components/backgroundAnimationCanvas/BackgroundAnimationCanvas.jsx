import React, { useEffect, useState } from 'react';

const BackgroundAnimationCanvas = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height: height - 5,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  }
  const { width, height } = useWindowDimensions();
  const canvas = document.querySelector('canvas');
  canvas.width = width;
  canvas.height = height;

  const c = canvas.getContext('2d');

  const color = [
    '#343434',
    '#6f6e6e',
    '#767676',
    '#5b5b5b',
  ];

  const maxRadius = 5;
  const minRadius = 2;
  const mouse = {
    x: undefined,
    y: undefined,
  };

  window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  });

  function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color[Math.floor(Math.random() * color.length)];

    this.draw = function () {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.stroke();
    };

    this.update = function () {
      this.draw();
      if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
        this.dx = -this.dx;
      }
      if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y -= this.dy;

      if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50 && this.radius < maxRadius) {
        this.radius += 1;
      } else if (this.radius > minRadius) {
        this.radius -= 1;
      }
    };
  }

  let circleArray = [];

  function init() {
    circleArray = [];
    for (let i = 0; i < 40; i++) {
      const r = Math.floor(Math.random() * 3) + 1;
      const x = Math.random() * (innerWidth - r * 2) + r;
      const y = Math.random() * (innerHeight - r * 2) + r;
      const dx = (Math.random() - 0.5) * 0.5;
      const dy = (Math.random() - 0.5) * 0.5;
      circleArray.push(new Circle(x, y, dx, dy, r));
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
  }

  animate();
  init();

  return (<div />);
};

export default BackgroundAnimationCanvas;
