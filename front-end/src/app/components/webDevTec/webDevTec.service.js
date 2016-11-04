export class WebDevTecService {
  constructor () {
    'ngInject';

    this.data = [
      {
        'title': 'Tower of Gods',
        'url': 'Ler Manga',
        'description': 'Manhwa',
        'logo': 'Tower.webp',
        'descricao': 'tw'
      },
      {
        'title': 'Noblese',
        'url': 'Ler Manga',
        'description': 'Manhwa',
        'logo': 'Noblese.webp'
      },
      {
        'title': 'Orange',
        'url': 'Ler Manga',
        'description': 'Manhwa',
        'logo': 'orange.webp'
      },
      {
        'title': 'unTouchable',
        'url': 'Ler Manga',
        'description': 'Manhwa',
        'logo': 'untouchable.webp'
      },
      {
        'title': 'Dr.Frost',
        'url': 'Ler Manga',
        'description': 'Manhwa',
        'logo': 'frost.webp'
      }



    ];
  }

  getTec() {
    return this.data;
  }
}
