import angular from 'angular';

class Controller {

  constructor($element) {
    this._element = $element;
  }

  $postLink() {
    this._element.addClass('layout-align-space-around-center layout-column layout-fill');
  }

}
Controller.$inject = [ '$element' ];

export default Controller;
