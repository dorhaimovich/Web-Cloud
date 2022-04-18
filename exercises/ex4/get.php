<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>php Login</title>
    </head>
    <body>
    <section>
        <?php
        $Password = "123456";
        $oldPW = $_GET["reg_oldPW"];
        $newPW = $_GET["reg_newPW"];
        $verifyPW = $_GET["reg_verPW"];
        
        if ($oldPW == $Password && $newPW == $verifyPW)
        {
            echo "<h2> Password changed Successfully to " . $newPW . "</h2>";
            $Password = $newPW;
        }
        else
            echo "<h2> Failed to change Password.</h2>";
            ?>
    </section>
    <body>
</html>