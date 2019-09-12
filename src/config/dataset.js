export default {
  menuData: [{
    name: '首页',
    route: '#/'
  }, {
    name: '壶口资讯',
    route: '#/',
    sub: [{
      name: '简介',
      route: '#/about'
    }, {
      name: '历史',
      route: '#/'
    }, {
      name: '文化',
      route: '#/'
    }, {
      name: '地理',
      route: '#/'
    }, {
      name: '资源',
      route: '#/'
    }, {
      name: '美文',
      route: '#/'
    }]
  }, {
    name: '特色景点',
    route: '#/test'
  }, {
    name: '壶口攻略',
    route: '#/'
  }, {
    name: '魅力壶口',
    route: '#/'
  }, {
    name: '人力资源',
    route: '#/'
  }, {
    name: '联系我们',
    route: '#/'
  }],
  menuRelations: {
    'home': 0,
    'about': 1,
    'test': 2
  }
}
