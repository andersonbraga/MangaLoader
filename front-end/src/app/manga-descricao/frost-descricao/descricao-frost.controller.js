export class FrostController {
    constructor($timeout, webDevTec) {
        'ngInject';

        this.awesomeThings = [];

        this.creationDate = 1477685708528;


        this.activate($timeout, webDevTec);
    }

    activate($timeout, webDevTec) {
        this.getWebDevTec(webDevTec);
        $timeout(() => {
            this.classAnimation = 'rubberBand';
        }, 4000);
    }

    getWebDevTec(webDevTec) {
        this.awesomeThings = webDevTec.getTec();

        angular.forEach(this.awesomeThings, (awesomeThing) => {
            awesomeThing.rank = Math.random();
        });
    }
}
