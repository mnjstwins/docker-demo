import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['mdl-cell', 'mdl-cell--12-col', 'mdl-shadow--2dp', 'dd-music-item'],
    attributeBindings: ['data-path'],
    'data-path' : Ember.computed.oneWay("currentItem.path"),
    click() {
        this.$().parent('.mdl-grid').find('audio').get(0).load();
        this.$().removeClass('mdl-shadow--2dp');
        this.$().parent('.mdl-grid').find('source').attr('src', 'assets/music/' + this.$().data('path'));
        this.$().parent('.mdl-grid').find('audio').get(0).play();
    },
    mouseLeave() {
        this.$().addClass('mdl-shadow--2dp');
    }
});
