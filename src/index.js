export default function () {
  return import('lodash').then(m => m.default || m)
}
