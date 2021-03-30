import repositories from './../../../../../data/repositories.json';
import {filter, find} from 'lodash';

export function getRepositories() {
  return filter(repositories, r => r.enabled);
}

export function findRepository(args) {
  return find(repositories, args);
}
