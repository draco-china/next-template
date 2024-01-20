const {
  cleanupSVG,
  importDirectory,
  isEmptyColor,
  parseColors,
  runSVGO,
} = require('@iconify/tools');
const path = require('path');
const fs = require('fs').promises;

(async () => {
  // Import icons
  const iconSet = await importDirectory(path.join(__dirname, 'local'), {
    prefix: 'local',
  });

  // Validate, clean up, fix palette and optimise
  iconSet.forEach((name: string, type: string) => {
    if (type !== 'icon') {
      return;
    }

    const svg = iconSet.toSVG(name);
    if (!svg) {
      // Invalid icon
      iconSet.remove(name);
      return;
    }

    // Clean up and optimise icons
    try {
      // Clean up icon code
      cleanupSVG(svg);

      // Assume icon is monotone: replace color with currentColor, add if missing
      // If icon is not monotone, remove this code
      parseColors(svg, {
        defaultColor: 'currentColor',
        callback: (attr: any, colorStr: string, color: string) => {
          return !color || isEmptyColor(color) ? colorStr : 'currentColor';
        },
      });

      // Optimise
      runSVGO(svg);
    } catch (err) {
      // Invalid icon
      console.error(`Error parsing ${name}:`, err);
      iconSet.remove(name);
      return;
    }

    // Update icon
    iconSet.fromSVG(name, svg);
  });

  // Export as IconifyJSON
  const exported = JSON.stringify(iconSet.export(), null, '\t') + '\n';

  // Save to file
  await fs.writeFile(
    path.join(__dirname, '../../components/Icon', 'local.json'),
    exported,
    'utf8',
  );
})();
