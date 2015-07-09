var express = require('express');
var router = express.Router();

var quizController = require('../Controller/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
router.get('/author/creditos', quizController.creditos);

module.exports = router;
