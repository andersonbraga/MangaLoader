export class WebDevTecService {
    constructor() {
        'ngInject';

        this.data = [
            {
                'title': 'Tower of Gods',
                'url': 'Ler Manga',
                'description': 'Manhwa',
                'logo': 'Tower.webp',
                'link': 'descricao-towe-of-god',
                'logo-descricao': 'Tower.webp'

      },
            {
                'title': 'Noblese',
                'url': 'Ler Manga',
                'description': 'Manhwa',
                'logo': 'Noblese.webp',
                'link': 'descricao-noblese',
                'logo-descricao': 'Noblese.webp'
      },
            {
                'title': 'Orange',
                'url': 'Ler Manga',
                'description': 'Manhwa',
                'logo': 'orange.webp',
                'link': 'descricao-orange',
                'logo-orange': 'orange.webp'
      },
            {
                'title': 'unTouchable',
                'url': 'Ler Manga',
                'description': 'Manhwa',
                'logo': 'untouchable.webp',
                'link': 'descricao-untouchable',
                'logo-untouchable': 'untouchable.webp'
      },
            {
                'title': 'Dr.Frost',
                'url': 'Ler Manga',
                'description': 'Manhwa',
                'logo': 'frost.webp',
                'link': 'descricao-frost',
                'logo-descricao': 'frost.webp'
      }



    ];
    }

    getTec() {
        return this.data;
    }
}
