import { getUrlSinceValue } from './utils/headerLinkParser'

const url = 'https://api.github.com/users';

async function fetchUsers({ quantity, currentSince }) {
  const response = await fetch(
    `${url}?per_page=${quantity}&since=${currentSince}`,
  );
  if (response.ok) {
    const users = await response.json();
    const nextSince = getUrlSinceValue(response)
    
    return { users, nextSince };
  }

  console.error('Users fetch error: ', response.statusText);
}

async function fetchUser(id) {
  const response = await fetch(`${url}/${id}`);
  if (response.ok) {
    const user = await response.json();
    return user;
  }
  console.error('User fetch error: ', response.statusText);
}
const Api = {
  fetchUsers,
  fetchUser,
};

export default Api;
