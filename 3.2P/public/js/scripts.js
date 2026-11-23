const cardSection = document.querySelector('#card-section');
const statusMessage = document.querySelector('#status');

function addCards(items) {
  for (const item of items) {
    const column = document.createElement('div');
    column.className = 'col s12 m8 l5';
    column.innerHTML = `
      <article class="card">
        <div class="card-content">
          <h2 class="card-title"></h2>
          <p class="location"></p>
          <p class="description"></p>
        </div>
      </article>
    `;

    column.querySelector('h2').textContent = item.title;
    column.querySelector('.location').textContent = item.link;
    column.querySelector('.description').textContent = item.description;
    if (item.image) {
      const photo = document.createElement('img');
      photo.src = item.image;
      photo.alt = item.title;
      const photoContainer = document.createElement('div');
      photoContainer.className = 'card-image';
      photoContainer.append(photo);
      column.querySelector('.card').prepend(photoContainer);
    }
    cardSection.append(column);
  }
}

async function loadItems() {
  try {
    const response = await fetch('/api/items');
    if (!response.ok) {
      throw new Error('The server could not return the items.');
    }
    const items = await response.json();
    addCards(items);
    statusMessage.textContent = items.length ? '' : 'No found items are listed.';
  } catch (error) {
    statusMessage.textContent = 'Could not load found items. Please refresh to try again.';
    console.error(error);
  }
}

loadItems();
