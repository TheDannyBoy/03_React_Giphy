const getGifs = async(searchWord) => {
  const limit = 10;
  const apiKey = 'rVuSlO19gBOeDOHFjXbIhKQeVyOWALie';
  const escapedWord = encodeURI(searchWord); 
  const url = `https://api.giphy.com/v1/gifs/search?q=${escapedWord}&limit=${limit}&api_key=${apiKey}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  return data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));
};

export default getGifs;
