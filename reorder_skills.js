const fs = require('fs');

const file = 'src/components/Skills.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<div className="skills-container">([\s\S]*?)<\/div>\s*<\/div>/;
const match = content.match(regex);

if (match) {
    let inner = match[1];
    // Split into groups
    const groupRegex = /<div className="skill-group">[\s\S]*?<\/div>\s*<\/div>/g;
    const groups = inner.match(groupRegex);
    
    // groups[0] = AI
    // groups[1] = Languages
    // groups[2] = Frontend
    // groups[3] = Backend
    // groups[4] = Databases
    // groups[5] = Tools
    
    // new order: 1, 2, 3, 0, 4, 5
    const reordered = [
        groups[1],
        groups[2],
        groups[3],
        groups[0],
        groups[4],
        groups[5]
    ];
    
    let newInner = '\n' + reordered.join('\n') + '\n                ';
    
    content = content.replace(inner, newInner);
    fs.writeFileSync(file, content, 'utf8');
    console.log("Successfully reordered.");
} else {
    console.log("Failed to match skills-container");
}
