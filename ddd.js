const abc = ['abc', 'cba', 'bac', 'cab' ,'def', 'fed'];
const ans = [];

// Function to check if two strings are anagrams
function areAnagrams(str1, str2) {
    console.log(str1.split('').sort().join(''));
    // console.log(str2.split('').sort().join(''));
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Grouping the anagrams
while (abc.length > 0) {
  const currentElement = abc.shift();
  const group = [currentElement];

  for (let i = 0; i < abc.length; i++) {
    if (areAnagrams(currentElement, abc[i])) {
      group.push(abc.splice(i, 1)[0]);
      i--; // Adjust index after splicing an element
    }
  }
  ans.push(group);
}

console.log(ans);