//生成当前路由参数&id
function generatorRouterParam(pathname, url) {
  let param = pathname.substring(url.length, pathname.length).split('/');
  return {
    name: param[1],
    id: param[2]
  };
}

export default generatorRouterParam;
