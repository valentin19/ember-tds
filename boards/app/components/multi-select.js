import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'select',
  classNames: ['form-control'],
  selectedIds:'',

  selectedElements: computed('selectedIds.[]', function() {
    return this.get('selectedIds').map((id) => {
      return this.get('elements').findBy('id', id);
    });
  }),
});
