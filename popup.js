document.querySelector('#MDN').onclick = function () {
  if (document.querySelector('input').value === '') {
    window.open('https://developer.mozilla.org/en-US/', '_blank');
  } else {
    const searchTerm = document.querySelector('input').value;
    const websiteURL =
      'https://developer.mozilla.org/en-US/search?q=' + searchTerm;
    window.open(websiteURL, '_blank');
  }
};

document.querySelector('#W3S').onclick = function () {
  if (document.querySelector('input').value === '') {
    window.open('https://www.w3schools.com', '_blank');
  } else {
    const searchTerm = document.querySelector('input').value;
    const websiteURL =
      'https://www.google.com/search?source=hp&ei=bQYZX8GWJ4mvytMPmsGdyAs&q=site%3Aw3schools.com+' +
      searchTerm +
      '&oq=site%3Aw3schools.com+' +
      searchTerm +
      '&gs_lcp=CgZwc3ktYWIQAzoOCAAQ6gIQtAIQmgEQ5QI6BQgAELEDOggILhDHARCjAjoICAAQsQMQgwE6CwguELEDEMcBEKMCOg0ILhCxAxDHARCjAhAKOgIIADoFCC4QsQM6AgguOgoIABCxAxBGEPkBOggILhDHARCvAToOCC4QsQMQxwEQowIQgwE6BwgAELEDEApQ5QhYgDJgvTRoA3AAeACAAZMCiAGGH5IBBjguMTQuNZgBAKABAaoBB2d3cy13aXqwAQY&sclient=psy-ab&ved=0ahUKEwiBgdrSueLqAhWJl3IEHZpgB7kQ4dUDCAk&uact=5';
    window.open(websiteURL, '_blank');
  }
};

document.querySelector('#Joke').onclick = function () {
  const requestedInfo = new XMLHttpRequest();
  const searchTerm = document.querySelector('input').value;
  let url =
    'https://sv443.net/jokeapi/v2/joke/Programming?format=txt&contains=' +
    searchTerm;

  requestedInfo.onreadystatechange = () => {
    if (requestedInfo.readyState === 4 && requestedInfo.status === 200) {
      if (requestedInfo.responseText.slice(0, 9) === 'Error 106') {
        const requestedInfo2 = new XMLHttpRequest();
        const url2 = 'https://sv443.net/jokeapi/v2/joke/Programming?format=txt';

        requestedInfo2.onreadystatechange = () => {
          if (
            requestedInfo2.readyState === 4 &&
            requestedInfo2.status === 200
          ) {
            alert(requestedInfo2.responseText);
          }
        };
        requestedInfo2.open('GET', url2, true);
        requestedInfo2.send();
      } else {
        alert(requestedInfo.responseText);
      }
    }
  };

  requestedInfo.open('GET', url, true);
  requestedInfo.send();
};
