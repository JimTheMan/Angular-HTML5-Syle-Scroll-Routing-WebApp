!function(){"use strict";angular.module("html5Scroll",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("html5Scroll").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("html5Scroll").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,a,n,o){var r,i=t(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){i.type(t).pause()["delete"]()}),r=e.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(t){i.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){r()})}function a(t,e){function a(){return n().then(function(){t.info("Activated Contributors View")})}function n(){return e.getContributors(10).then(function(t){return o.contributors=t,o.contributors})}var o=this;o.contributors=[],a()}a.$inject=["$log","githubContributor"];var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:a,controllerAs:"vm"};return n}t.$inject=["malarkey"],angular.module("html5Scroll").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function a(a){function o(t){return t.data}function r(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return a||(a=30),e.get(n+"/contributors?per_page="+a).then(o)["catch"](r)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:n,getContributors:a};return o}t.$inject=["$log","$http"],angular.module("html5Scroll").factory("githubContributor",t)}(),function(){"use strict";function t(t,e,a,n,o,r,i){function s(){c(),e(function(){u.classAnimation="rubberBand"},4e3)}function l(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),u.classAnimation=""}function c(){u.awesomeThings=a.getTec(),angular.forEach(u.awesomeThings,function(t){t.rank=Math.random()})}var u=this;u.awesomeThings=[],u.classAnimation="",u.creationDate=1462687563988,u.showToastr=l,s(),u.scrollTo=function(t){$("#"+t).position().top;$.scrollTo($("#"+t).position().top,1e3)}}t.$inject=["$log","$timeout","webDevTec","toastr","$anchorScroll","$location","$document"],angular.module("html5Scroll").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("html5Scroll").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("html5Scroll").config(t)}(),function(){"use strict";angular.module("html5Scroll").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("html5Scroll").config(t)}(),angular.module("html5Scroll").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class=container><div><acme-navbar creation-date=main.creationDate></acme-navbar></div><button ng-click="main.scrollTo(\'hey-there-text\')">Scroll to the Hey, You Made It Section</button> <button ng-click="main.scrollTo(\'works-nicely-text\')">Scroll to the Works Nicely Section</button><br><br><span class=center-main-text><h1><i>Go Ahead, Click The Buttons!</i></h1></span><div class=empty-space></div><div id=scrollRoute1 class=text-center><h1>Hey There!</h1><p class=lead><img src=assets/images/yeoman.png alt="I\'m Yeoman"><br>This started from the Gulp-Angular generator (Jim\'s all-time favorite Angular 1 generator)!</p><p class="animated infinite" ng-class=main.classAnimation></p></div><div class=empty-space></div><div id=scrollRoute2 class=text-center><h1>Holla!</h1><p class=lead><img src=assets/images/yeoman.png alt="I\'m Yeoman"><br>Always a pleasure chillin\' in your apps.</p><p class="animated infinite" ng-class=main.classAnimation><button type=button class="btn btn-lg btn-success" ng-click=main.showToastr()>Splendid Day Today, Jimmy!</button></p><p>Jim is very<acme-malarkey extra-values="[\'Cool\', \'Interesting\', \'Funny\', \'Intelligent\', \'Dorky\']"></acme-malarkey></p></div><br><div class=center-main-text><h1 id=hey-there-text>Hey, You Finally Made It Here! :)</h1></div><br><div class=row><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class=thumbnail><img class=pull-right ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class=caption><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href={{awesomeThing.url}}>{{ awesomeThing.url }}</a></p></div></div></div></div><div class=center-main-text><h1 id=works-nicely-text>Works Pretty Nicely, Eh?</h1><div class=empty-space></div><div class=empty-space></div><div class=empty-space></div><p>Yeah buddy!</p></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=https://github.com/Swiip/generator-gulp-angular><span class="glyphicon glyphicon-flash"></span> Jim\'s Angular Site With "HTML5 Routing"</a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav"><li class=active><a ng-href=#>Home</a></li><!--<li><a ng-href="#">About</a></li>--><!--<li><a ng-href="#">Contact</a></li>--></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><!--<li>Application was created {{ // vm.relativeDate }}.</li>--></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-bb58609dba.js.map
