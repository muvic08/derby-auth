var derby = require('derby')
    , app = derby.createApp(module)
    , get = app.get

derby.use(require('derby-ui-boot'));
derby.use(require('../../ui'));

get('/', function(page, model) {
  return model.subscribe("users." + model.session.userId, function(err, user) {
    model.ref('_user', user);
    page.render();
    model.fn('_loggedIn', '_user.auth', function(auth) {
        console.log(model.session);
      return model.session.loggedIn;
    });
  });
});

app.ready(function(model) {
    // nothing here
});
