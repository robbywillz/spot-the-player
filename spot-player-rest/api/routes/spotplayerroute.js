module.exports = function(app) {
  var spotPlayer = require('../controllers/spotplayercontroller');

  // player Routes
  app.route('/tasks')
    .get(spotPlayer.list_all_tasks)
    .post(spotPlayer.create_a_task);

  app.route('/tasks/:taskId')
    .get(spotPlayer.read_a_task)
    .put(spotPlayer.update_a_task)
    .delete(spotPlayer.delete_a_task);

  app.route('/players/name/:nameOfTask')
  	.get(spotPlayer.read_name_task);
  
};