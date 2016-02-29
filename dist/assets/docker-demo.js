"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('docker-demo/app', ['exports', 'ember', 'docker-demo/resolver', 'ember/load-initializers', 'docker-demo/config/environment'], function (exports, _ember, _dockerDemoResolver, _emberLoadInitializers, _dockerDemoConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dockerDemoConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dockerDemoConfigEnvironment['default'].podModulePrefix,
    Resolver: _dockerDemoResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dockerDemoConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('docker-demo/blueprints/ember-material-lite', ['exports', 'ember-material-lite/blueprints/ember-material-lite'], function (exports, _emberMaterialLiteBlueprintsEmberMaterialLite) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteBlueprintsEmberMaterialLite['default'];
    }
  });
});
define('docker-demo/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'docker-demo/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dockerDemoConfigEnvironment) {

  var name = _dockerDemoConfigEnvironment['default'].APP.name;
  var version = _dockerDemoConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('docker-demo/components/dd-music', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        classNames: ['mdl-cell', 'mdl-cell--12-col', 'mdl-shadow--2dp', 'dd-music-item'],
        attributeBindings: ['data-path'],
        'data-path': _ember['default'].computed.oneWay("currentItem.path"),
        click: function click() {
            this.$().parent('.mdl-grid').find('audio').get(0).load();
            this.$().removeClass('mdl-shadow--2dp');
            this.$().parent('.mdl-grid').find('source').attr('src', 'assets/music/' + this.$().data('path'));
            this.$().parent('.mdl-grid').find('audio').get(0).play();
        },
        mouseLeave: function mouseLeave() {
            this.$().addClass('mdl-shadow--2dp');
        }
    });
});
define('docker-demo/components/mdl-button', ['exports', 'ember-material-lite/components/mdl-button'], function (exports, _emberMaterialLiteComponentsMdlButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlButton['default'];
    }
  });
});
define('docker-demo/components/mdl-card-actions', ['exports', 'ember-material-lite/components/mdl-card-actions'], function (exports, _emberMaterialLiteComponentsMdlCardActions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlCardActions['default'];
    }
  });
});
define('docker-demo/components/mdl-card-buttons', ['exports', 'ember-material-lite/components/mdl-card-buttons'], function (exports, _emberMaterialLiteComponentsMdlCardButtons) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlCardButtons['default'];
    }
  });
});
define('docker-demo/components/mdl-card', ['exports', 'ember-material-lite/components/mdl-card'], function (exports, _emberMaterialLiteComponentsMdlCard) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlCard['default'];
    }
  });
});
define('docker-demo/components/mdl-checkbox', ['exports', 'ember-material-lite/components/mdl-checkbox'], function (exports, _emberMaterialLiteComponentsMdlCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlCheckbox['default'];
    }
  });
});
define('docker-demo/components/mdl-footer-dropdown-section', ['exports', 'ember-material-lite/components/mdl-footer-dropdown-section'], function (exports, _emberMaterialLiteComponentsMdlFooterDropdownSection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlFooterDropdownSection['default'];
    }
  });
});
define('docker-demo/components/mdl-footer-linklist', ['exports', 'ember-material-lite/components/mdl-footer-linklist'], function (exports, _emberMaterialLiteComponentsMdlFooterLinklist) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlFooterLinklist['default'];
    }
  });
});
define('docker-demo/components/mdl-footer-section', ['exports', 'ember-material-lite/components/mdl-footer-section'], function (exports, _emberMaterialLiteComponentsMdlFooterSection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlFooterSection['default'];
    }
  });
});
define('docker-demo/components/mdl-icon-toggle', ['exports', 'ember-material-lite/components/mdl-icon-toggle'], function (exports, _emberMaterialLiteComponentsMdlIconToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlIconToggle['default'];
    }
  });
});
define('docker-demo/components/mdl-icon', ['exports', 'ember-material-lite/components/mdl-icon'], function (exports, _emberMaterialLiteComponentsMdlIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlIcon['default'];
    }
  });
});
define('docker-demo/components/mdl-mega-footer', ['exports', 'ember-material-lite/components/mdl-mega-footer'], function (exports, _emberMaterialLiteComponentsMdlMegaFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlMegaFooter['default'];
    }
  });
});
define('docker-demo/components/mdl-menu-item', ['exports', 'ember-material-lite/components/mdl-menu-item'], function (exports, _emberMaterialLiteComponentsMdlMenuItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlMenuItem['default'];
    }
  });
});
define('docker-demo/components/mdl-menu', ['exports', 'ember-material-lite/components/mdl-menu'], function (exports, _emberMaterialLiteComponentsMdlMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlMenu['default'];
    }
  });
});
define('docker-demo/components/mdl-mini-footer', ['exports', 'ember-material-lite/components/mdl-mini-footer'], function (exports, _emberMaterialLiteComponentsMdlMiniFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlMiniFooter['default'];
    }
  });
});
define('docker-demo/components/mdl-nav-item', ['exports', 'ember-material-lite/components/mdl-nav-item'], function (exports, _emberMaterialLiteComponentsMdlNavItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlNavItem['default'];
    }
  });
});
define('docker-demo/components/mdl-nav', ['exports', 'ember-material-lite/components/mdl-nav'], function (exports, _emberMaterialLiteComponentsMdlNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlNav['default'];
    }
  });
});
define('docker-demo/components/mdl-progress', ['exports', 'ember-material-lite/components/mdl-progress'], function (exports, _emberMaterialLiteComponentsMdlProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlProgress['default'];
    }
  });
});
define('docker-demo/components/mdl-radio', ['exports', 'ember-material-lite/components/mdl-radio'], function (exports, _emberMaterialLiteComponentsMdlRadio) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlRadio['default'];
    }
  });
});
define('docker-demo/components/mdl-slider', ['exports', 'ember-material-lite/components/mdl-slider'], function (exports, _emberMaterialLiteComponentsMdlSlider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlSlider['default'];
    }
  });
});
define('docker-demo/components/mdl-spinner', ['exports', 'ember-material-lite/components/mdl-spinner'], function (exports, _emberMaterialLiteComponentsMdlSpinner) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlSpinner['default'];
    }
  });
});
define('docker-demo/components/mdl-switch', ['exports', 'ember-material-lite/components/mdl-switch'], function (exports, _emberMaterialLiteComponentsMdlSwitch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlSwitch['default'];
    }
  });
});
define('docker-demo/components/mdl-tab', ['exports', 'ember-material-lite/components/mdl-tab'], function (exports, _emberMaterialLiteComponentsMdlTab) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlTab['default'];
    }
  });
});
define('docker-demo/components/mdl-table-col', ['exports', 'ember-material-lite/components/mdl-table-col'], function (exports, _emberMaterialLiteComponentsMdlTableCol) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlTableCol['default'];
    }
  });
});
define('docker-demo/components/mdl-table', ['exports', 'ember-material-lite/components/mdl-table'], function (exports, _emberMaterialLiteComponentsMdlTable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlTable['default'];
    }
  });
});
define('docker-demo/components/mdl-tabs', ['exports', 'ember-material-lite/components/mdl-tabs'], function (exports, _emberMaterialLiteComponentsMdlTabs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlTabs['default'];
    }
  });
});
define('docker-demo/components/mdl-textarea', ['exports', 'ember-material-lite/components/mdl-textarea'], function (exports, _emberMaterialLiteComponentsMdlTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlTextarea['default'];
    }
  });
});
define('docker-demo/components/mdl-textfield', ['exports', 'ember-material-lite/components/mdl-textfield'], function (exports, _emberMaterialLiteComponentsMdlTextfield) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlTextfield['default'];
    }
  });
});
define('docker-demo/components/mdl-tooltip', ['exports', 'ember-material-lite/components/mdl-tooltip'], function (exports, _emberMaterialLiteComponentsMdlTooltip) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteComponentsMdlTooltip['default'];
    }
  });
});
define('docker-demo/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('docker-demo/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('docker-demo/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('docker-demo/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('docker-demo/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('docker-demo/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('docker-demo/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('docker-demo/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('docker-demo/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('docker-demo/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('docker-demo/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('docker-demo/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('docker-demo/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('docker-demo/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('docker-demo/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('docker-demo/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'docker-demo/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dockerDemoConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dockerDemoConfigEnvironment['default'].APP.name, _dockerDemoConfigEnvironment['default'].APP.version)
  };
});
define('docker-demo/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('docker-demo/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('docker-demo/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('docker-demo/initializers/export-application-global', ['exports', 'ember', 'docker-demo/config/environment'], function (exports, _ember, _dockerDemoConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dockerDemoConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _dockerDemoConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dockerDemoConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('docker-demo/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('docker-demo/initializers/material-lite-extensions', ['exports', 'ember-material-lite/initializers/material-lite-extensions'], function (exports, _emberMaterialLiteInitializersMaterialLiteExtensions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteInitializersMaterialLiteExtensions['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberMaterialLiteInitializersMaterialLiteExtensions.initialize;
    }
  });
});
define('docker-demo/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('docker-demo/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('docker-demo/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("docker-demo/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('docker-demo/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('docker-demo/router', ['exports', 'ember', 'docker-demo/config/environment'], function (exports, _ember, _dockerDemoConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dockerDemoConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define("docker-demo/routes/index", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Route.extend({
        model: function model() {
            return [{
                title: "BRODOWN",
                file: "01 - BRODOWN.mp3"
            }, {
                title: "All My Bros (Get Crunk) f/ C-Cow",
                file: "02 - All My Bros (Get Crunk).mp3"
            }, {
                title: "Tim Howard",
                file: "03 - Tim Howard.mp3"
            }, {
                title: "Take it to the Rack /f JonnyBlazed",
                file: "04 - Take it to the Rack.mp3"
            }, {
                title: "Molly Bros /f Wormwood",
                file: "05 - Molly Bros.mp3"
            }, {
                title: "GRIZcountry /f JonnyBlazed",
                file: "06 - GRIZcountry.mp3"
            }, {
                title: "Lifers",
                file: "07 - Lifers.mp3"
            }, {
                title: "Opium Wars",
                file: "08 - Opium Wars.mp3"
            }, {
                title: "Runnin' with my Money /f C-Cow and Doctress",
                file: "09 - Runnin' with my Money.mp3"
            }, {
                title: "Calling All Bros",
                file: "10 - Calling All Bros.mp3"
            }];
        }
    });
});
define('docker-demo/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("docker-demo/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "docker-demo/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "mdl-grid dd-container");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "outlet", ["loc", [null, [3, 8], [3, 18]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "docker-demo/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "mdl-nav", [], ["title", "Docker Demo", "fixedHeader", true], 0, null, ["loc", [null, [1, 0], [5, 12]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("docker-demo/templates/components/dd-music", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "docker-demo/templates/components/dd-music.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 0]), 0, 0);
        return morphs;
      },
      statements: [["content", "title", ["loc", [null, [1, 6], [1, 15]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("docker-demo/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 8
            },
            "end": {
              "line": 7,
              "column": 8
            }
          },
          "moduleName": "docker-demo/templates/index.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "dd-music", [], ["title", ["subexpr", "@mut", [["get", "item.title", ["loc", [null, [6, 29], [6, 39]]]]], [], []], "data-path", ["subexpr", "@mut", [["get", "item.file", ["loc", [null, [6, 50], [6, 59]]]]], [], []]], ["loc", [null, [6, 12], [6, 61]]]]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "docker-demo/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "mdl-cell mdl-cell--12-col");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "mdl-cell mdl-cell--4-col mdl-layout--large-screen-only");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "dd-player mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-shadow--2dp");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "mdl-grid dd-music-container");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("audio");
        dom.setAttribute(el3, "hidden", "");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("source");
        dom.setAttribute(el4, "src", "assets/music/01 - BRODOWN.mp3");
        dom.setAttribute(el4, "type", "audio/mpeg");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            Your browser does not support the audio element.\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "mdl-cell mdl-cell--4-col mdl-layout--large-screen-only");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [4, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [5, 16], [5, 21]]]]], [], 0, null, ["loc", [null, [5, 8], [7, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('docker-demo/config/environment', ['ember'], function(Ember) {
  var prefix = 'docker-demo';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */
if (!runningTests) {
  require("docker-demo/app")["default"].create({"name":"docker-demo","version":"0.0.0+30862c0d"});
}
/* jshint ignore:end */
//# sourceMappingURL=docker-demo.map