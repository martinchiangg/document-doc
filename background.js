chrome.contextMenus.create({
  id: 'MDN',
  title: "Search '%s' in MDN",
  contexts: ['selection'],
});

chrome.contextMenus.create({
  id: 'W3S',
  title: "Search '%s' on W3S",
  contexts: ['selection'],
});

chrome.contextMenus.create({
  id: 'JOKE',
  title: 'Give me a programming joke',
  contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener(function (clickData) {
  if (clickData.menuItemId === 'MDN') {
    const websiteURLPartOne = 'https://developer.mozilla.org/en-US/search?q=';
    const websiteURL = websiteURLPartOne + clickData.selectionText;
    window.open(websiteURL);
  } else if (clickData.menuItemId === 'W3S') {
    const websiteURL =
      'https://www.google.com/search?source=hp&ei=bQYZX8GWJ4mvytMPmsGdyAs&q=site%3Aw3schools.com+' +
      clickData.selectionText +
      '&oq=site%3Aw3schools.com+' +
      clickData.selectionText +
      '&gs_lcp=CgZwc3ktYWIQAzoOCAAQ6gIQtAIQmgEQ5QI6BQgAELEDOggILhDHARCjAjoICAAQsQMQgwE6CwguELEDEMcBEKMCOg0ILhCxAxDHARCjAhAKOgIIADoFCC4QsQM6AgguOgoIABCxAxBGEPkBOggILhDHARCvAToOCC4QsQMQxwEQowIQgwE6BwgAELEDEApQ5QhYgDJgvTRoA3AAeACAAZMCiAGGH5IBBjguMTQuNZgBAKABAaoBB2d3cy13aXqwAQY&sclient=psy-ab&ved=0ahUKEwiBgdrSueLqAhWJl3IEHZpgB7kQ4dUDCAk&uact=5';
    window.open(websiteURL, '_blank');
  } else if (clickData.menuItemId === 'JOKE') {
    const requestedInfo = new XMLHttpRequest();
    let url =
      'https://sv443.net/jokeapi/v2/joke/Programming?format=txt&contains=' +
      clickData.selectionText;

    requestedInfo.onreadystatechange = () => {
      if (requestedInfo.readyState === 4 && requestedInfo.status === 200) {
        if (requestedInfo.responseText.slice(0, 9) === 'Error 106') {
          const requestedInfo2 = new XMLHttpRequest();
          const url2 =
            'https://sv443.net/jokeapi/v2/joke/Programming?format=txt';

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
  }
});
