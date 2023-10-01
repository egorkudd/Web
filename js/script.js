const contacts = {
  'tg' : '@ed_kud',
  'in' : '@egor_kd',
  'gm' : 'egor.ku.03@gmail.com',
  'vk' : '@egich2003',
}

const valuesCards = {
  0 : {
    'image': 'css/images/witcher_1.png',
    'genre': 'Фэнтези',
    'mark': '4.6',
    'name': 'Ведьмак: Последнее желание',
    'author': 'А. Сапковский',
    'description': 'Профессиональный истребитель чудовищ по своему очередному заданию прибывает в столицу Вызиму, чтобы расправиться с упырем и спасти дочь короля. Задание оказывается непростым, в процессе Геральт раскрывает придворные интриги, рискует собственной жизнью и даже получает опасное ранение. Первая книга из мира на острие меча, наполненного опасной магией, смертельными проклятиями, великолепными боевыми сценами и захватывающими приключениями.',
  },
  1: {
    'image': 'css/images/witcher_2.png',
    'genre': 'Фэнтези',
    'mark': '4.5',
    'name': 'Ведьмак: Меч предназначения',
    'author': 'А. Сапковский',
    'description': 'В этой части Геральт впервые встречает принцессу Цири и находит своё Предназначение. А ещё сражается с драконоборцами, выясняет свой предел возможного, раскрывает тайну погибших собирателей жемчуга и получает серьёзное ранение. А в это время огромная армия Нильфгаарда наступает с юга…',
  },
  2 : {
    'image': 'css/images/witcher_3.png',
    'genre': 'Фэнтези',
    'mark': '4.9',
    'name': 'Ведьмак: Кровь эльфов',
    'author': 'А. Сапковский',
    'description': 'Королевство Цинтра захвачено, но юная наследница Цири чудом избежала смерти. Геральт доставляет её в убежище ведьмаков, где девочка приступает к обучению. А затем выясняет, что и сама обладает магическими способностями. Теперь нужно разобраться, что делать с её сверхъестественными силами и как научиться ими управлять. Упомянутая в названии кровь эльфов в этой книге действительно прольется…',
  },
  3 : {
    'image': 'css/images/witcher_4.png',
    'genre': 'Фэнтези',
    'mark': '5.0',
    'name': 'Ведьмак: Час презрения',
    'author': 'А. Сапковский',
    'description': 'Разладилась дружба между королями и чародеями. Больше никому нельзя доверять. Кровавый мятеж развязывает новую войну, Цири находит временное убежище в пустыне, а чудом оставшийся в живых Геральт оказывается в Брокилоне. Теперь каждый сам по себе, и окружающий мир больше не станет прежним, как никому из наших героев уже не придётся вернуться к привычной жизни.',
  },
  4 : {
    'image': 'css/images/witcher_5.png',
    'genre': 'Фэнтези',
    'mark': '4.7',
    'name': 'Ведьмак: Крещение огнём',
    'author': 'А. Сапковский',
    'description': 'Геральт в компании обаятельного Лютика разыскивает Цири по всему свету. Вместе с ним путешествуют великолепная лучница Мальва, посланник императора, практически двойник Цири и – вы просто не поверите! – высший вампир. Так невероятно усложнилась и изменилась жизнь, если профессиональный наемник вынужден находиться в столь странной компании.',
  },
  5 : {
    'image': 'css/images/witcher_6.png',
    'genre': 'Фэнтези',
    'mark': '4.0',
    'name': 'Ведьмак: Башня Ласточки',
    'author': 'А. Сапковский',
    'description': 'Цири чудом избегает неминуемой гибели. По её следам идут могущественные враги. Чародейка, которая собиралась ей помощь, сама попадает в ужасную беду. Ведьмак по-прежнему не укрыл девушку под своим крылом, хотя продолжает искать её всюду. Остается одна надежда: укрыться в волшебной Башне Ласточки, куда теперь устремляется Цири.',
  },
  6 : {
    'image': 'css/images/witcher_7.png',
    'genre': 'Фэнтези',
    'mark': '4.5',
    'name': 'Ведьмак: Владычица озера',
    'author': 'А. Сапковский',
    'description': 'Теперь читатели вместе с героями этой саги заблудятся в параллельных мирах и окажутся у народа Ольх, где обитают эльфы и единороги. Цири и Йеннифер договариваются о встрече с Геральтом в Ривии. Но в назначенный день в городе начинается резня. Неужели действительно здесь и сейчас сбудется древнее Пророчество? А седовласый ведьмак погибнет, как и многие из его друзей? Чем же закончится культовая фэнтези-сага? Узнать об этом можно из последнего тома серии.',
  },
}

const genres = ['Фэнтези', 'Фантастика', 'Российская Классика', 'Зарубежная классика', 'Бизнес-литература', 'Детективы']

function get_genres() {
  var genresStr = '';
  for (const element of Object.values(genres)) {
     genresStr += `<a href="book_list.html?genre=${element}">${element}</a>`;
  }

  return genresStr;
}

function get_contacts() {
  var contactsStr = '';
  for (const [id, contact] of Object.entries(contacts)) {
     contactsStr += `<li id="${id}">${contact}</li>`;
  }

  return contactsStr;
}

function get_all_cards_html() {
  var cardsHtml = '';
  for (const [id, book] of Object.entries(valuesCards)) {
    cardsHtml += get_card_html(id, book);
  }

  return cardsHtml;
}

function get_card_html(id, book) {
  return `\
    <article class="card">\
      <section class="card-top">\
        <div class="card-image">\
          <img src="${book.image}" alt=""/>\
        </div>\
      </section>\
      <div class="card-bottom">\
        <div class="book-info">\
          <section class="book-genre">${book.genre}</section>\
          <section class="auther-mark">${book.mark}</section>\
        </div>\
        <a href="book_description.html?id=${id}" class="book-name">${book.name}</a>\
      </div>\
    </article>`;
}

function get_book_decription() {
  const url = new URL(window.location);
  const id = url.searchParams.get('id');
  const book = valuesCards[id];

  return `\
    <img src="${book.image}">\
    <section class="desc-container">\
      <p class="desc-author">${book.author}</p>\
      <p class="desc-name">${book.name}</p>\
      <p class="desc-text">${book.description}</p>\
    </section>\
    <div class="same-books-container">\
      <p class="same-books-title">Похожая литература по мнению меня</p>\
    </div>`;
}

function get_cards_html() {
  const url = new URL(window.location);

  var name = url.searchParams.get('book_name');
  if (name != null) return get_cards_html_by_name(name);

  var genre = url.searchParams.get('genre');
  if (genre != null) return get_cards_html_by_genre(genre);  
}

function get_cards_html_by_name(name) {
  name = name.toLowerCase();
  var cardsHtml = '';
    for (const [id, book] of Object.entries(valuesCards)) {
      if (~book.name.toLowerCase().indexOf(name)) {
        cardsHtml += get_card_html(id, book);  
      }
    }

    return cardsHtml;
}

function get_cards_html_by_genre(genre) {
  var cardsHtml = '';
    for (const [id, book] of Object.entries(valuesCards)) {
      if (book.genre == genre) {
        cardsHtml += get_card_html(id, book);  
      }
    }

    return cardsHtml;
}

// function onHeaderLoad() {
//   const header = document.querySelector('header');
// }