import Controller from '@ember/controller';
import {get} from '@ember/object';

export default Controller.extend({
  copyArrayElements(from,to){
    to.push.apply(to, from);
  },
  actions:{
    addToIncluded(){
      let model = this.modelFor(this.routeName);
      let dispoItems_ = get(model, 'dispoItems');
      let includedItems = get(model, 'IncludedItems');
      this.copyArrayElements(dispoItems_, includedItems);
    }
  }
});
