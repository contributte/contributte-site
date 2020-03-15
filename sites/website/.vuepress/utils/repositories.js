import repositories from '../../../data/repositories';
import {filter, find} from 'lodash';

export function getEnabledRepositories() {
  return filter(repositories, r => r.enabled);
}

export function getRepository(repository) {
  return repositories[repository];
}

export function isEnabledRepository(repository) {
  return getEnabledRepositories()[repository] !== undefined;
}

export function findRepository(args) {
  return find(repositories, args);
}
