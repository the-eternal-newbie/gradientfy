const themes = require('../style/colors');
const fs = require('fs');

const gradientThemes = () => {
  const gradientThemes= {};
  Object.keys(themes).forEach((theme) => {
    const gradients = {
      primary: [
        { color: themes[theme]['c'], percent: 0 },
        { color: themes[theme]['a'], percent: 50 },
        { color: themes[theme]['g'], percent: 80 },
      ],
      'inverse-primary': [
        { color: themes[theme]['c'], percent: 0 },
        { color: themes[theme]['a'], percent: 20 },
        { color: themes[theme]['g'], percent: 50 },
      ],
      secondary: [
        { color: themes[theme]['j'], percent: 0 },
        { color: themes[theme]['h'], percent: 50 },
        { color: themes[theme]['i'], percent: 80 },
      ],
      'inverse-secondary': [
        { color: themes[theme]['j'], percent: 0 },
        { color: themes[theme]['h'], percent: 20 },
        { color: themes[theme]['i'], percent: 50 },
      ],
      alternative: [
        { color: themes[theme]['b'], percent: 0 },
        { color: themes[theme]['d'], percent: 50 },
        { color: themes[theme]['e'], percent: 80 },
      ],
      'inverse-alternative': [
        { color: themes[theme]['b'], percent: 0 },
        { color: themes[theme]['d'], percent: 20 },
        { color: themes[theme]['e'], percent: 50 },
      ],
      gradient2: [],
      gradient3: [],
      gradient4: [],
      gradient5: [],
      gradient6: [],
      gradient7: [],
      gradient8: [],
      gradient9: [],
      gradient10: [],
    };
    for (
      let index = 1;
      index < Object.keys(themes[theme]).length;
      index++
    ) {
      const key = Object.keys(gradients).filter((value) =>
        value.includes(`${index + 1}`) ? value : null
      )[0];
      Object.keys(themes[theme]).forEach((color, colorIndex) => {
        if (colorIndex <= index)
          gradients[key].push({
            color: themes[theme][color],
            percent: Math.floor((100 / index) * colorIndex),
          });
      });
    }
    gradientThemes[theme] = gradients;
  });
  fs.writeFile(
    'src/style/gradientThemes.ts',
    'const gradientThemes =' + JSON.stringify(gradientThemes, undefined, 2) + '\nexport default gradientThemes;\nexport type Themes = keyof typeof gradientThemes;\nexport type Gradients = keyof typeof gradientThemes["base"];', (err) => {
      if (err) throw err;
      console.log('Saved');
    }
  );
};

gradientThemes();
