import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    save(note){
      //let model=this.modelFor(this.routeName);
      if(note.get('content')){
        note.set('info','Note Sauvegardée !');
      }
      }


  }
});
