function parallaxV1(event: MouseEvent, depths = [0.01, 0.02, 0.06]) {
  // https://codepen.io/oscicen/pen/zyJeJw
  //
  const windowCenter = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

  const position = depths.map((depth) => {
    const xOffset = (event.clientX - windowCenter.x) * depth;
    const yOffset = (event.clientY - windowCenter.y) * depth;
    return `${50 - xOffset}% ${50 - yOffset}%`;
  });

  return position.join(', ');
}

function parallaxV2(event: MouseEvent) {
  const x = (event.clientX / window.innerWidth) * 100 - 50;
  const y = (event.clientY / window.innerHeight) * 100 - 50;

  const distance = Math.hypot(x, y);
  const angle = Math.atan2(y, x);

  const [posX, posY] = [
    distance * Math.cos(angle) + 50,
    distance * Math.sin(angle) + 50,
  ];

  return `${posX}% ${posY}%`;
}
