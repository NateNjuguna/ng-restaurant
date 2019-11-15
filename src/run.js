import angular from 'angular';

const run = ($auth, $rootScope, $state, $window) => {
  /*
    * Decimal adjustment of a number.
    *
    * @param {String}  type  The type of adjustment.
    * @param {Number}  value The number.
    * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
    * @returns {Number} The adjusted value.
    */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return $window.Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = $window.Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Number round
  if (!$window.Math.roundX) {
    $window.Math.roundX = (value, X, exp) => {
      const factor = 1 / X;
      return decimalAdjust('round', $window.Math.round(value * factor) * X, exp);
    }
  }
  // Decimal round
  if (!$window.Math.round10) {
    $window.Math.round10 = (value, exp) => {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!$window.Math.floor10) {
    $window.Math.floor10 = (value, exp) => {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!$window.Math.ceil10) {
    $window.Math.ceil10 = (value, exp) => {
      return decimalAdjust('ceil', value, exp);
    };
  }
  $window.Array.prototype.diff = function(a) {
    return this.filter(i => (a.indexOf(i) < 0));
  };
  $window.Object.defineProperty($window.Object.prototype, '_nrKeys', {
    value: function() {
      return $window.Object.keys(this);
    }
  });
  $window.Object.defineProperty($window.Object.prototype, '_nrValues', {
    value: function() {
      return $window.Object.values(this);
    }
  });
  
  $rootScope.title = 'NG Restaurant';
  $rootScope.$on('authenticated', () => {
    $rootScope.title = 'NG Restaurant | Redirecting...';
    $state.go('app.menu', null, {
      location: 'replace',
    });
  });
  
  $auth.start();
};
run.$inject = [ '$auth', '$rootScope', '$state', '$window' ];

export default run;