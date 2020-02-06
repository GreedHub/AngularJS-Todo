var myApp = angular.module("myApp", ['angular.filter', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.select','ngclipboard']);
myApp.controller('appCtrl', function ($scope, $http, $filter, $uibModal, $sce, $rootScope, $q) {

  var vm = this;

  vm.initialState = () => {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    vm.newTodoItem = {
      title:'',
      description:''
    }

  }

  vm.initialState();

  vm.todos = [
    {
      id: 0,
      title: "title 1",
      description: "content 1",
      checked:false
    },
    {
      id: 1,
      title: "title 2",
      description: "content 2",
      checked:true
    },
    {
      id: 2,
      title: "title 3",
      description: "content 3",
      checked:false
    },
  ];

  vm.checkTodo = id => {
    vm.todos = vm.todos.map(todo=>{ 
      todo.checked = todo.id === id ? !todo.checked : todo.checked;
      return todo;
    });
  }

  vm.removeTodo = id => {
    vm.todos = vm.todos.filter(todo=> todo.id === id ? null : todo );
  }

  vm.addTodo = ()=>{

    if(vm.newTodoItem.title === ''){
      return alert("You should add a title")
    }

    const {title,description} = vm.newTodoItem;
    vm.todos = [
      ...vm.todos,
      {
        id:vm.todos.length,
        title,
        description,
        checked:false
      }
    ];

    vm.initialState();

  }

});


myApp.config(function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;

})

myApp.filter('percentage', ['$filter', function ($filter) {
	return function (input, decimals) {

		return $filter('number')(input.replace(/,/g, ".") * 100, decimals) + '%';
	};
}]);

myApp.directive('compile', ['$compile', function ($compile) {
    return function(scope, element, attrs) {
      scope.$watch(
        function(scope) {
          // watch the 'compile' expression for changes
          return scope.$eval(attrs.compile);
        },
        function(value) {
          // when the 'compile' expression changes
          // assign it into the current DOM
          element.html(value);

          // compile the new DOM and link it to the current
          // scope.
          // NOTE: we only compile .childNodes so that
          // we don't get into infinite loop compiling ourselves
          $compile(element.contents())(scope);
        }
    );
  };
}]);

myApp.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});



window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});