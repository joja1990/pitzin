<?php
require_once'sau-admin/sau-login.php';
require_once'sau-includes/sau-functions.php';
saulanger(SAULANGDEF);
$singleton = Login::singleton_login();
if(isset($_POST['saumail'])){
    $mail = $_POST['saumail'];
    $password = $_POST['saupassword'];
    $usuario = $singleton->login_users($mail,$password);
    if($usuario == TRUE){header("Location: escritorio");}
    if($usuario == FALSE){header("Location: index.php?error");}
}
if (isset($_SESSION['idusuario'])){header("Location: escritorio");}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="icon" type="image/png" href="sau-content/images/ico.png">    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title><?php echo SITETITLE.' - '.SAULANG17; ?></title>

    <!-- Bootstrap -->
    <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>
    <link href="st yle.css" rel="stylesheet">
    <link href='style2.css' rel='stylesheet' type='text/css'>

    <?php getstyle(SAUSTYLE); ?>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body style="background: #fff url(sau-content/images/background<?php echo rand(1,11); ?>.jpg);background-repeat: no-repeat;
    background-size: cover;">


<!-- ## CONTAINER ## -->
<div id="sau-container" class="container">


  <div id="loginbox" class="row login_box">

    <div class="col-md-12 col-xs-12" align="center">
        <div class="line"><h3><?php echo date('  h:i:s A'); ?></h3>
        </div>
        <div class="outter"><img src="sau-content/images/logPitzin.png" class="img-responsive"/></div>
        
    </div>

    <!-- ## LOGIN ## -->
    <div class="col-md-12 col-xs-12 login_control">        
        <div  >
            <?php
            $active = loginactive();
            if ($active == 1)
            {
              echo'
                  <form id="loginform" method="POST" action="">
                    <div class="control">
                      <div class="label">Email Address</div>
                      <input type="text" class="form-control" placeholder="'.SAULANG18.'" name="saumail">
                    </div>
                    <p></p>    
                    
                    <div class="control">
                      <div class="label">Password</div>
                      <input type="password" class="form-control" placeholder="'.SAULANG19.'" name="saupassword">
                    </div>
                    <p></p>
                    <div align="center">
                    <button type="submit" class="btn btn-orange"><i class="fa fa-chevron-right"></i> '.SAULANG17.'</button>   
                    </div>         
                  </form>';
            }
            else
            {
              echo'
                    <div class="avisodisable col-sm-12"><i class="fa fa-ban fa-4x animated infinite flash" aria-hidden="true"></i>'.SAULANG79.'</div>
                  ';
            }
            ?>
            <div class="col-md-6 col-xs-6  " align="center">
                <h5>
                    <a href="registro"><?php echo SAULANG20; ?></a>
                </h5>
            </div>
            <div class="col-md-6 col-xs-6  " align="center">
                <h5>
                    <a href="recuperar"><?php echo SAULANG21; ?></a>
                </h5>
            </div>

              

        </div>
    </div>
<!-- ## LOGIN ## -->  
  </div>

</div>

<!-- ## CONTAINER ## -->


    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="sau-content/js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="sau-content/js/bootstrap.min.js"></script>
    <!-- Validation -->
    <script src="sau-content/js/jquery.validate.min.js"></script>
    <!-- DateTimePicker -->
    <script src="sau-content/js/moment-with-locales.js"></script>
    <script src="sau-content/js/bootstrap-datetimepicker.js"></script>    
    <!-- Script Mesagges -->
    <script type="text/javascript">
         var messageerror1 = "<?php echo SAULANG15;?>";
         var messageerror2 = "<?php echo SAULANG16;?>";
    </script> 
    <!-- SAU 3 -->
    <script src="sau-content/js/sau3.js"></script>   
  </body>
</html>