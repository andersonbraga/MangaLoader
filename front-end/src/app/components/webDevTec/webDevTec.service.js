export class WebDevTecService {
    constructor() {
        'ngInject';

        this.data = [
            {
                'title': 'Tower of Gods',
                'url': 'Ler Manga',
                'description': 'Manhwa',
                'logo': 'Tower.webp',
                'link': 'tower-of-gods-descricao',
                'logo-descricao': 'Tower.webp'

      },
            {
                'title': 'Noblese',
                'url': 'Ler Manga',
                'description': 'Manhwa',
                'logo': 'Noblese.webp',
                'link': 'noblese-descricao',
                'logo-descricao': 'Noblese.webp'
      },
            {
                'title': 'Orange',
                'url': 'Ler Manga',
                'description': 'Manhwa',
                'logo': 'orange.webp',
                'link': 'orange-descricao',
                'logo-orange': 'orange.webp'
      },
            {
                'title': 'unTouchable',
                'url': 'Ler Manga',
                'description': 'Manhwa',
                'logo': 'untouchable.webp',
                'link': 'untouchable-descricao',
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
