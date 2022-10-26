<!DOCTYPE html>
<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</head>

<body>

    <nav class="navbar navbar-light" >
        <div class="container-fluid" style="background-color: white;">
          <a style="margin-left: auto; margin-right:auto;" class="navbar-brand">Smart Ticket</a>          
        </div>
      </nav>

<div class="container" style="width:400px; margin-top:10%">
    <form name="loginForm" method="POST" action="/loginWeb">
        @csrf
        <label class="title">
            Email:
        </label>
        <input class="form-control"  name="email" type="email"/>
        <br>
        <label class="title">
            Password:
        </label>
        <input  class="form-control" type="password" name="password"/>
        <br>
        <label class="title">
            Confirm Password:
        </label>
        <input class="form-control" type="password" name="password_confirmation" />
        <br>
    <input type="submit" name="submitLogin" value="Log in" class="btn-success form-control"/>
    </form>
</div>


</body>

</html>
