import { helper } from '@ember/component/helper';

export default helper(function classList(positional) {
  return positional
    .filter(Boolean)
    .map(c => String(c).trim())
    .join(' ');
});
