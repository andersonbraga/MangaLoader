export class WebDevTecService {
  constructor () {
    'ngInject';

    this.data = [
      {
        'title': 'Tower of Gods',
        'url': 'Ler Manga',
        'description': 'Manhwa',
        'logo': 'Tower.png'
      },
      {
        'title': 'Noblese',
        'url': 'Ler Manga',
        'description': 'Manhwa',
        'logo': 'Noblese.png'
      },
      {
        'title': 'Orange',
        'url': 'Ler Manga',
        'description': 'Manhwa',
        'logo': 'orange.png'
      },
      {
        'title': 'unTouchable',
        'url': 'Ler Manga',
        'description': 'Manhwa',
        'logo': 'untouchable.png'
      },
      {
        'title': 'Dr.Frost',
        'url': 'Ler Manga',
        'description': 'Manhwa',
        'logo': 'frost.png'
      }



    ];
  }

  getTec() {
    return this.data;
  }
}
