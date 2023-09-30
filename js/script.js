const valuesCards = [
  {
    'image': 'css\\images\\witcher_1.png',
    'genre': 'Фэнтези',
    'mark': '4.6',
    'name': 'Ведьмак: Последнее желание',
  },
  {
    'image': 'css\\images\\witcher_2.png',
    'genre': 'Фэнтези',
    'mark': '4.5',
    'name': 'Ведьмак: Меч предназначения',
  },
  {
    'image': 'css\\images\\witcher_3.png',
    'genre': 'Фэнтези',
    'mark': '4.9',
    'name': 'Ведьмак: Кровь эльфов',
  },
  {
    'image': 'css\\images\\witcher_4.png',
    'genre': 'Фэнтези',
    'mark': '5.0',
    'name': 'Ведьмак: Час презрения',
  },
  {
    'image': 'css\\images\\witcher_5.png',
    'genre': 'Фэнтези',
    'mark': '4.7',
    'name': 'Ведьмак: Крещение огнём',
  },
  {
    'image': 'css\\images\\witcher_6.png',
    'genre': 'Фэнтези',
    'mark': '4.0',
    'name': 'Ведьмак: Башня Ласточки',
  },
  {
    'image': 'css\\images\\witcher_7.png',
    'genre': 'Фэнтези',
    'mark': '4.5',
    'name': 'Ведьмак: Владычица озера',
  },
]

const genres = ['Фэнтези', 'Фантастика', 'Российская Классика', 'Зарубежная классика', 'Бизнес-литература', 'Детективы']

function print_genres() {
  for (let element of Object.values(genres)) {
    document.write(`<a href="#">${element}</a>`);
  }
}

function get_cards_html() {
  var cardsHtml = '';
  for (let element of Object.values(valuesCards)) {
    cardsHtml += get_card_html(element);
  }

  return cardsHtml;
}

function get_card_html(book) {
  return `\
    <article class="card">\
      <section class="card-top">\
        <a href="#" class="card-image">\
          <img src="${book.image}" alt=""/>\
        </a>\
      </section>\
      <div class="card-bottom">\
        <div class="book-info">\
          <section class="book-genre">${book.genre}</section>\
          <section class="auther-mark">${book.mark}</section>\
        </div>\
        <a href="#" class="book-name">${book.name}</a>\
      </div>\
    </article>`;
}
