const generateDiceBearAvataaars = (seed) =>
  
  `https://api.dicebear.com/7.x/pixel-art/svg?${seed}`;

const generateDiceBearBottts = (seed) =>
'https://api.dicebear.com/7.x/bottts/svg?${seed}';

const generateDiceBearGridy = (seed) =>
'https://api.dicebear.com/7.x/avataaars/svg?${seed}';

export const generateAvatar = () => {
  const data = [];

  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearAvataaars(Math.random());
    data.push(res);
  }
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearBottts(Math.random());
    data.push(res);
  }
  for (let i = 0; i < 2; i++) {
    const res = generateDiceBearGridy(Math.random());
    data.push(res);
  }
  return data;
};
