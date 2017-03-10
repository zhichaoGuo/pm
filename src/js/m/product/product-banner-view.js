/**
 * 广告显示组件
 */

import Backbone from 'backbone'

import ProductBannerViewTpl from './product-banner-view.tpl'

let Model = Backbone.Model.extend({});

const LayoutView = Backbone.View.extend({
  className: 'product-banner-view',
  template: ProductBannerViewTpl(),
  initialize(){
    var t = this;
    t.model = new Model();
    t.listenTo(t, 'destroy', t.destroy);
    t.listenTo(t.model, 'change', t.render);
  },
  render(){
    var t = this;
    t.$el.html(tpl(t.template, {
      data: t.model.toJSON()
    }));
    return t;
  },
  setItems (item){
    var t = this;
    t.model.set(item);
  },
  destroy () {
    var t = this;
    t.remove()
  }
});

export default LayoutView;