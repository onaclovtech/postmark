postmark
========

Using Sendgrid in your own app is easy now.

Simply reference email in your module:

     var app = angular.module('myapp', ['email']);

and then $email in your controller:

     function MyController($scope, $email, $http, $log)
     
Set your API user and Key Variables (I'm hoping this will change in the future):
 
      var api_user = "";
      var api_key = "";

Finally send an email:

     $email.$send(api_user, api_key, to, name, "Test", "This Please click on this link to confirm your email address: \n\n someURL/" + "\n\n", "somename@somesite.com");
