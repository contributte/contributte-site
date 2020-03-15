export function link(repo) {
  if (!repo || !repo.docs) throw "Repo argument is required";

  if (repo.docs.v === 'v0' || repo.docs.v === 'v1') {
    return '/packages/' + repo.org + '/' + repo.name + '.html';
  } else if (repo.docs.v === 'v2') {
    return '/packages/' + repo.org + '/' + repo.name + '/';
  } else {
    throw "Undefined repo version";
  }
}
