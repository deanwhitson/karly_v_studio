const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'Notes.js');
const content = fs.readFileSync(filePath, 'utf8');

// Define the notes to remove by their exact title
const notesToRemove = [
  { title: 'Vertical, Verbatim', hasId: false },
  { title: 'What You Think I Meant', hasId: true },
  { title: 'Nothing Is Wrong', hasId: true },
  { title: 'It Was Easier When We Didn\'t Have To Try', hasId: true },
  { title: 'What I Didn\'t Say', hasId: true },
  { title: 'I Chose Not To Say It', hasId: true }
];

// Function to find and remove a note object
function removeNote(content, noteInfo) {
  let startPattern;

  if (noteInfo.hasId) {
    // Find by title with id
    startPattern = new RegExp(`\\{\\s*\\n\\s*id:\\s*\\d+,\\s*\\n\\s*title:\\s*"${noteInfo.title}"`);
  } else {
    // Find Vertical, Verbatim (no id, has date)
    startPattern = /,\s*\{\s*\n\s*date:\s*"3 May 2026",\s*\n\s*content:\s*`My dear friend/;
  }

  const match = content.match(startPattern);
  if (!match) {
    console.log(`WARNING: Could not find note: ${noteInfo.title}`);
    return content;
  }

  const startIndex = match.index;
  let braceCount = 0;
  let inString = false;
  let escapeNext = false;
  let endIndex = startIndex;

  // Find the matching closing brace
  for (let i = startIndex; i < content.length; i++) {
    const char = content[i];

    if (escapeNext) {
      escapeNext = false;
      continue;
    }

    if (char === '\\') {
      escapeNext = true;
      continue;
    }

    if (char === '`' || char === '"' || char === "'") {
      inString = !inString;
      continue;
    }

    if (!inString) {
      if (char === '{') {
        braceCount++;
      } else if (char === '}') {
        braceCount--;
        if (braceCount === 0) {
          endIndex = i + 1;
          break;
        }
      }
    }
  }

  // Remove the note and the preceding comma if there is one
  let before = content.substring(0, startIndex);
  let after = content.substring(endIndex);

  // Remove trailing comma before the note
  before = before.replace(/,\s*$/, '');

  // If the next character after the note is a comma, remove it
  after = after.replace(/^\s*,\s*/, '');

  return before + after;
}

// Remove all specified notes
let newContent = content;
notesToRemove.forEach(noteInfo => {
  console.log(`Removing: ${noteInfo.title}`);
  newContent = removeNote(newContent, noteInfo);
});

// Now renumber the IDs
// After removal, we should have: 21, 19, 17, 14, 13, 10, 9, 8, 7, 6, 5, 4, 3, 2
// We want to renumber them to: 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2

const idMapping = {
  21: 15,
  19: 14,
  17: 13,
  14: 12,
  13: 11
};

Object.entries(idMapping).forEach(([oldId, newId]) => {
  console.log(`Renumbering id ${oldId} to ${newId}`);
  const regex = new RegExp(`(id:\\s*)${oldId}(,)`, 'g');
  newContent = newContent.replace(regex, `$1${newId}$2`);
});

// Write the modified content back
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Done!');
