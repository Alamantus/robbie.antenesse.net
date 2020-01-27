import md from 'snarkdown';

(function() {
  const markdownSections = document.getElementsByClassName('markdown');
  for (let i = 0; i < markdownSections.length; i++) {
    const section = markdownSections[i];
    section.innerHTML = md('<p>' + section.innerText.split('\\\\\\\\').join('</p><p>') + '</p>');
  }

  document.getElementById('year').innerHTML = new Date().getFullYear().toString();
})();