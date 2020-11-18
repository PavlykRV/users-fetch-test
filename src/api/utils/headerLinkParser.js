export const getUrlSinceValue = (response) => {
  const nextURL = response.headers.get('link');
  return nextURL.match(/since=([0-9]*)/)[1];
}