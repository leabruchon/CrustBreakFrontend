export const proxyToJson = (proxy) => {
  return JSON.parse(JSON.stringify(Object.assign({}, proxy)));
};
