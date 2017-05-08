import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature('resources')
        .developmentLogging();

    aurelia.start().then(x => x.setRoot('app'));
}