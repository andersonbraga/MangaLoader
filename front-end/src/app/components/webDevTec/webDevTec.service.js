export class WebDevTecService {
    constructor() {
        'ngInject';

        this.data = [
            {
                'title': 'Tower of Gods',
                'url': 'Ler Webtoon',
                'description': 'Webtoon',
                'logo': 'Tower.webp',
                'link': 'tower-of-gods-descricao',
                'logo-descricao': 'Tower.webp'

      },
            {
                'title': 'Noblese',
                'url': 'Ler Webtoon',
                'description': 'Webtoon',
                'logo': 'Noblese.webp',
                'link': 'noblese-descricao',
                'logo-descricao': 'Noblese.webp'
      },
            {
                'title': 'Orange',
                'url': 'Ler Webtoon',
                'description': 'Webtoon',
                'logo': 'orange.webp',
                'link': 'orange-descricao',
                'logo-orange': 'orange.webp'
      },
            {
                'title': 'unTouchable',
                'url': 'Ler Webtoon',
                'description': 'Webtoon',
                'logo': 'untouchable.webp',
                'link': 'untouchable-descricao',
                'logo-untouchable': 'untouchable.webp'
      },
            {
                'title': 'Dr.Frost',
                'url': 'Ler Webtoon',
                'description': 'Webtoon',
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
