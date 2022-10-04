export function getParam(param) {
  const urlParam = new URLSearchParams(location.search);
  return urlParam.get(param);
}
