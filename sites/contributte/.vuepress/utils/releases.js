import releases from './../../../../data/releases.json';
import { orderBy, take } from 'lodash';

export function getReleases() {
  return orderBy(releases, ['created_at'], ['desc']);
}

export function getFewReleases(few = 10) {
  return take(orderBy(releases, ['created_at'], ['desc']), few);
}
