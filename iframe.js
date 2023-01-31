var iframe = document.createElement('iframe');

iframe.setAttribute('src', 'https://widgets.remind.com/widget?height=500&join=true&token=7f2ea800007a013982df0242ac110013');
iframe.setAttribute('id', 'remind101-widget-0');
iframe.setAttribute('class', 'remind101-messages');
iframe.setAttribute('frameBorder', '0');
iframe.setAttribute('allowtransparency', 'true');
iframe.setAttribute('style', 'border: 0;');
iframe.setAttribute('title', 'Remind messages');
iframe.setAttribute('width', '100%');
iframe.setAttribute('height', '500px');

var scriptTags = document.getElementsByTagName('script');

for (var i = 0; i < scriptTags.length; i++) {
  var scriptTag = scriptTags[i],
      src = scriptTag.getAttribute('src');

  if (/token=7f2ea800007a013982df0242ac110013/.test(src)) {
    scriptTag.parentNode.insertBefore(iframe, scriptTag);
  }
}
