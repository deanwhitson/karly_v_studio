const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'Notes.js');
const content = fs.readFileSync(filePath, 'utf8');

// Define the notes to remove (by their title or content)
const notesToRemove = [
  'Vertical, Verbatim',
  'What You Think I Meant',
  'Nothing Is Wrong',
  'It Was Easier When We Didn\'t Have To Try',
  'What I Didn\'t Say',
  'I Chose Not To Say It'
];

// Function to find and remove a note object
function removeNote(content, identifier) {
  // Find the start of the note
  const startPattern = identifier === 'Vertical, Verbatim'
    ? /,\s*\{\s*\n\s*date:\s*"3 May 2026",\s*\n\s*content:\s*`My dear friend/
    : new RegExp(`\\{\\s*\\n\\s*id:\\s*\\d+,\\s*\\n\\s*title:\\s*"${identifier}"`);

  const match = content.match(startPattern);
  if (!match) return content;

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
notesToRemove.forEach(noteTitle => {
  console.log(`Removing: ${noteTitle}`);
  newContent = removeNote(newContent, noteTitle);
});

// Now renumber the IDs
// The remaining notes should be: 21, 19, 17, 14, 13, 10, 9, 8, 7, 6, 5, 4, 3, 2
// We want to renumber them to: 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2

const idMapping = {
  21: 15,
  19: 14,
  17: 13,
  14: 12,
  13: 11,
  10: 10,  // stays the same
  9: 9,    // stays the same
  8: 8,    // stays the same
  7: 7,    // stays the same
  6: 6,    // stays the same
  5: 5,    // stays the same
  4: 4,    // stays the same
  3: 3,    // stays the same
  2: 2     // stays the same
};

Object.entries(idMapping).forEach(([oldId, newId]) => {
  if (oldId !== newId) {
    console.log(`Renumbering id ${oldId} to ${newId}`);
    const regex = new RegExp(`(id:\\s*)${oldId}`, 'g');
    newContent = newContent.replace(regex, `$1${newId}`);
  }
});

// Write the modified content back
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Done!');
