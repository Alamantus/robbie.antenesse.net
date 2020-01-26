import md from 'snarkdown';

const markdownSections = document.getElementsByClassName('markdown');
for (let i = 0; i < markdownSections.length; i++) {
  const section = markdownSections[i];
  section.innerHTML = md(section.innerText.replace(/\\n/g, '\n'));
}