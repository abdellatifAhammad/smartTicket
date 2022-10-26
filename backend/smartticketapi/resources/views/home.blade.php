<?php $users = session()->get("data")["users"] ?>
<?php $guichitier=session()->get("data")["guichitier"] ?>
<!DOCTYPE html>
<html>
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</head>
<body>
    @csrf
    <nav class="navbar navbar-light" >
        <div class="container-fluid" style="background-color: white;">
          <a class="navbar-brand">Smart Ticket</a>
          <div class="d-flex">            
            <form method="post" action="logout">        
              @csrf
                <input type="submit" value="Log out" class="btn btn-outline-danger"/>
            </form>
          </div>
        </div>
      </nav>
<br>
<br>
    <div class="container" style="padding: 0;">
        <h4>Bonjour {{$guichitier->prenom." ".$guichitier->nom}}, voici la liste des étudiants inscrits au restaurant: </h4>
    </div>    
<br>
<br>    
    <div class="container">
    <table class="table" style="padding:5%;">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Prenom</th>
            <th scope="col">Nom</th>
            <th scope="col">Email</th>
            <th scope="col">Sold</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
     <?php $modals = [] ?>
          @foreach($users as $u)
                @if($u->type == 0)
                    <tr> 
                    <td>{{$u->id}}</td>    
                    <td>{{$u->prenom}}</td>
                    <td>{{$u->nom}}</td>
                    <td>{{$u->email}}</td>
                    <td>{{$u->sold}}</td> 
                    <td>
                        <button 
                        type="button" 
                        class="btn btn-primary" 
                        data-bs-toggle="modal" 
                        data-bs-target="#addSold{{$u->id}}">Modifier le sold</button>
                    </td>
                </tr>                
<div class='modal fade' id='addSold{{$u->id}}' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>Gérer Le sold</h5>
              <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div class='modal-body'>
              <form method='post' action='/addBalanceWeb'>
                @csrf
              <input type='number' value='{{$u->sold}}' name='total'/>
              <input type='number' value='{{$u->id}}' name='id' hidden/>
              <div class='modal-footer'>
              <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Fermer</button>
              <input type='submit' class='btn btn-primary' value="Enregistrer"/>
              </div>     
              </form>
            </div>            
          </div>
         
                @endif
            @endforeach  
        </tbody>
      </table>




</div>
</div>      

</body>
</div>
</html>

