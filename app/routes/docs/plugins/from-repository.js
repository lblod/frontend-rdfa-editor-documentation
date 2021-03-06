import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DocsPluginsFromRepositoryRoute extends Route {
  @service repository;

  async model({namespace, repository}){
    return this.repository.fetchReadme(namespace, repository);
  }
}
