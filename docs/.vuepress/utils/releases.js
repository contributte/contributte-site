import releases from '../../../data/releases';
import { orderBy } from 'lodash';

export function getReleases() {
    return orderBy(releases, ['published_at'], ['desc']);
}
