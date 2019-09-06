$("#submit").click(function(){
    var name = $("#name").val()
    var username = $("#username").val()
    var password = $("#password").val()
    var language = $("#language").val()

    console.log(name)
    console.log(username)
    console.log(password)
    console.log(language)

    if (language === "spanish"){
         console.log("spanish")
    }
  });

 