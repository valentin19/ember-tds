import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('developers', function() {
    this.route('new');
    this.route('edit', {path: 'edit/:developer_id'});
    this.route('delete', {path: 'delete/:developer_id'});
  });
  this.route('projects', function() {
    this.route('new');
    this.route('edit', {path: "edit/:project_id"});
    this.route('delete', {path: "delete/:project_id"});
  });
  this.route('project', {path: "project/:project_id"});

  this.route('', function() {
    this.route('story', function() {
      this.route('new', {path: "new/:project_id"});
    });
  });
});

export default Router;
