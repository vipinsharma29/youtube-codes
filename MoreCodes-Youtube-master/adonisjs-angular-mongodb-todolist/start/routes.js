'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {import('@adonisjs/framework/src/Route/Manager'} */
const Route = use('Route')

Route.group(() => {
  Route.post('task', 'TaskController.store')
  Route.get('tasks', 'TaskController.index')
  Route.get('task/:id', 'TaskController.show')
  Route.put('task/:id', 'TaskController.update')
  Route.delete('task/:id', 'TaskController.delete')
}).prefix('api')
