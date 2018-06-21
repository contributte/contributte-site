import releases from '../../../data/releases';
import { orderBy } from 'lodash';

export function getReleases() {
    return orderBy(releases, ['created_at'], ['desc']);
}
